import { toast } from "@/components/ui/use-toast";
import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
    gql,
    Observable,
    ApolloLink,
    HttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// Function to refresh the token
async function refreshToken(client: ApolloClient<NormalizedCacheObject>) {
    try {
        const { data } = await client.mutate({
            mutation: gql`
        mutation RefreshToken {
          refreshToken
        }
      `,
        });
        const newAccessToken = data?.refreshToken;
        if (!newAccessToken) {
            throw new Error("New access token not received.");
        }
        localStorage.setItem("accessToken", newAccessToken);
        toast({
            title: "Token Refreshed",
            description: "A new access token has been received.",
            variant: "success",
        });
        return `Bearer ${newAccessToken}`;
    } catch (err) {
        toast({
            title: "Token Refresh Error",
            description: "Error getting new access token.",
            variant: "destructive",
        });
        throw new Error("Error getting new access token.");
    }
}

let retryCount = 0;
const maxRetry = 3;

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {

    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path, extensions }) => {
            if (extensions) {
                const validationErrors: any = extensions;
                toast({
                    title: validationErrors?.code?.split("_")?.join(" ") as string,
                    description: Object.values(validationErrors)[0] as string,
                    variant: "destructive",
                });
            } else {
                toast({
                    title: "GRAPHQL ERROR",
                    description: message,
                    variant: "destructive",
                });
            }
        });

        for (const err of graphQLErrors) {
            if (err.extensions.code === "UNAUTHENTICATED" && retryCount < maxRetry) {
                retryCount++;

                return new Observable((observer) => {
                    refreshToken(client)
                        .then((token) => {
                            operation.setContext(({ headers = {} }) => ({
                                headers: {
                                    ...headers,
                                    authorization: token,
                                },
                            }));
                            const forward$ = forward(operation);
                            forward$.subscribe(observer);
                        })
                        .catch((error) => {
                            toast({
                                title: "RETRY FAILED",
                                description: "Unable to refresh token. Please log in again.",
                                variant: "destructive",
                            });
                            observer.error(error);
                        });
                });
            }
        }
    }

    if (networkError) {
        toast({
            title: "NETWORK ERROR",
            description: networkError.message,
            variant: "destructive",
        });
    }

});

// Create an HTTP link
const httpLink = new HttpLink({
    uri: "http://localhost:3030/graphql",
    credentials: "include",
    headers: {
        "Content-Type": "application/json",
    },
});

// Combine error link and HTTP link
const link = ApolloLink.from([errorLink, httpLink]);

// Initialize Apollo Client
export const client = new ApolloClient({
    link,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    getCommentsByPostId: {
                        merge(existing, incoming) {
                            return incoming;
                        },
                    },
                },
            },
        },
    }),
});