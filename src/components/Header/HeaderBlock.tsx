import styled from "styled-components"
import { MouseEvent } from 'react'
import { theme } from "../theme"
import Logo from "../Logo"
import { Props } from "../../types"
import Icon from "../Icon"
import { useSelector } from "react-redux"
import { RootState } from "../../shared/redux/store"
import { useDispatch } from "react-redux"
import { logout } from "../../shared/redux/authSlice"
import { LogoutButton, UserControls, UserLogin } from "./elements"


interface HeaderProps extends Props{

}

const HeaderStyled = styled.header`
    width:100%;
    height: 118px;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    flex: 0 0 auto;
    align-items: center;
    background-color: ${theme.main.secondary}
`



export const Header = ({className}:HeaderProps)=>{
    const [login, isLoggedIn] = useSelector<RootState, [string|null, boolean]>((state)=>[state.auth.login, state.auth.isLoggedIn])
    const dispatch = useDispatch()

    function onClick(event: MouseEvent<HTMLInputElement>) {
        dispatch(logout());
    }

    return(
        <HeaderStyled className={className?className:""}>
            <Logo/>
            <UserControls>
                <UserLogin>{isLoggedIn && login}</UserLogin>
                {isLoggedIn && <LogoutButton onClick={onClick}><Icon src="i_logout.svg"/></LogoutButton>}
            </UserControls>
        </HeaderStyled>
    )

}