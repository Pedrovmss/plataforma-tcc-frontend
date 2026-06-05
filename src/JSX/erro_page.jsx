import React from "react"

function Erro_body(){
    return(
        <>
            <main className="d-flex justify-content-center align-items-center mt-5">
                <div>
                    <div className="mt-2" style={{paddingLeft:200}}>
                        <img src="/images/error/erro-404.png" 
                                className="img-fluid"/>
                    </div>
                    <h2><strong>Não foi posssivel encontrar a página</strong></h2>
                    <a className="btn btn-primary btn-sm mt-2" href="/" role="button" id="buttons_form">
                        Voltar tela inicial
                    </a>
                </div>
            </main>
        </>
    )
}

export default Erro_body