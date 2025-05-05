import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { store } from "./app/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <h1>
      <Provider store={store}>
        <Navbar />
        <Outlet />
      </Provider>
      
    </h1>
  )
  
}

export default App;