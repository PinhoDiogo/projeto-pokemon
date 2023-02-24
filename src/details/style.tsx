import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;   
    justify-content: center; 
    background-color: blue;
    height: 650px;    
    
    h1{
        text-align: center;
        margin: 4rem;
    }

    p {
        line-height: 3px;
    }
`
export const hpText = styled.span`
    font-size: 10px;
    font-weight: 700;
`


export const PokemonStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px; 
    height: 70%;   
    border-radius: 1rem;
    border: 1px solid black;    
    justify-content: center;    
    background-color: transparent;
    padding: 3rem;

    img{
        height: 200px;
        margin-right: 2rem;
    }

    hr{
        width: 200px;
        border: none;
        border-color: black;
    }

    .pokemon-name{
        text-align: center;
        margin-top: 1rem;
        font-weight: bold;
        font-size: 2.0em;
        text-transform: capitalize;
    }
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    
`