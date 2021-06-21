import { gql } from "@apollo/client";

export const DELETE_WORKER = gql`
  mutation deleteWorker($input: WorkerInput) {
    deleteWorker(input: $input) {
      fullName
      position
      birthday
      payment
    }
  }
`;
