import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Home";
import  NewInvoicepage from "./NewInvoice"
function App() {
  return (
    <>
      <Routes>
     <Route path="/" element={<Homepage />} >
     <Route path="/createinvoice" element={<NewInvoicepage/>} />
          </Route>
      </Routes >              
      
   
    </>
  );
}

export default App;
