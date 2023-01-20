import "./App.css";
import { ToggleProvider } from "./Context/ToggleContext";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main/Main";

function App() {
  return (
    <>
    <ToggleProvider>
      <Header />
      <Main />
      <Footer />
    </ToggleProvider>
    </>
  );
}

export default App;
