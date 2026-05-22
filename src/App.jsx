import { useEffect, useState } from "react";
import { api } from "./services/api";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function loadProjects() {
    api.get("/api/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    loadProjects();
  }, []);

  async function handleCreateProject(event) {
    event.preventDefault();

    await api.post("/api/projects", {
      title,
      description,
      tags: [],
      //ID TEMPORARIO PARA TESTE
      authorId: "92cb7593-38ca-4494-8e18-95f5e5f88aa1"
    });

    setTitle("");
    setDescription("");
    loadProjects();
  }
  async function handleCreateUser() {
  await api.post("/api/users", {
    name: "Pedro Teste",
    email: "pedro@teste.com",
    password: "123456",
    bio: "Aluno de desenvolvimento frontend",
    role: "STUDENT"
  });

  alert("Usuário teste criado!");
}

  return (
    <main>
      <h1>Plataforma TCC</h1>

      <p>Publique, organize e encontre projetos acadêmicos.</p>
      <button onClick={handleCreateUser}>
        Criar usuário teste
      </button>

      <h2>Cadastrar projeto</h2>

      <form onSubmit={handleCreateProject}>
        <input
          placeholder="Título do projeto"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
          placeholder="Descrição do projeto"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <h2>Projetos cadastrados</h2>

      {projects.length === 0 ? (
        <p>Nenhum projeto cadastrado ainda.</p>
      ) : (
        projects.map((project) => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))
      )}
    </main>
  );
}

export default App;