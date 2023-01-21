import "./App.css";
import { TodoProvider } from "./Context/TodoContext";
import { ToggleProvider } from "./Context/ToggleContext";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main/Main";

function App() {
  return (
    <>
      <ToggleProvider>
        <TodoProvider>
          <Header />
          <Main />
          <Footer />
        </TodoProvider>
      </ToggleProvider>
    </>
  );
}

export default App;
