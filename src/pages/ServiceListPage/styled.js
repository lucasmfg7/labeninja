import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 80px);
  padding: 1rem;

  h2 {
    color: var(--purple);
  }
`;

export const GridContainer = styled.div`
  padding: 1rem 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;
