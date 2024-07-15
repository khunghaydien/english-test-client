import { gql } from "@apollo/client";

export const GET_EXERCISES = gql`
query getExercises($name: String, $exerciseType: [String!], $level: String, $page: Int = 1, $pageSize: Int = 10, $field: String, $order: String) {
    getExercises(exerciseFilterDto: { name: $name, exerciseType: $exerciseType, level: $level }, paginationDto: { page: $page, pageSize: $pageSize }, orderByDto: { field: $field, order: $order }) {
        id
        name
        construction
        exerciseType
        level
    }
}
`;