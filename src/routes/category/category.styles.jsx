import styled from "styled-components";


export const CategoryTitle = styled.h1`
    font-size: 35px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 50px;
`;

export const CategoryProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;`;