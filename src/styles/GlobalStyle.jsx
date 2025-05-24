import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;

    width: 100%;
    min-height: 100dvh;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  #root{
    width: 100%;
    min-height: 100dvh;
    height: 100%;
  }

  button{
      padding: 8px 16px;
      border: 1px solid transparent;
      border-radius: 6px;
      cursor: pointer;

    transition: all 0.2s ease-in-out;
  }
  button:hover{
    border-color: gray;  
  }
`;

export default GlobalStyle;
