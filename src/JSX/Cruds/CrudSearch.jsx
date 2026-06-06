import { useState } from "react";

function ListaProjetos({projetos}) {
    const [paginaAtual, setPaginaAtual] = useState(1);

    const itensPorPagina = 7;

    const ultimoIndice = paginaAtual * itensPorPagina;
    const primeiroIndice = ultimoIndice - itensPorPagina;

    const projetosPagina = projetos.slice(
        primeiroIndice,
        ultimoIndice
    );

    const totalPaginas = Math.ceil(
        projetos.length / itensPorPagina
    );

    return (
        <>
            {/* Lista */}
            {projetosPagina.map((projects) => (
                <div className="col" key={projects.id}>
                    <div className="row g-0 bg-light position-relative mt-3">
                        <div className="col-md-2 mb-md-1 p-md-5">
                            <img
                                src="/images/BuscaProjetos/livro.png"
                                className="w-20"
                                alt=""
                            />
                        </div>

                        <div className="col-md-6 p-2 ps-md-0 mt-3">
                            {/* mudar o href para a tela onde está localizado o projeto do usuario no ojs */}
                            <a href="#" className="stretched-link title_link mt-0">
                                {projects.title}
                            </a>

                            <hr className="mt-3" />

                            <p className="d-flex flex-row mt-2 author_name">
                                <span>
                                    Author: <strong>{projects.author}</strong>
                                </span>

                                <span className="ms-2">
                                    Tag: <strong>#{projects.tags}</strong>
                                </span>
                            </p>

                            <p className="author_name">
                                Date: {projects.createdAt}
                            </p>

                            <hr className="mt-0" />

                            <p className="mt-2">
                                {projects.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Bootstrap Pagination */}
            <nav className="mt-4">
                <ul className="pagination justify-content-center">

                    <li className={`page-item ${paginaAtual === 1 ? "invisible" : ""}`}>
                        <button
                            className="page-link buttons_pages ico_esquerda"
                            onClick={() => setPaginaAtual(paginaAtual - 1)}
                        >
                            <img className="me-2" src="/images/BuscaProjetos/seta-esquerda.png" alt="" />
                        </button>
                    </li>

                    {[...Array(totalPaginas)].map((_, index) => (
                        <li
                            key={index}
                            className={`page-item ${
                                paginaAtual === index + 1 ? "active" : ""
                            }`}
                            id="buttons_form"
                        >
                            <button
                                className="page-link"
                                onClick={() => setPaginaAtual(index + 1)}
                                id="buttons_form"
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}

                    <li
                        className={`page-item ${
                            paginaAtual === totalPaginas ? "invisible" : ""
                        }`}
                    >
                        <button
                            className="page-link buttons_pages ico_direita"
                            onClick={() => setPaginaAtual(paginaAtual + 1)}
                        >
                            <img src="/images/BuscaProjetos/seta-direita.png" alt="" className="ms-1" />
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
}

function filtrarProjetos(projetos, filtros, buscas){
    const projetos_fill = projetos.filter((proj) =>
        Object.keys(filtros)
            .filter((campo) => filtros[campo])
            .every((campo) =>
                String(proj[campo])
                    .toLowerCase()
                    .includes(buscas[campo].toLowerCase())
            )
        );

    return projetos_fill
}

export default {
    filtrarProjetos,
    ListaProjetos
}

