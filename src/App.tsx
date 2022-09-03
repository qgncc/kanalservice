import React from 'react';
import { Form } from './components/LoginForm';
import styled from 'styled-components';
import {theme} from "./components/theme"
import { Header } from './components/Header';

const Main = styled.main`
  width:100%;
  background-color: ${theme.main.background};
  display: flex;
  justify-content: center;
  flex: 1 1 auto;
`
const Wrapper = styled.div`
  width:100vw;
  height:100vh;
  display: flex;
  flex-direction: column;
`

const LoginForm = styled(Form)`
  margin-top:14px;
`

function App() {
  return (
    <Wrapper>
      <Header/>
      <Main className="App">
        <LoginForm/>
      </Main>
    </Wrapper>
  );
}

export default App;
