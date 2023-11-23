import styled from 'styled-components';

export const HomeWrapper = styled.div`
    /* display: flex; */
    margin: 50px 100px;
    text-align: center;
  
`;

export const DesctriptionWrapper = styled.div`
    font-size: 1.5rem;
    display: flex;
    padding-right: 100px;
    margin-bottom: 100px;

    > div {
        /* margin-left: 100px; */
    }
`;

export const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
   margin: 10px 10px 10px 10px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 40px 0;
    color: orangered;
`;
export const HorizontalLine = styled.hr`
    background-color: orangered;
    height: 3px;
    border: 0;
`;

export const ImageStyled = styled.img`
  width:500px;
  height:350px;
`