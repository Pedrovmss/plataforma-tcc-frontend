import { useEffect, useState } from "react";
import { api } from "./services/api";
import Navbar from "./JSX/Navbar";
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
      authorId: "92cb7593-38ca-4494-8e18-95f5e5f88aa1"
    });

    setTitle("");
    setDescription("");
    loadProjects();
  }

  return (
    <>

      <main className="container" style={{ paddingTop: "170px" }}>
        <h1>Plataforma TCC</h1>

        <p>Publique, organize e encontre projetos acadêmicos.</p>

        <h2>Cadastrar projeto</h2>

        <form onSubmit={handleCreateProject}>
          <input
            className="form-control mb-2"
            placeholder="Título do projeto"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <textarea
            className="form-control mb-2"
            placeholder="Descrição do projeto"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <button className="btn btn-primary" type="submit">
            Cadastrar
          </button>
        </form>

        <h2 className="mt-4">Projetos cadastrados</h2>

        {projects.length === 0 ? (
          <p>Nenhum projeto cadastrado ainda.</p>
        ) : (
          projects.map((project) => (
            <article key={project.id} className="card p-3 mb-2">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))
        )}
      </main>
    </>
  );
}

export default App;