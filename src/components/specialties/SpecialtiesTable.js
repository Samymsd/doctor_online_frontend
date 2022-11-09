const SpecialtyTable = ()=>{
  return(
    <div className="container">
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
          <tr>
            <td>Otorrinolaringologo</td>
            <td>Atiende casos de oido y vias superiores</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SpecialtyTable;