import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App/index.css";
import ScanQRcode from "./App/ScanQRcode";
import MakeQRcode from "./App/MakeQRcode";
// import Home from "./App/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/scan"} element={<ScanQRcode />} />
        <Route path={"/qrcode"} element={<MakeQRcode />} />
        {/* <Route path={"/"} element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
