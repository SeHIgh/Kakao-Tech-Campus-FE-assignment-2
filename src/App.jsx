import { Provider } from "react-redux";
import Router from "./shared/Router";
import GlobalStyle from "./styles/GlobalStyle";
import store from "./redux/config/configStore";

function App() {
    return (
        // redux-toolkit을 사용하여 덱 상태 관리
        <Provider store={store}>
            <GlobalStyle />
            <Router />
        </Provider>
    );
}

export default App;
