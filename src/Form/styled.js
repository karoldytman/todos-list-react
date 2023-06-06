import styled from "styled-components";

export const StyleForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  align-content: center;
  padding: 15px;
  background-color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.gallery};
  margin: 10px;
`;

export const Buttons = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  border: none;
  margin: 10px;
  cursor: pointer;
  transition: 1s;

  &:hover {
    background-color: rgb(72, 196, 196);
    transform: scale(1.1);
  }
`;
