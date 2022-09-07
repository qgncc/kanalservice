import Form from './components/Form';
import styled from 'styled-components';
import {theme} from "./components/theme"
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Feed from './components/Feed';

const Main = styled.main`
  width:100%;
  background-color: ${theme.main.background};
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  padding: 0 15px;
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
        <Routes>
          <Route path="/" element={<FormElement/>}/>
          <Route path="feed" element={<Feed/>}/>
        </Routes>
      </Main>
    </Wrapper>
  );
}

export default App;
