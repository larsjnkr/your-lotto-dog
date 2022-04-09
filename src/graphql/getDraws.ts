import gql from "graphql-tag";

// TODO TYPE
const getDraws = gql`
  query currentDraw($type: String!, $limit: Int!) {
    draw(type: $type, limit: $limit) {
      success
      draws {
        date
        numbers
        additionalNumbers
      }
    }
  }
`;

export default getDraws;
