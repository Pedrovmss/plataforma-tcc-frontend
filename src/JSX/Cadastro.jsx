import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "/src/CSS/formulario.css"

function App_Cadastro() {

  const [nome, setNome] = useState("")
  const [senha, setSenha] = useState("")
  const [senhaConfirm, setsenhaConfirm] = useState("")
  const [email, setEmail] = useState("")
  const [cadastro_status, setCadastro_status] = useState(null)
  const navigate = useNavigate();


  const registrarNome = (nome) =>{
    setNome(nome.target.value)
  };

  const registrarSenha = (senha) =>{
    setSenha(senha.target.value)
  };

  const registrarsenhaConfirm = (senhaConfirm) =>{
    setsenhaConfirm(senhaConfirm.target.value)
  };

  const registrarEmail = (email) =>{
    setEmail(email.target.value)
  }

  const verficacaoCadastro = () =>{
    if(nome === "" || senha === "" || email === "" || senhaConfirm === ""){
      setCadastro_status("campos_incopletos")
    }else if(email.endsWith("@gmail.com") === false){
      setCadastro_status("email_incorreto");
    }else if(senha != senhaConfirm){
      setCadastro_status("confirmação_senha_erro")
    }else{
      setCadastro_status("cadastro_ok")
      navigate("/login")
    }
     
  }

  return (
    <>
    <main className='container'>

      <form className='p-4 rounded shadow col-md-6 mx-auto mt-5' id='form_config'>

        <img src="/images/logo_login/estude.png" height={180} width={180} />

        <div className="mb-3 mt-3 d-grid gap-2">

          <input type="text" className="form-control username_inp back_input" id="exampleFormControlInput1" placeholder="Usuario" value={nome} onChange={registrarNome}></input>
          
          <input type="email" className="form-control email_inp back_input" id="exampleFormControlInput1" placeholder="Email" value={email} onChange={registrarEmail}></input>
          
          <input type="password" className="form-control senha_inp back_input" id="exampleFormControlInput1" placeholder="Senha" value={senha} onChange={registrarSenha}></input>
          
          <input type="password" className="form-control senha_inp back_input" id="exampleFormControlInput1" placeholder="Confirma Senha" value={senhaConfirm} onChange={registrarsenhaConfirm}></input>
          
          <p className='d-flex mt-3 gap-2' id='button_group'>
            
            <button className="btn btn-primary btn-sm" type="button" onClick={() => verficacaoCadastro()} id='buttons_form'>
              Cadastrar
            </button>

          </p>
          
          {cadastro_status == "cadastro_ok" && (
          <p className="alert alert-success mt-2" role="alert">
            Cadastro realizado com sucesso
          </p>)}

          {cadastro_status == "confirmação_senha_erro" && (
          <p className="alert alert-danger mt-2" role="alert">
            Confirmação de senha e senha devem ser iguais
          </p>)}

          {cadastro_status == "campos_incopletos" && (
          <p className="alert alert-danger mt-2" role="alert">
            Complete todos os campos
          </p>)}

          {cadastro_status == "email_incorreto" && (
          <p className="alert alert-danger mt-2" role="alert">
            Coloque @gmail.com no final
          </p>)}

        </div>
      </form>
    </main>
    </>
  );
}

export default App_Cadastro


