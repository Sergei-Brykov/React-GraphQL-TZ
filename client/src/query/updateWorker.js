import { gql } from "@apollo/client";

export const UPDATE_WORKER = gql`
  mutation updateWorker($input: WorkerInput) {
    updateWorker(input: $input) {
      fullName
      position
      birthday
      payment
    }
  }
`;
