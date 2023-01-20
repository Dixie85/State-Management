import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Provider store={store}>
        <Main />
      </Provider>
      <Footer />
    </>
  );
}

export default App;