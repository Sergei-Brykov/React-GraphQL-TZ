import { gql } from "@apollo/client";

export const CREATE_WORKER = gql`
  mutation createWorker($input: WorkerInput) {
    createWorker(input: $input) {
      fullName
      position
      birthday
      payment
    }
  }
`;
