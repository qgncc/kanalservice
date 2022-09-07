import styled from 'styled-components'

export const Logo = styled.img.attrs({src:"/logo.png"})`
    @media screen and (max-width: 500px){
        width:70px;
    }
    width:273px;
    object-position: left;
    object-fit: cover;
    height:63px;
`