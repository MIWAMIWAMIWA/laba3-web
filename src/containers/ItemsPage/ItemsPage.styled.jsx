import styled from 'styled-components';

export const ItemContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
    margin-left: 100px;
    img {
        margin: 0 100px;
        width: 400px;
    }
`

export const SubmitContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: center; 
    text-align: center;
    margin: 0 0px;
    p {
        margin-top: 0px;
    }
`

export const CategoryWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width:400px;
    a {
        margin: 20px 5px;
        color: black;
        background: orangered;
        text-decoration: none;
        border-radius: 10px;
        padding: 2px 10px;
        text-align: center;
    }
    
    div{
      margin: 20px 5px;
      color: orangered;
      background: black;
      text-decoration: none;
      border: 2px solid black;
      border-radius: 10px;
      padding: 2px 10px;
      text-align: center;
    }
`

export const Title = styled.h1`
    text-align: center;
`

export const Description = styled.p`
    white-space: pre-wrap;
`

export const DescriptionContainer = styled.div`
    margin: 0 300px 0 200px;
`
export const SelectMiwa = styled.select`
  margin: 20px 5px;
  color: orangered;
  background: black;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 10px;
  padding: 2px 10px;
  text-align: center;
`