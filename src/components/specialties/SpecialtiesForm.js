import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import SpecialtiesService from "../services/SpecialtiesService";

const SpecialtiesForm = () => {

  const navigateTo = useNavigate(); 
  const { id } = useParams();
  const [ name, setName] = useState("");
  const [ description, setDescription ] = useState("");
  const [ attends_only_women, setAttends_only_women] = useState(false);
  const [ title, setTitle] = useState("");


  const saveSpecialty = async (event) => {
    event.preventDefault();
    try {
      const dataSpecialty = {
        name: name,
        description: description,
        attends_only_women: attends_only_women
      }
      console.log(dataSpecialty);
      if (id == null) {
        const response = await SpecialtiesService.saveSpecialties(dataSpecialty);
      } else {
        const response = await SpecialtiesService.editSpecialties(id, dataSpecialty);
      }
      navigateTo("/specialties");
    } catch (error) {
      console.log("Error" + error);
    }
  }

  const loadSpecialty = async ()=>{
    try {
      const response = await SpecialtiesService.loadSpecialties(id);
      if (response.status === 200) {
        setName(response.data.name);
        setDescription(response.data.description);
        setAttends_only_women(response.data.attends_only_women)
      }
    } catch (error) {
      console.log("Error" + error);
    }
  }

  useEffect(() => {
    if (id != null) {
      setTitle("Editar");
      loadSpecialty();
    } else {
      setTitle("Nueva");
    }
  }, [])

  const changeName = (event)=>{
    setName(event.target.value);
  }

  const changeDescription = (event)=>{
    setDescription(event.target.value);
  }

  const changeAttends = (event)=>{
    setAttends_only_women(event.target.checked);
  }

  return (
    <div className="container p-3 my-3">
      <h3>{title} Especialidad</h3>
      <form onSubmit={saveSpecialty}>
        <div className="row my-3">
          <div className="col-2">
            <input type="text" className="form-control form-control-sm" onChange={changeName} value={name} id="specialty" name="specialty" placeholder="Especialidad" required/>
          </div>
          <div className="col-6">
            <input type="text" className="form-control form-control-sm" onChange={changeDescription} value={description} id="description" name="description" placeholder="Descripción" required/>
          </div>
          <div className="col-3 mt-1">
            <input type="checkbox" className="form-check-input" onChange={changeAttends} checked={attends_only_women} id="attends_only_woman" name="attends_only_woman" />
            <label className="form-check-label ms-2"> Atiende solo mujeres</label>
          </div>
        </div>
         
        <div className="mt-3">
          <a href="/specialties" type="submit" className="btn btn-secondary btn-sm me-2 "><i className="bi bi-x-square"></i> Cancelar</a>
          <button type="submit" className="btn btn-primary btn-sm"><i className="bi bi-save"></i> Guardar</button>

        </div>
      </form>

    </div>
  );
}

export default SpecialtiesForm;