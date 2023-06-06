import styled from "styled-components";

export const StyleSection = styled.body`
    margin: 10px;
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.gallery};
`;

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 700;
    padding-left: 15px;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    grid-gap: 10px;
    border-bottom: 1.5px solid ${({ theme }) => theme.color.gallery};
    margin-left: 15px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        padding-bottom: 25px;
        grid-gap: 5px;
    }
`;

export const Paragraph = styled.div`
    padding: 20px;
`;