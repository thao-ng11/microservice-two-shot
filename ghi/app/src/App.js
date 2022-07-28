import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import ShoesList from "./ShoesList";
import HatsList from "./HatsList";
import ShoeForm from "./ShoeForm";

function App(props) {
  // if (props.hats || props.shoes === undefined) {
  //   return null;
  // }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="shoes/">
            <Route path="" element={<ShoesList />} />
            <Route path='new' element={<ShoeForm />} />
          </Route>
          <Route path="hats/">
            <Route path="" element={<HatsList hats={props.hats} />} />
            {/* <Route path='new' element={<HatForm />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
