import { useState } from "react";
import "/src/CSS/pesquisa.css"
import querys from "./Cruds/CrudSearch.jsx";

function BuscarProjetos(){

    // Tirar o que está em colchetes e colocar como valor a tabela projetos do banco
    const projetos = [
            {id: 1, title: 'Teste 1', author:"igor", description:"projeto cientifica", tags: "cientifica", createdAt: "2022-05-29"},
            {id: 2, title: 'Teste 2', author:"igor", description:"projeto educacao fisica", tags: "educacao fisica", createdAt: "2023-05-29"},
            {id: 3, title: 'Teste 1', author:"araujo", description:"projeto biologia", tags: "biologia", createdAt: "2022-05-29"},
            {id: 4, title: 'Teste 1', author:"reis", description:"projeto educacao fisica", tags: "educacao fisica", createdAt: "2024-05-29"},
            {id: 5, title: 'Teste 1', author:"reis", description:"projeto biologia", tags: "react", createdAt: "2022-05-29"},
            {id: 6, title: 'Teste 1', author:"reis", description:"projeto cientifica", tags: "educacao fisica", createdAt: "2022-05-29"},
            {id: 7, title: 'Teste 1', author:"reis", description:"projeto cientifica", tags: "react", createdAt: "2022-05-29"},
            {id: 8, title: 'Teste 1', author:"reis", description:"projeto filosofia", tags: "materia", createdAt: "2022-05-29"},
            {id: 9, title: 'Teste 1', author:"reis", description:"projeto filosofia", tags: "materia", createdAt: "2021-05-29"},
            {id: 10, title: 'Teste 1', author:"reis", description:"projeto educacao fisica", tags: "educacao fisica", createdAt: "2022-05-29"}
    ]

    const [visual_projetos, setVisual_Projetos] = useState(null)
    const [titulo, setValueTitulo] = useState("")
    const [author, setValueAuthor] = useState("")
    const [description , setValueDescription] = useState("")
    const [tags, setValueTags] = useState("")
    const [createdAt, setValueData] = useState("")

    const [filtros, setFiltros] = useState({
        title: true, 
        author: false,
        description: false,
        tags: false,
        createdAt: false
    })

    const buscas = {
        title: titulo, 
        author: author,
        description: description,
        tags: tags,
        createdAt: createdAt
    }

    const registrarTitulo = (titulo) =>{
        setValueTitulo(titulo.target.value)   
    }

    const registrarAuthor = (author) =>{
        setValueAuthor(author.target.value)
    }

    const registrarDescription = (description) =>{
        setValueDescription(description.target.value)
    }

    const registrarTags = (tags) =>{
        setValueTags(tags.target.value)
    }

    const registrarData = (tags) =>{
        setValueData(tags.target.value)
    }

    const alterarFiltros = (e) =>{
        setFiltros(
            (prev) => ({
                ...prev,
                [e.target.value]: e.target.checked
            })
        )
    }

    function mostrar_projetos(){
        if(titulo === "" && author === "" && description === "" && tags === "" && createdAt === ""){
            return  
        }else{
            const projetos_fill = querys.filtrarProjetos(projetos, filtros, buscas)

            return(
                <div>
                    <querys.ListaProjetos projetos={projetos_fill} />;
                </div>
            )
        }
    }   

    return(
        <>
        <main className="container mt-3 col-md-8">
            <img src="/images/BuscaProjetos/lupa.png"
            height={86}
            width={86} 
            className="d-block mx-auto img-fluid"/>

            <form className="d-flex mt-3" role="search">
                            
                <input
                    className="form-control me-2 pesquisa_input"
                    type="search"
                    placeholder="Titulo"
                    aria-label="Search"
                    value={titulo}
                    onChange={registrarTitulo}
                    disabled={!filtros.title}
                />

            </form>

            <form className="d-flex mt-3" role="search">

                <input
                    className="form-control me-2 pesquisa_input"
                    type="search"
                    placeholder="Author"
                    aria-label="Search"
                    value={author}
                    onChange={registrarAuthor}
                    disabled={!filtros.author}
                />

                <input
                    className="form-control me-2 pesquisa_input"
                    type="search"
                    placeholder="Tags"
                    aria-label="Search"
                    value={tags}
                    onChange={registrarTags}
                    disabled={!filtros.tags}
                />

            </form>             
            
            <div className="mb-3">
                <textarea className="form-control pesquisa_input mt-3" 
                            id="exampleFormControlTextarea1" 
                            rows="3" 
                            placeholder="Description" 
                            value={description}
                            onChange={registrarDescription}
                            disabled={!filtros.description}
                            style={{resize:"none"}} 
                />
            </div>    

            
                    <button className="btn btn-primary" id="buttons_form" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Filtrar</button>
                
                    {mostrar_projetos()}
                    
                    <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                        <div className="offcanvas-header" style={{backgroundColor:"#000031", color: "white"}}>
                            <h5 id="offcanvasTopLabel">Filtrar</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body canvas">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={"title"} id="flexCheckDefault" checked={filtros.title} onChange={(e) => {alterarFiltros(e); setValueTitulo("")}} />
                                <label className="form-check-label" form="flexCheckDefault">
                                    Titulo
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={"author"} id="flexCheckChecked" checked={filtros.author} onChange={(e) => {alterarFiltros(e); setValueAuthor("")}} />
                                <label className="form-check-label" form="flexCheckChecked">
                                    Author
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={"description"} id="flexCheckChecked" checked={filtros.description} onChange={(e) => {alterarFiltros(e); setValueDescription("")}} />
                                <label className="form-check-label" form="flexCheckChecked">
                                    Description
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={"tags"} id="flexCheckChecked" checked={filtros.tags} onChange={(e) => {alterarFiltros(e); setValueTags("")}} />
                                <label className="form-check-label" form="flexCheckChecked">
                                    Tags
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={"createdAt"} id="flexCheckChecked" checked={filtros.createdAt} onChange={(e) => {alterarFiltros(e); setValueData("")}} />
                                <label className="form-check-label" form="flexCheckChecked">
                                    Data
                                </label>
                                {filtros.createdAt == true && (
                                    <input
                                        className="form-control me-2 pesquisa_input mt-2"
                                        type="date"
                                        aria-label="Date"
                                        value={createdAt}
                                        onChange={registrarData}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
        </main>
        </>
    )
}

export default BuscarProjetos;
