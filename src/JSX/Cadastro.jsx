import { useState } from "react";

function App_Cadastro() {

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirm, setsenhaConfirm] = useState("");
  const [login_status, setLogin_status] = useState(null);

  const registrarNome = (event) => {
    setNome(event.target.value);
  };

  const registrarSenha = (event) => {
    setSenha(event.target.value);
  };

  const registrarsenhaConfirm = (event) => {
    setsenhaConfirm(event.target.value);
  };

  const verficacaoCadastro = (resposta) => {
    if (resposta === "Sucess") {
      setLogin_status(true);
    } else {
      setLogin_status(false);
    }
  };

  return (

    <main
      className="container d-flex justify-content-center align-items-center vh-100"
    >

      <section
        className="card shadow-lg p-4"
        style={{
          width: "450px",
          borderRadius: "18px"
        }}
      >

        <h1 className="text-center mb-4">
          Cadastrar
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

        <div className="mb-4">

          <label className="form-label">
            Confirma Senha
          </label>

          <input
            type="password"
            className="form-control"
            value={senhaConfirm}
            onChange={registrarsenhaConfirm}
            placeholder="Repita a senha"
          />

        </div>

        <button
          className="btn btn-primary w-100"
          onClick={() => verficacaoCadastro(String(""))}
        >
          Cadastrar
        </button>

        {login_status === true && (
          <p className="text-success text-center mt-3">
            Cadastro realizado com sucesso
          </p>
        )}

        {login_status === false && (
          <p className="text-danger text-center mt-3">
            Cadastro não foi possível
          </p>
        )}

      </section>

    </main>

  );
}

export default App_Cadastro;