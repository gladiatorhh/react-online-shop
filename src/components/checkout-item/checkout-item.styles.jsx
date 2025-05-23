import styled from "styled-components";

export const CheckOutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Detail = styled.span`
    width: 23%;
`;

export const QuantityContainer = styled(Detail)`
    display: flex;
`;

export const QuantityArrowButton = styled.button`
  cursor: pointer;
  outline: 0;
  border: none;
  background-color: transparent;
`;

export const QuantityValue = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;