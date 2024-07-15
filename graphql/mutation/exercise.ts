import { gql } from "@apollo/client"
export const CREATE_EXERCISE = gql`
mutation createExercise($name: String!, $construction: String!, $exerciseType: [String!]!, $level: String!) {
    createExercise(createExerciseDto: { name: $name, construction: $construction, exerciseType: $exerciseType, level: $level }) {
        id
        name
        construction
        exerciseType
        level
    }
}
`;

export const UPDATE_EXERCISE = gql`
mutation updateExercise($id: String!, $name: String, $construction: String, $exerciseType: [String!], $level: String ) {
    updateExercise(id: $id, updateExerciseDto: { name: $name, construction: $construction, exerciseType: $exerciseType, level: $level }) {
        id
        name
        construction
        exerciseType
        level
    }
}
`;

export const DELETE_EXERCISE = gql`
mutation deleteExercise($id: String!) {
    deleteExercise(id:$id) {
        id
        name
        construction
        exerciseType
        level
    }
}
`;