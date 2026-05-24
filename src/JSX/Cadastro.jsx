import { useState } from 'react'
import "/src/CSS/formulario.css"

function App_Cadastro() {

  const [nome, setNome] = useState("")
  const [senha, setSenha] = useState("")
  const [senhaConfirm, setsenhaConfirm] = useState("")
  const [login_status, setLogin_status] = useState(null)


  const registrarNome = (nome) =>{
    setNome(nome.target.value)
  };

  const registrarSenha = (senha) =>{
    setSenha(senha.target.value)
  };

  const registrarsenhaConfirm = (senhaConfirm) =>{
    setsenhaConfirm(senhaConfirm.target.value)
  };

  const verficacaoCadastro = (resposta) =>{
    if(resposta === "Sucess"){
      setLogin_status(true)
    }else{
      setLogin_status(false)
    } 
  }

  return (
    <div id='container-login'>
      <h1>Cadastrar</h1>
      <div className='form-login'>
        <label htmlFor="">Nome</label>
        <input type="text" 
          value={nome}
          onChange={registrarNome}
          placeholder='Digite seu Nome'
          className='nome-user'
        />
        <label htmlFor="">Senha</label>
        <input type="password" 
          value={senha}
          onChange={registrarSenha}
          placeholder='Digite sua senha'
          className='senha-user'
        />
        <input type="password" 
          value={senhaConfirm}
          onChange={registrarsenhaConfirm}
          placeholder='Repita a senha'
          className='senhaConfirm-user'
        />
        <button onClick={() => verficacaoCadastro(String(""))}>Cadastrar</button>
        {login_status == true && (<p>Cadastro realizado com sucesso</p>)}
        {login_status == false && (<p>Cadastro não foi possivel</p>)}
      </div>
    </div>
  );
}

export default App_Cadastro


