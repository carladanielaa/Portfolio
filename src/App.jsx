

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Inicio from "./Components/Inicio"
import Projetos from "./Components/Projetos"
import Sobre from "./Components/Sobre"
import Footer from "./Components/Footer"
import styled from "styled-components"
import Header from "./Components/Header";
import { GlobalStyle } from "./Styled/global";


  const Links = styled(Link)`
  text-decoration:none;
  color:tomato;
  list-style:none;
  `
  const Nav = styled.nav`

  ul{
    list-style:none;
  }
  `

export default function App() {

  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
      <Header/>
       
       


        <Routes>

          <Route path="/" element={<Inicio />} />

          <Route path="/sobre" element={<Sobre />} />

          <Route path="/projetos" element={<Projetos />} />

          <Route path="/Footer" element={<Footer/>} />

        </Routes>

      </BrowserRouter>

     
    </>
  )
}
