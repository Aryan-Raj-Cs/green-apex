import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import configureStore from "./redux/store/store";
import { Provider } from "react-redux";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
