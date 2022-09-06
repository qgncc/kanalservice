import { useState } from "react";
import styled from "styled-components";
import { Props } from "../../types";
import { theme } from "../theme";
import { Text } from "./elements/Text";
import { Image } from "./elements/Image";
import { LoadingBlock } from "./elements/LoadingBlock";

interface PostProps extends Props{
    author?: string,
    company?: string,
    title?: string
    content?: string,
    image?: string
}


const PostStyled = styled.article`
    padding: 25px 17px 41px;
    border-style: solid;
    border-width: 6px;
    max-width:325px;
    @media screen and (max-width:320px){
        max-width: 292px;
        width:100%;
        padding: 12px 17px 17px;
    }
    @media screen and (min-width:321px){
        padding: 25px 25px 41px;
        min-width:300px;
        max-width: 325px;
    }
    @media screen and (min-width:744px){
        padding: 25px 25px 41px;
        min-width:300px;
        width: 50%;
        max-width: 467px;
    }
    border-color: ${theme.main.primary};
    
`
const PostHeader = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width:744px){
        flex-direction: row;
    }
`
const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width:744px){
        margin-left: 8px;
    }
`


export const Post = ({ author, company, title, content, image, className }: PostProps)=>{
    const [isOpen, setIsOpen] = useState(false);

    function onPointerDown(){
        setIsOpen((prevState)=>!prevState)
    }


    return(
        <PostStyled className={className} onPointerDown={onPointerDown}>
            <PostHeader>
                    {
                        image? <Image src={image} alt={title} />:<LoadingBlock width="150px" height="150px"/>
                    }
                <UserInfo>
                    <Text>
                        Author: {author? author: <LoadingBlock/>}
                    </Text>
                    <Text>
                        Company: {company? company: <LoadingBlock/>}
                    </Text>
                </UserInfo>
            </PostHeader> 
            
            <Text>
                Title: {title? title: <LoadingBlock/>}
            </Text>
            {
                (isOpen || window.innerWidth>320) && 
                    <Text>
                        {content? content: <LoadingBlock height="75px"/>}
                    </Text>
            }
        </PostStyled>
    )
} 