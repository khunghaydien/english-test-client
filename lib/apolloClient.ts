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
        console.log("newAccessToken", newAccessToken);
        if (!newAccessToken) {
            throw new Error("New access token not received.");
        }
        localStorage.setItem("accessToken", newAccessToken);
        return `Bearer ${newAccessToken}`;
    } catch (err) {
        console.log(err);
        throw new Error("Error getting new access token.");
    }
}

let retryCount = 0;
const maxRetry = 3;

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    const operationName = operation.operationName;
    console.log(operationName, "operationName");

    if (graphQLErrors) {
        for (const err of graphQLErrors) {
            if (err.extensions.code === "UNAUTHENTICATED" && retryCount < maxRetry) {
                retryCount++;

                return new Observable((observer) => {
                    refreshToken(client)
                        .then((token) => {
                            console.log("token", token);
                            operation.setContext(({ headers = {} }) => ({
                                headers: {
                                    ...headers,
                                    authorization: token,
                                },
                            }));
                            const forward$ = forward(operation);
                            forward$.subscribe(observer);
                        })
                        .catch((error) => observer.error(error));
                });
            }
        }
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