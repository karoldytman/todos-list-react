import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 10px;
`;

export const Item = styled.li`
  display: grid;
  align-items: center;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.gallery};
  margin: 10px 0px 0px 0px;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  padding: 0px;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: green;
      transition: 1s;
    
  &:hover {
    background-color: rgb(57, 195, 57);
  }
`}

  ${({ remove }) =>
    remove &&
    css`
      width: 30px;
      height: 30px;
      border: none;
      background-color: red;
      color: ${({ theme }) => theme.color.white};
      transition: 1s;
    
  &:hover {
    background-color: rgb(251, 97, 97);
    transform: rotate(360deg);
  }
  `}
`;
