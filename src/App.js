import "./App.scss"
//importing components
import Header from "./Components/Header/Header";
//importing pages
import HomePage from "./pages/HomePage/HomePage";
import CreatersPage from "./pages/CreatersPage/CreatersPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
//importing other important stuff
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
  <>
    <BrowserRouter>
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/Home' />}></Route>
        <Route path='/home' element={<HomePage />}></Route> 
        <Route path='/creaters' element={<CreatersPage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
     </div>
    </BrowserRouter>
  </>
  );
}

export default App;
