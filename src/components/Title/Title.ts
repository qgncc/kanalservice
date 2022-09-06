import styled from "styled-components";
import { theme } from "../theme";

type ColorProps = {color?:string}
type TextAlignProps = {position?:"center"|"left"|"right"}


export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 800;
    color: ${ ({color}:ColorProps)=>color?color:theme.main.primary };
    margin: 0;
    text-align: ${ ({position}:TextAlignProps)=>position?position:"left" };
`
