import { useState } from "react";
import "/src/CSS/formulario.css";

function App_Login() {

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [login_status, setLogin_status] = useState(null);

  const registrarNome = (event) => {
    setNome(event.target.value);
  };

  const registrarSenha = (event) => {
    setSenha(event.target.value);
  };

  const verficacaoLogin = (resposta) => {
    if (resposta === "Sucesso") {
      setLogin_status(true);
    } else {
      setLogin_status(false);
    }
  };

  return (
    <main className="container d-flex justify-content-center align-items-center vh-100">

      <section className="card shadow p-4" style={{ width: "450px" }}>

        <h1 className="text-center mb-4">
          Login
        </h1>

        <div className="mb-3">

          <label className="form-label">
            Nome
          </label>

          <input
            type="text"
            className="form-control"
            value={nome}
            onChange={registrarNome}
            placeholder="Digite seu Nome"
          />

        </div>

        <div className="mb-3">

          <label className="form-label">
            Senha
          </label>

          <input
            type="password"
            className="form-control"
            value={senha}
            onChange={registrarSenha}
            placeholder="Digite sua senha"
          />

        </div>

        <button
          className="btn btn-primary w-100"
          onClick={() => verficacaoLogin(String(""))}
        >
          Login
        </button>

        <a
          href="/cadastro"
          className="text-center mt-3"
        >
          Não possui conta? Crie agora
        </a>

        {login_status === true && (
          <p className="text-success text-center mt-3">
            Login realizado com sucesso
          </p>
        )}

        {login_status === false && (
          <p className="text-danger text-center mt-3">
            Usuário ou senha incorretos
          </p>
        )}

      </section>

    </main>
  );
}

export default App_Login;