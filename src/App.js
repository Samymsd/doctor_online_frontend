import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Banner from "./components/general/Banner";
import Footer from "./components/general/Footer";
import Header from "./components/general/Header";
import SpecialtiesForm from "./components/specialties/SpecialtiesForm";
import SpecialtyTable from "./components/specialties/SpecialtiesTable";

const App = () =>{
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner/>} exact></Route>
          <Route path="/specialties" element={<SpecialtyTable/>} exact></Route>
          <Route path="/specialties/form" element={<SpecialtiesForm/>} exact></Route>
          <Route path="/specialties/form/:id" element={<SpecialtiesForm />} exact></Route>

        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}
export default App;
