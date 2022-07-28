import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import ShoesList from "./ShoesList";
import HatsList from "./HatsList";

function App(props) {
  if (props.shoes || props.hats === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="shoes/">
            <Route path="" element={<ShoesList shoes={props.shoes} />} />
            {/* <Route path='new' element={<ShoeForm />} /> */}
          </Route>
          <Route path="hats/">
            <Route path="" element={<HatsList hats={props.hats} />} />
            {/* <Route path='new' element={<ShoeForm />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
