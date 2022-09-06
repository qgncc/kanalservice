import styled from "styled-components";
import useFetchPosts from "../../shared/hooks/useFetchPosts";
import Post from "../Post"

const FeedBlock = styled.div`
  display: flex;
  padding: 0 37px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 964px;
  @media screen and (min-width:321px){
    padding: 0 27px;
  }
  @media screen and (max-width:320px){
    padding: 0 14px;
  }
  @media screen and (min-width:744px){
    padding: 0;
  }

`

const PostElement = styled(Post)`
  margin-top:14px;
  @media screen and (min-width:321px){
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width:744px){
    margin: 25px 7.5px 0;
  }
`

export const Feed = ()=>{
  const {error, data} = useFetchPosts();

  const posts = data? data.map((post)=>{
    return <PostElement title={post.title} 
                        content={post.body}
                        company={post.user.company.name}
                        author={post.user.name}
                        image={post.photo.thumbnailUrl}
                        key={post.id}
            /> 
  }): (new Array(10)).fill(<PostElement/>)

  return(
    <FeedBlock>
      {posts}
    </FeedBlock>
  )
    
}