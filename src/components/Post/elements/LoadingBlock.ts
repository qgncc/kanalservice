import styled from "styled-components";

interface LoadingBlockProps{
    width: string
    height: string
}

export const LoadingBlock = styled.div`
    margin: 3px 5px;
    width: ${ ({width}: LoadingBlockProps)=> width?width:"100%"};
    height: ${ ({height}: LoadingBlockProps)=> height?height:"10px"};
    background-color: #a2a2a2;
`