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

function listarProjetos(projetos){

    const visual_projetos = projetos.map(projects =>
            <div className="col" key={projects.id}>
                <div className="row g-0 bg-light position-relative mt-3">
                    <div className="col-md-2 mb-md-1 p-md-5">
                        <img src="/images/BuscaProjetos/livro.png" className="w-20" alt="..."/>
                    </div>
                    <div className="col-md-6 p-2 ps-md-0 mt-3">
                        {/*Colocar no href do link abaixo o link do projeto no ojs*/}
                        <a href="#" className="stretched-link title_link mt-0">{projects.title}</a>
                        <hr className="mt-3" />
                        <p className="d-flex flex-row mt-2 author_name">
                            <span>Author: <strong>{projects.author}</strong></span>
                            <span className="ms-2">Tag: <strong>#{projects.tags}</strong></span>
                        </p>
                        <p className="author_name">Date: {projects.createdAt}</p>
                        <hr className="mt-0" />
                        <p className="mt-2">{projects.description}</p>
                    </div>
                </div>
            </div>
    )



    return(
        <div>
            {visual_projetos}
        </div>
    )
}

export default {
    filtrarProjetos,
    listarProjetos
}

