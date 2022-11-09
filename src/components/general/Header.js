const Header = () => {
  return (
    <div className="px-2"> 
      <header className="d-flex flex-wrap justify-content-center py-3 mb-0">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-activity" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z" />
          </svg>
          <span className="fs-3 text-danger ms-2">Doctor </span> <p className="fs-4 text-primary ms-1 mb-0"> Online</p>
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
