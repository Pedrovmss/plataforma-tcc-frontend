import { useState } from 'react'
import "/src/CSS/formulario.css"
import { useNavigate } from 'react-router-dom'

function App_Login() {

  const [nome, setNome] = useState("")
  const [senha, setSenha] = useState("")
  const [login_status, setLogin_status] = useState(null)
  const navigate = useNavigate()

  const registrarNome = (nome) =>{
    setNome(nome.target.value)
  };

  const registrarSenha = (senha) =>{
    setSenha(senha.target.value)
  };

  const verficacaoLogin = () =>{
    if(nome === "" || senha === ""){
      setLogin_status("campos_incopletos")
    }else{
      setLogin_status("login_ok")
      navigate("/index.html")
    }
  }

  return (
    <>
    <main className="container">
      <form className='p-4 rounded shadow col-md-6 mx-auto mt-5'>

        <img src="/images/logo_login/estude.png" height={180} width={180} />

        <div className="mb-3 mt-3">

          <input type="text" className="form-control username_inp back_input" id="exampleFormControlInput1" placeholder="Usuario" value={nome} onChange={registrarNome}></input>

          <input type="password" className="form-control senha_inp back_input mt-2" id="exampleFormControlInput1" placeholder="Senha" value={senha} onChange={registrarSenha}></input>
          
          <p className='d-flex mt-3 gap-2' id='button_group'>
            
            <button className="btn btn-primary btn-sm" type="button" onClick={() => verficacaoLogin()} id='buttons_form'>
              Entrar
            </button>
            
            <a className="btn btn-primary btn-sm" href="/cadastro" role="button" id="buttons_form">
              Cadastrar conta
            </a>
            
          </p>

          {login_status == "login_ok" && (
          <p className="alert alert-success mt-2" role="alert">
            Login realizado com sucesso
          </p>)}

          {login_status == "campos_incopletos" && (
          <p className="alert alert-danger mt-2" role="alert">
            Complete todos os campos
          </p>)}

        </div>
      </form>
    </main>
    </>
  );
}

export default App_Login


