import styled from "styled-components"

export const UserControls = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`
export const UserLogin = styled.div`
    display:none;
    font-weight:800;
    font-size:24px;
    @media screen and (min-width:1440px){
        display:block;
        margin-right: 10px;
    }
`
export const LogoutButton = styled.button`
    margin:0;
    padding:0;
    background: none;
    border: 0;

`
