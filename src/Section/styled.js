import styled from "styled-components";

export const StyleSection = styled.body`
    margin: 10px;
    background-color: white;
    border: 1px solid #ddd;
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
    border-bottom: 1.5px solid #ddd;
    margin-left: 15px;

@media (max-width:767px) {
        grid-template-columns: 1fr;
        padding-bottom: 25px;
        grid-gap: 5px;
    }
`;

export const Paragraph = styled.div`
    padding: 20px;
`;