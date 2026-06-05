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
                    <div className="col-md-2 mb-md-1 p-md-4">
                        <img src="/images/BuscaProjetos/livro.png" class="w-20" alt="..."/>
                    </div>
                    <div className="col-md-6 p-2 ps-md-0">
                        <a href="#" className="stretched-link title_link mt-0">{projects.title}</a>
                        <p className="author_name mt-2">Author: <strong>{projects.author}</strong></p>
                        <p className="author_name">Date: {projects.createdAt}</p>
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

