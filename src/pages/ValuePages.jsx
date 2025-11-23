import React from "react";
import "./ValuesPage.css";

const values = [
  {
    id: 1,
    title: "Educação",
    description:
      "O Math Quest busca aproximar a educação de matemática nas escolas e reduzir o déficit no ensino dessa matéria no Brasil, por meio de recursos digitais e gamificados.",
    image: "/images/educacao.jpg",
  },
  {
    id: 2,
    title: "Gamificação",
    description:
      "Por meio de elementos históricos, cenários e personagens que fazem referência a contextos matemáticos, procuramos tornar a matéria mais lúdica e descomplicada.",
    image: "/images/gamificacao.jpg",
  },
  {
    id: 3,
    title: "Criatividade",
    description:
      "Buscamos entregar uma história, missões e artes completamente originais. Nossa equipe valoriza propostas criativas e a individualidade do nosso projeto.",
    image: "/images/criatividade.jpg",
  },
];

export default function ValuesPage() {
  return (
    <div className="app-root">
      {/* Barra superior */}
      <header className="app-header">
        <div className="logo-area">
          <span className="logo-mini">Math</span>
          <span className="logo-text">Quest</span>
        </div>

        <nav className="nav-links">
          <button className="nav-link nav-link-active">Início</button>
          <button className="nav-link">Download</button>
          <button className="nav-link">Sobre nós</button>
          <button className="nav-link">Contato</button>
        </nav>

        <div className="user-avatar">
          <img
            src="/images/avatar.png"
            alt="Perfil"
          />
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="app-main">
        <h2 className="section-title">Nossos valores</h2>

        <section className="cards-wrapper">
          {values.map((item) => (
            <article key={item.id} className="value-card">
              <div
                className="value-card-bg"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="value-card-overlay" />
              <div className="value-card-content">
                <p className="value-card-text">{item.description}</p>
                <button className="value-card-pill">{item.title}</button>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Rodapé */}
      <footer className="app-footer">
        <div className="footer-left">
          <p>Fale conosco</p>
          <a href="mailto:mathquest@gmail.com">mathquest@gmail.com</a>
        </div>

        <div className="footer-dots">
          <span className="dot dot-active" />
          <span className="dot" />
        </div>

        <div className="footer-right">
          <span>baixe</span>
          <a href="#download">aqui o app</a>
        </div>
      </footer>
    </div>
  );
}
