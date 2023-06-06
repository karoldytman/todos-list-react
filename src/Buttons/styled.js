import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: 15px;
`;

export const Button = styled.button`
    margin: 0 0 0 20px;
    border: none;
    color: ${({ theme }) => theme.color.teal};
    background-color: ${({ theme }) => theme.color.white};
    font-size: 15px;
    transition: 0,5s;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        color: rgb(47, 205, 70);
    }

    &:disabled {
        color: rgb(203, 201, 201)
    }
`;
