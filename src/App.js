import "./App.css";
import Header from "./components/Header";
import Center from "./components/Center";
import CreateInvoice from "./components/CreateInvoice";
function App() {
  return (
    <>
      <div className="flex justify-between">
        <Header />
        <Center />
      </div>
      <div>
        <CreateInvoice />
      </div>
      4
    </>
  );
}

export default App;
