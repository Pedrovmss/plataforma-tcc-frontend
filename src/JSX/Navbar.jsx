function Navbar() {
  return (
  <nav className="navbar navbar-dark" style={{ backgroundColor: "#0d065f" }}>
      <section className="container-fluid">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="/" style={{ fontFamily: "Trebuchet MS, sans-serif" }}>
          Revista Acadêmica
        </a>

        <a href="https://www.udf.edu.br/">
          <img
            src="https://www.udf.edu.br/wp-content/themes/cruzeiroportais2019/assets/imagens/marcas/marcaUdfVariacaoReduzida.svg"
            alt="Logo UDF"
            width="128"
            height="128"
          />
        </a>
        
        <aside
          className="offcanvas offcanvas-end text-white"
          style={{ backgroundColor: "#0d065f" }}
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <header className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </header>

          <section className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-start">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>

              <li className="nav-item text-start">
                <a className="nav-link" href="/login">Login</a>
              </li>

              <li className="nav-item dropdown text-start">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Postagens
                </a>

                <ul className="dropdown-menu dropdown-menu-dark" style={{ backgroundColor: "#000031" }}>
                  <li><a className="dropdown-item" href="/cadastrar_projetos">Adicionar</a></li>
                </ul>
              </li>
            </ul>
          </section>
        </aside>
      </section>
    </nav>
  );
}

export default Navbar;
