import styled from "styled-components"
import { theme } from "../theme"
import Logo from "../Logo"
import { Props } from "../../types"

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
    return(
        <HeaderStyled className={className?className:""}>
            <Logo short={true}/>
        </HeaderStyled>
    )

}