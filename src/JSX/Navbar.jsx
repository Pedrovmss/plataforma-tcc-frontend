function Navbar() {
  return (
    <nav className="navbar navbar-dark fixed-top" style={{ backgroundColor: "#0d065f" }}>
      <section className="container-fluid">
        <a href="https://www.udf.edu.br/">
          <img
            src="https://www.udf.edu.br/wp-content/themes/cruzeiroportais2019/assets/imagens/marcas/marcaUdfVariacaoReduzida.svg"
            alt="Logo UDF"
            width="128"
            height="128"
          />
        </a>

        <a className="navbar-brand" style={{ fontFamily: "Times New Roman, Times, serif" }}>
          Revista Acadêmica
        </a>

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

        <aside
          className="bg-dark text-white offcanvas offcanvas-end text-bg-dark"
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
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Postagens
                </a>

                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item" href="#">Adicionar</a></li>
                  <li><a className="dropdown-item" href="#">Listar</a></li>
                </ul>
              </li>
            </ul>

            <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Repositório"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Pesquisar
              </button>
            </form>
          </section>
        </aside>
      </section>
    </nav>
  );
}

export default Navbar;