import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Home } from "./pages";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
      <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>

       <GlobalStyle />
        <Home />
    </ThemeProvider>
      </Provider>
  );
}

export default App;
