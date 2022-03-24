import styled from "styled-components";

export const Card = styled.div`
  align-items: center;
  border: 1px solid var(--purple);
  border-radius: 0.25rem;
  color: var(--background);
  background-color: var(--purple);
  padding: 1.5rem;
  width: 800px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 400px) {
    width: 350px;
    flex-direction: column;
    gap: 10px;
    padding: 1rem;
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
