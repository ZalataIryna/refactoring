import { gql } from "@apollo/client";

const messageFragment = gql`
  fragment MyMessage on Message {
    id
    event {
      id #id should be for correct render
    }
  }
`;

export default messageFragment