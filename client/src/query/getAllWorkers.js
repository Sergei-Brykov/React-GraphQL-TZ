import { gql } from "@apollo/client";

export const GET_ALL_WORKERS = gql`
  query getAllWorkers($sort: String, $skip: Int) {
    getAllWorkers(sort: $sort, skip: $skip) {
      fullName
      id
      position
      birthday
      payment
    }
  }
`;
