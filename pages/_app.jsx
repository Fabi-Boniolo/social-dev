import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle` 
  * {
  padding: 0;
  margin: 0;
  
}

body {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  color: #3a3a3a;
}

a {
  color: #8933cd;
  font-weight: bold;
  text-decoration: none;
}

`

function App ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
    
  )
}

export default App