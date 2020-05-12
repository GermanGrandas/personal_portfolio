import { Fragment } from "react";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
      margin : 0;
      padding : 0;
  }
  body {
    margin: 0;
    font-size: 110%;
    background: #f0f0f0;
    
  }
`;

const LayoutWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  background: #f6f6ef;
  footer {
    padding: 1em;
  }
`;

const Layout = ({ children, title, backButton }) => (
  <Fragment>
    <Head>
      <title>{title}@GermánGrandas</title>
    </Head>
    <GlobalStyle />
    <LayoutWrapper>
      {children}
      <footer>&copy; {new Date().getFullYear()} </footer>
    </LayoutWrapper>
  </Fragment>
);
export default Layout;
