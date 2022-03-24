import styled from "styled-components";

export const Container = styled.div`
  background: var(--purple);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: var(--background);

    &:hover {
    }
  }

  button {
    border: 1px solid var(--background);
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    background: var(--background);
    color: var(--purple);
    font-weight: 600;
    transition: border 0.2s, background-color 0.2s, color 0.2s;

    &:hover {
      border: 1px solid var(--background);
      background-color: var(--purple);
      color: var(--background);
    }
  }
`;
