/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCharity = /* GraphQL */ `
  query GetCharity($id: ID!) {
    getCharity(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listCharities = /* GraphQL */ `
  query ListCharities(
    $filter: ModelCharityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
