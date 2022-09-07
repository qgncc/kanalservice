import styled from "styled-components";

interface IconProps{
    width?: number,
    height?: number,
} 

export const Icon = styled.img`
    width: ${ ({width}:IconProps)=>width?width:"50px" }
    height: ${ ({height}:IconProps)=>height?height:"50px" }
`