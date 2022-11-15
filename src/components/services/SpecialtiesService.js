import axios from "axios";

const specialties = [
  {
    name: "Otorrino",
    description: "Cunsulta los oidos y las vias superiores",
    attends_only_women: false
  },
  {
    name: "Gninecologia",
    description: "Cunsulta aparato reproductor femenino",
    attends_only_women: true
  }
];

const SpecialtiesService = {};

SpecialtiesService.getSpecialties = ()=>{
  return axios.get("http://localhost:4000/specialty");
};

SpecialtiesService.specialtiesFindByCriterion = (criterion) => {
  return axios.get("http://localhost:4000/specialty?q=" + criterion);
};

SpecialtiesService.loadSpecialties = (id) => {
  return axios.get("http://localhost:4000/specialty/" + id);
};

SpecialtiesService.saveSpecialties = (specialty) => {
  return axios.post("http://localhost:4000/specialty", specialty);
};

SpecialtiesService.editSpecialties = (id, specialty) => {
  return axios.put("http://localhost:4000/specialty/" + id, specialty);
};

SpecialtiesService.deleteSpecialties = (id) => {
  return axios.delete("http://localhost:4000/specialty/" + id);
};

export default SpecialtiesService;