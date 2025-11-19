import React from "react";
import Carrossel from "./components/Carrossel";

import imgJp from "./assets/imgJp.jpg";
import imgAllix from "./assets/imgAllix.jpg";
import imgHeitor from "./assets/imgHeitor.jpg";
import imgJv from "./assets/imgJv.jpg";
import imgGe from "./assets/imgGe.jpg";
import imgFabricio from "./assets/imgFabricio.jpg";
import imgThais from "./assets/imgThais.jpg";
import imgLynn from "./assets/imgLynn.jpg";
import imgGm from "./assets/imgGm.jpg";
import imgHigor from "./assets/imgHigor.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  const equipe = [
    { imagem: imgAllix, nome: "Allix", descricao: "Gerente e Designer", info: "Gerencia o projeto como um todo..." },
    { imagem: imgJp, nome: "João", descricao: "Web Developer", info: "Especializado em React..." },
    { imagem: imgHeitor, nome: "Heitor", descricao: "Marketing", info: "Responsável pelas estratégias..." },
    { imagem: imgJv, nome: "João Victor", descricao: "Escrita criativa", info: "Cria conteúdos criativos..." },
    { imagem: imgGe, nome: "Gustavo Esteque", descricao: "Game developer", info: "Desenvolve a lógica..." },
    { imagem: imgFabricio, nome: "Fabricio", descricao: "Marketing", info: "Apoia ações de marketing..." },
    { imagem: imgThais, nome: "Thais", descricao: "Arte e design", info: "Cuida da identidade visual..." },
    { imagem: imgLynn, nome: "Lynn", descricao: "Documentação", info: "Organiza dados e registra processos." },
    { imagem: imgGm, nome: "Gustavo Martins", descricao: "Game designer", info: "Planeja a estrutura do jogo..." },
    { imagem: imgHigor, nome: "Higor", descricao: "Game developer", info: "Programação central do jogo..." },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Topbar com logo e botões arredondados */}
      <nav className="top-bar">
        <img src="/logo.png" alt="Logo" className="logo-topo" />
        <div className="nav-links">
          <button onClick={() => scrollToSection("inicio")}>Início</button>
          <button onClick={() => scrollToSection("sobre")}>Sobre</button>
          <button onClick={() => scrollToSection("equipe")}>Equipe</button>
        </div>
      </nav>

      {/* Seção Início */}
      <section id="inicio" className="inicio-section">
        <img src="/logo.png" alt="Math Quest Logo" className="logo-mathquest" />
      </section>

      {/* Seção Sobre */}
      <section id="sobre" style={{ padding: "40px 20px", background: "#f9f9f9" }}>
        <h2 style={{ textAlign: "center" }}>Sobre o Projeto</h2>
        <p style={{ maxWidth: "800px", margin: "0 auto" }}>
          O Math Quest é uma plataforma educativa gamificada que combina aventura e matemática. Nosso objetivo é ensinar de forma divertida.
        </p>
      </section>

      {/* Seção Equipe */}
      <section id="equipe" style={{ padding: "40px 20px" }}>
        <h2 style={{ textAlign: "center" }}>Nossa Equipe</h2>
        <div className="carrossel-equipe" style={{ marginTop: "20px" }}>
          <Carrossel itens={equipe} mostrarThumbs={false} />
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <p>Fale conosco!</p>
            <p><em>quatiarchive@email.com</em></p>
          </div>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/instagram-icon.png" alt="Instagram" className="insta-icon" />
            </a>
          </div>
          <img src="/logo.png" alt="Logo pequeno" className="footer-logo" />
        </div>
      </footer>
    </div>
  );
}

export default App;
