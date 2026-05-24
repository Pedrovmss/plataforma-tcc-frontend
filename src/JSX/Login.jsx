import { useState } from 'react'
import "/src/CSS/formulario.css"

function App_Login() {

  const [nome, setNome] = useState("")
  const [senha, setSenha] = useState("")
  const [login_status, setLogin_status] = useState(null)

  const registrarNome = (nome) =>{
    setNome(nome.target.value)
  };

  const registrarSenha = (senha) =>{
    setSenha(senha.target.value)
  };

  const verficacaoLogin = (resposta) =>{
    if(resposta == "Sucesso"){
      setLogin_status(true)
    }else{
      setLogin_status(false)
    }
  }

  return (
    <div id='container-login'>
      <h1>Login</h1>
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
        <button onClick={() => verficacaoLogin(String(""))}>Login</button>
        <a href="/src/HTML/Cadastro.html">Não possui conta? crie agora</a>
        {login_status == true && (<p>Login realizado com sucesso</p>)}
        {login_status == false && (<p>Usuario ou senha incorretos</p>)}
      </div>
    </div>
  );
}

export default App_Login


