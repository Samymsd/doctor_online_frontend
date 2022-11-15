const Header = () => {
  return (
    <div className="px-0"> 
      <header className="d-flex flex-wrap justify-content-center py-2 mb-0" style={{ backgroundColor: "#1d1c1c" }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"> 
          <span className="fs-3 text-danger ms-2"> <i className="fs-4 bi bi-activity text-info"></i> Doctor </span> <p className="fs-4 text-primary ms-1 mb-0"> Online</p>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item"><a href="/" className="nav-link active" aria-current="page">Inicio</a></li>
          <li className="nav-item"><a href="/specialties" className="nav-link">Especialidades</a></li>
          <li className="nav-item"><a href="/doctors" className="nav-link">Doctores</a></li>
          <li className="nav-item"><a href="/dates" className="nav-link">Citas</a></li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
