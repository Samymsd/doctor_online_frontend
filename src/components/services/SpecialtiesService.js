import axios from "axios";

const URI = "https://doctor-online-api.herokuapp.com/";
const SpecialtiesService = {};

SpecialtiesService.getSpecialties = ()=>{
  return axios.get(URI + "specialty");
};

SpecialtiesService.specialtiesFindByCriterion = (criterion) => {
  return axios.get(URI + "specialty?q=" + criterion);
};

SpecialtiesService.loadSpecialties = (id) => {
  return axios.get(URI + "specialty/" + id);
};

SpecialtiesService.saveSpecialties = (specialty) => {
  return axios.post(URI + "specialty", specialty);
};

SpecialtiesService.editSpecialties = (id, specialty) => {
  return axios.put(URI + "specialty/" + id, specialty);
};

SpecialtiesService.deleteSpecialties = (id) => {
  return axios.delete(URI + "specialty/" + id);
};

export default SpecialtiesService;