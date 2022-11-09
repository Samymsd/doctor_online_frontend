import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Banner from "./components/general/Banner";
import Header from "./components/general/Header";
import SpecialtyTable from "./components/specialties/SpecialtiesTable";

const App = () =>{
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner/>} exact></Route>
          <Route path="/specialties" element={<SpecialtyTable/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
