import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 700px;
    padding: 20px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.color.gallery};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-left: 10px;
        margin-right: 20px;
    }
`;
