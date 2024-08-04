import router from './react-router/router.tsx';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.tsx';
import {Provider} from "react-redux";
import store from "./redux/store.tsx";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <RouterProvider router={router}   />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
