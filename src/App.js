import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Homepage from "./Home";
import CreateInvoice from "./NewInvoice/CreateInvoice";
import InvoiceInfo from "./components/InvoiceInfo";
import Delete from "./components/Delete";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/CreateInvoice" element={<CreateInvoice />} />
        <Route path="/CreateInvoice/:id" element={<CreateInvoice />} />
        <Route path="InvoiceInfo/:id" element={<InvoiceInfo />} />
        <Route path="/Delete" element={<Delete />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
