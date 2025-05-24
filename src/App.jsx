import { DexProvider } from "./shared/DexContext";
import Router from "./shared/Router";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
    return (
        // DexContext 전역 적용
        <DexProvider>
            <GlobalStyle />
            <Router />
        </DexProvider>
    );
}

export default App;
