import styled from "styled-components"
import { theme } from "../theme"
import Logo from "./Logo"

const HeaderStyled = styled.header`
    width:100%;
    height: 118px;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    align-items: center;
    background-color: ${theme.main.secondary}
`

export const Header = ()=>{
    return(
        <HeaderStyled>
            <Logo short={true}/>
        </HeaderStyled>
    )

}