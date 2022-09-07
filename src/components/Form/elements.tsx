import styled from "styled-components";
import Button from "../Button";
import { theme } from "../theme";
import Title from "../Title";

export const LoginTitle = styled(Title)`
    margin-top: 15px;
    
    @media screen and (min-width:321px){
        margin-top: 25px;
        padding: 0;
    }
    @media screen and (min-width:500px){
        padding: 20.5px 0;
    }
`


export const SubmitButton = styled(Button)`
    margin-top: 25px;
    width:213px;
`
export const Label = styled.label`
    font-weight: 800;
    font-size: 2rem;
    display:flex;
    @media screen and ( min-width: 321px){
        flex-shrink: 0;
        flex-grow: 1;
        flex-basis: 120px;
`

export const InputText = styled.input`
border-color: ${theme.main.primary};
border-radius: 10px;
border-style: solid;
border-width: 4px;
background-color: #D9D9D9;
height: 39px;
margin-top: 10px;
@media screen and ( min-width: 321px){
    margin:0;
    flex-shrink: 1;
    flex-grow: 2;
    height:45px;
}
`

export const InputGroup = styled.div`
    display: flex;
    width:100%;
    margin-top: 13px;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    @media screen and ( min-width: 321px){
        margin-top: 25px;
    }
`
export const Error = styled.div`
    font-weight:800,
    font-size: 24px;
    color: red;
`