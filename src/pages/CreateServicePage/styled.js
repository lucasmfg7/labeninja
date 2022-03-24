import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 80px);
  padding: 1rem;
  text-align: center;
`;

export const Content = styled.form`
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  border: 1px solid var(--purple);
  color: var(--black);
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 1rem;
  }

  input,
  select {
    border: 1px solid var(--purple);
    border-radius: 0.25rem;
    padding: 0.5rem 0.75rem;
    margin-bottom: 0.5rem;

    &::placeholder {
      color: var(--black);
      font-size: 1rem;
    }
  }

  option,
  input[type="date"] {
    color: var(--black);
    font-size: 1rem;
  }

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
