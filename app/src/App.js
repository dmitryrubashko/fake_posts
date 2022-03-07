import {BrowserRouter} from "react-router-dom";

import Routes from './shared/routes/routes';
import MainLayout from "./shared/commonComponents/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes/>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
