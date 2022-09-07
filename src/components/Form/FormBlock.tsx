import { Props } from "../../types"
import { theme } from "../theme"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { ChangeEvent, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../../shared/redux/authSlice"
import { useSelector } from "react-redux"
import { RootState } from "../../shared/redux/store"
import { InputGroup, InputText, Label, LoginTitle, SubmitButton, Error } from "./elements"

interface LoginFormProps extends Props{
    redirectTo?: string,
} 

const FormStyled = styled.form`
    @media screen and (max-width: 320px){
        max-width:290px;
    }
    @media screen and (min-width: 321px){
        align-self: center;
        max-width:480px;
    }
    height: 333px;
    align-items: center;
    width:100%;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    border-radius: 6px;
    border-width: 5px;
    border-style: solid;
    border-color: ${theme.main.primary};
    box-shadow: 0 4px 10px -3px #000000;

`


export const Form = ({className} : LoginFormProps)=>{
    const [loginInput, setLogin] = useState("");
    const [passwordInput, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const isLoggedIn = useSelector<RootState>(state=>state.auth.isLoggedIn)
    const dispath = useDispatch();

    async function auth(login: string, password: string) {
        //const response = await fetch("https://blahblahblah.com/auth", POST_OPTIONS_WITH_LOGIN_AND_PASSWORD)
        //const data = await respones.json()
        //return data.isLoggedIn
        return login === "login" && password === "password";
    }

    const navigate = useNavigate();

    useEffect(()=>{
        if(isLoggedIn){
          navigate("/feed");
        }
      },[isLoggedIn, navigate])

    async function onSubmit(event: SubmitEvent) {
        event.preventDefault()
        setIsError(false);
        const isLoggedIn = await auth(loginInput, passwordInput);
        if(isLoggedIn){
            dispath(login(loginInput));
            navigate("/feed");
        }
        else{
            setIsError(true)
        }
    }




    return(
        <FormStyled onSubmit={onSubmit} className={className?className:""}>
            <LoginTitle position="center">Autorization</LoginTitle>
            {isError && <Error>Неверный логин или пароль</Error>}
            <InputGroup>
                <Label htmlFor="login">login</Label>
                <InputText value={loginInput} onChange={(e:ChangeEvent<HTMLInputElement>)=>setLogin(e.target.value)} type="text" id="login"/>
            </InputGroup>
            <InputGroup>
                <Label htmlFor="password">password</Label>
                <InputText value={passwordInput} onChange={(e:ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)} type="password" id="password"/>
            </InputGroup>
            <SubmitButton>
                Submit
            </SubmitButton>
        </FormStyled>
    )
}