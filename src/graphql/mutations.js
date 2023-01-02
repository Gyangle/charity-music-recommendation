/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCharity = /* GraphQL */ `
  mutation CreateCharity(
    $input: CreateCharityInput!
    $condition: ModelCharityConditionInput
  ) {
    createCharity(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateCharity = /* GraphQL */ `
  mutation UpdateCharity(
    $input: UpdateCharityInput!
    $condition: ModelCharityConditionInput
  ) {
    updateCharity(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteCharity = /* GraphQL */ `
  mutation DeleteCharity(
    $input: DeleteCharityInput!
    $condition: ModelCharityConditionInput
  ) {
    deleteCharity(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
