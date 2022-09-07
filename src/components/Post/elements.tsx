import styled from "styled-components";

export const Image = styled.img`
    width:150px;
    height:150px;
    margin-bottom: 20px;
    @media screen and (max-width: 320px){
        display:none;
    }
`
interface LoadingBlockProps{
    width: string
    height: string
}


export const LoadingBlock = styled.span`
    margin: 3px 5px;
    width: ${ ({width}: LoadingBlockProps)=> width?width:"100%"};
    height: ${ ({height}: LoadingBlockProps)=> height?height:"10px"};
    background-color: #a2a2a2;
`
export const Text = styled.p`
    font-size: 1.33rem;
    font-weight: 800;
    word-break: break-all;
    margin: 8px 0 0;
    @media screen and (min-width: 744px){
        word-break: normal;
    }
`

export const PostHeader = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width:745px){
        flex-direction: row;
    }
`
export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width:745px){
        margin-left: 8px;
    }
`