/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nmutation createExercise($name: String!, $construction: String!, $exerciseType: [String!]!, $level: String!) {\n    createExercise(createExerciseDto: { name: $name, construction: $construction, exerciseType: $exerciseType, level: $level }) {\n        id\n        name\n        construction\n        exerciseType\n        level\n    }\n}\n": types.CreateExerciseDocument,
    "\nmutation updateExercise($id: String!, $name: String, $construction: String, $exerciseType: [String!], $level: String ) {\n    updateExercise(id: $id, updateExerciseDto: { name: $name, construction: $construction, exerciseType: $exerciseType, level: $level }) {\n        id\n        name\n        construction\n        exerciseType\n        level\n    }\n}\n": types.UpdateExerciseDocument,
    "\nmutation deleteExercise($id: String!) {\n    deleteExercise(id:$id) {\n        id\n        name\n        construction\n        exerciseType\n        level\n    }\n}\n": types.DeleteExerciseDocument,
    "\n  mutation LoginUser($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      user {\n        email\n        id\n        fullname\n      }\n      roles{\n        name\n      }\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation LogoutUser {\n    logout\n  }\n": types.LogoutUserDocument,
    "\n  mutation RegisterUser(\n    $fullname: String!\n    $email: String!\n    $password: String!\n  ) {\n    register(\n      registerInput: {\n        fullname: $fullname\n        email: $email\n        password: $password\n      }\n    ) {\n      user {\n        id\n        fullname\n        email\n      }\n    }\n  }\n": types.RegisterUserDocument,
    "\nmutation deleteUser($id: String!) {\n    deleteUser(id: $id) {\n        fullname\n    }\n}\n": types.DeleteUserDocument,
    "\nquery getExercises($name: String, $exerciseType: [String!], $level: String, $page: Int = 1, $pageSize: Int = 10, $field: String, $order: String) {\n    getExercises(exerciseFilterDto: { name: $name, exerciseType: $exerciseType, level: $level }, paginationDto: { page: $page, pageSize: $pageSize }, orderByDto: { field: $field, order: $order }) {\n        id\n        name\n        construction\n        exerciseType\n        level\n    }\n}\n": types.GetExercisesDocument,
    "\n  query GetRoles {\n    getRoles {\n      id\n      name\n    }\n  }\n": types.GetRolesDocument,
    "\n  query GetUsers {\n    getUsers {\n      id\n      fullname\n      email\n      image\n    }\n  }\n": types.GetUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation createExercise($name: String!, $construction: String!, $exerciseType: [String!]!, $level: String!) {\n    createExercise(createExerciseDto: { name: $name, construction: $construction, exerciseType: $exerciseType, level: $level }) {\n        id\n        name\n        construction\n        exerciseType\n        level\n    }\n}\n"): (typeof documents)["\nmutation createExercise($name: String!, $construction: String!, $exerciseType: [String!]!, $level: String!) {\n    createExercise(createExerciseDto: { name: $name, construction: $construction, exerciseType: $exerciseType, level: $level }) {\n        id\n        name\n        construction\n        exerciseType\n        level\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation updateExercise($id: String!, $name: String, $construction: String, $exerciseType: [String!], $level: String ) {\n    updateExercise(id: $id, updateExerciseDto: { name: $name, construction: $construction, exerciseType: $exerciseType, level: $level }) {\n        id\n        name\n        construction\n        exerciseType\n        level\n    }\n}\n"): (typeof documents)["\nmutation updateExercise($id: String!, $name: String, $construction: String, $exerciseType: [String!], $level: String ) {\n    updateExercise(id: $id, updateExerciseDto: { name: $name, construction: $construction, exerciseType: $exerciseType, level: $level }) {\n        id\n        name\n        construction\n        exerciseType\n        level\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation deleteExercise($id: String!) {\n    deleteExercise(id:$id) {\n        id\n        name\n        construction\n        exerciseType\n        level\n    }\n}\n"): (typeof documents)["\nmutation deleteExercise($id: String!) {\n    deleteExercise(id:$id) {\n        id\n        name\n        construction\n        exerciseType\n        level\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LoginUser($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      user {\n        email\n        id\n        fullname\n      }\n      roles{\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LoginUser($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      user {\n        email\n        id\n        fullname\n      }\n      roles{\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LogoutUser {\n    logout\n  }\n"): (typeof documents)["\n  mutation LogoutUser {\n    logout\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RegisterUser(\n    $fullname: String!\n    $email: String!\n    $password: String!\n  ) {\n    register(\n      registerInput: {\n        fullname: $fullname\n        email: $email\n        password: $password\n      }\n    ) {\n      user {\n        id\n        fullname\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation RegisterUser(\n    $fullname: String!\n    $email: String!\n    $password: String!\n  ) {\n    register(\n      registerInput: {\n        fullname: $fullname\n        email: $email\n        password: $password\n      }\n    ) {\n      user {\n        id\n        fullname\n        email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation deleteUser($id: String!) {\n    deleteUser(id: $id) {\n        fullname\n    }\n}\n"): (typeof documents)["\nmutation deleteUser($id: String!) {\n    deleteUser(id: $id) {\n        fullname\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getExercises($name: String, $exerciseType: [String!], $level: String, $page: Int = 1, $pageSize: Int = 10, $field: String, $order: String) {\n    getExercises(exerciseFilterDto: { name: $name, exerciseType: $exerciseType, level: $level }, paginationDto: { page: $page, pageSize: $pageSize }, orderByDto: { field: $field, order: $order }) {\n        id\n        name\n        construction\n        exerciseType\n        level\n    }\n}\n"): (typeof documents)["\nquery getExercises($name: String, $exerciseType: [String!], $level: String, $page: Int = 1, $pageSize: Int = 10, $field: String, $order: String) {\n    getExercises(exerciseFilterDto: { name: $name, exerciseType: $exerciseType, level: $level }, paginationDto: { page: $page, pageSize: $pageSize }, orderByDto: { field: $field, order: $order }) {\n        id\n        name\n        construction\n        exerciseType\n        level\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRoles {\n    getRoles {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetRoles {\n    getRoles {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUsers {\n    getUsers {\n      id\n      fullname\n      email\n      image\n    }\n  }\n"): (typeof documents)["\n  query GetUsers {\n    getUsers {\n      id\n      fullname\n      email\n      image\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;