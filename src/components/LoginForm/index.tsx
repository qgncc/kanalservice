import { Props } from "../../types"
import LoginTitle from "./LoginTitle"
import InputText from "./InputText"
import Label from "./Label"
import SubmitButton from "./SubmitButton"
import { theme } from "../theme"
import styled from "styled-components"

interface LoginFormProps extends Props{
    className?: string;
} 

const FormStyled = styled.form`
    @media screen and (max-width: 320px){
        max-width:290px;
    }
    height: 333px;
    width:100%;
    display: flex;
    padding: 0 10.625%;
    flex-direction: column;
    border-radius: 6px;
    border-width: 5px;
    border-style: solid;
    border-color: ${theme.main.primary}
`


export const Form = ({className} : LoginFormProps)=>{
    return(
        <FormStyled className={className}>
            <LoginTitle>Autorization</LoginTitle>
            <Label htmlFor="login">login</Label>
            <InputText type="text" id="login"/>
            <Label htmlFor="password">password</Label>
            <InputText type="password" id="password"/>
            <SubmitButton type="submit">Submit</SubmitButton>
        </FormStyled>
    )
}