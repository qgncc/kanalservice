import React from 'react';
import Form from './components/Form';
import styled from 'styled-components';
import {theme} from "./components/theme"
import Header from './components/Header';
import Post from './components/Post';
import useFetchPosts from "./shared/hooks/useFetchPosts"
import Feed from './components/Feed';

const Main = styled.main`
  width:100%;
  background-color: ${theme.main.background};
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  width:100vw;
  height:100vh;
  display: flex;
  flex-direction: column;
`

const FormElement = styled(Form)`
  margin-top:14px;
`


function App() {
  return (
    <Wrapper>
      <Header/>
      <Main>
        {/* <FormElement/> */}
        <Feed/>
      </Main>
    </Wrapper>
  );
}

export default App;
