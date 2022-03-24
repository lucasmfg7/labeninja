import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 80px);
  padding: 2rem;

  button {
    border: 1px solid var(--purple);
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    background: var(--purple);
    color: var(--background);
    font-weight: 600;
    font-size: 1rem;
    transition: border 0.2s, background-color 0.2s, color 0.2s;

    &:hover {
      border-color: var(--purple);
      background-color: var(--background);
      color: var(--purple);
    }
  }
`;

export const DetailsContainer = styled.div`
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  border: 1px solid var(--purple);
  background-color: var(--purple);
  color: var(--background);
  margin-bottom: 1rem;
  max-width: 430px;

  h2 {
    text-align: center;
  }

  li {
    text-align: center;
    list-style: none;
    font-weight: 600;
  }
`;
