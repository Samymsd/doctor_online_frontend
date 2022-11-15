import { useEffect, useState } from "react";
import States from "../../enums/States";
import SpecialtiesService from "../services/SpecialtiesService";

const SpecialtyTable = ()=>{

  const [specialtiesList, setSpecialtiesList] = useState([]);
  const [state, setState] = useState(States.LOADING);
  const [criterion, setCriterion] = useState("");
  const [idDelete, setIdDelete] = useState("");
  const [specialtyDelete, setSpecialtyDelete] = useState("");


 
    const loadData = async () => {
      try {
        const response = await SpecialtiesService.getSpecialties();
        setSpecialtiesList(response.data);
        if (response.data.length === 0) {
          setState(States.EMPTY);
        } else {
          setState(States.DONE);
        }
      } catch (error) {
        setState(States.ERROR);
      }
    }

  useEffect(() => {
    loadData();
  }, []);  

  const SpecialtyFind = async (event) => {
    event.preventDefault();
    try {
      const response = await SpecialtiesService.specialtiesFindByCriterion(criterion);
      setSpecialtiesList(response.data);
      if (response.data.length === 0) {
        setState(States.EMPTY);
      } else {

        setState(States.DONE);
      }
    } catch (error) {
      setState(States.ERROR);
    }
  }

  const changeCriterion = (event)=>{
    setCriterion(event.target.value);
  }

  const confirmDeletion = (id, name)=>{
    setIdDelete(id);
    setSpecialtyDelete(name);
  }

  const deleteSpecialty = async ()=>{
    await SpecialtiesService.deleteSpecialties(idDelete);
    loadData();
  }
  
  return(
    <div className="container p-3 my-3">
      <h3>Lista de Especialidades <a href="/specialties/form" className="btn btn-success btn-sm my-5"><i className="bi bi-plus-square"></i> Nuevo</a></h3>
      <form action="" className="input-group mb-2">
        <input className="form-control" onChange={changeCriterion} value={criterion} type="text" id="criterion" name="criterion" placeholder="Buscar por"/>
        <button onClick={SpecialtyFind} className="btn btn-info"><i className="bi bi-save"></i> Buscar</button>
      </form>

      <table className="table table-sm">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Atiende solo mujeres</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            (state === States.LOADING) ? 
              (<tr>
                <td align="center" colSpan={4}>Cargando...
                  <div className="spinner-border text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </td>
              </tr>) : 
            (state === States.ERROR) ?
              (<tr>
                <td align="center" colSpan={4}>Error Cargando Datos. Intentelo más tarde
                  <div className="spinner-border text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </td>
              </tr>) :
            state === States.EMPTY ? 
              (<tr>
                <td align="center" colSpan={4}>No hay datos</td>
              </tr>) : 
              (
                specialtiesList.map((specialty) => (
                  <tr key={specialty._id}>
                    <td>{specialty.name}</td>
                    <td>{specialty.description}</td>
                    <td>{specialty.attends_only_women ? "Sí" : "No"}</td>
                    <td>
                      <a href={"/specialties/form/" + specialty._id} className="btn btn-warning btn-sm me-2"> <i className="bi bi-pencil-square"></i> Editar</a>
                      <button onClick={() => confirmDeletion(specialty._id, specialty.name)} className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#modalDelete"> <i className="bi bi-trash3-fill"></i> Eliminar</button>
                    </td>
                  </tr>
                ))
              )
          } 
        </tbody>
      </table>

      <div className="modal fade" id="modalDelete" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Alerta de eliminación</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Desea borrar la especialidad {specialtyDelete}?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" onClick={deleteSpecialty} className="btn btn-danger" data-bs-dismiss="modal">Borrar</button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default SpecialtyTable;