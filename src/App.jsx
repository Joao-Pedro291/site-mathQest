import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Carrossel from "./components/Carrossel";
import ParticlesBackground from "./components/ParticlesBackground";
import Preloader from "./components/Preloader";

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
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const sobreRef = useRef(null);
  const equipeRef = useRef(null);
  const downloadRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const equipe = [
    {
      imagem: imgAllix,
      nome: "Allix",
      descricao: "Gerente e Designer",
      info: "Responsável por coordenar a equipe, definir metas, acompanhar prazos e garantir a qualidade do projeto. Também contribui com o design geral e identidade visual da marca.",
    },
    {
      imagem: imgJp,
      nome: "João",
      descricao: "Web Developer",
      info: "Especialista em desenvolvimento front-end com foco em React. Trabalha na criação da interface do usuário, integra componentes visuais e otimiza a experiência de navegação.",
    },
    {
      imagem: imgHeitor,
      nome: "Heitor",
      descricao: "Marketing",
      info: "Cuida da divulgação do projeto, planejamento de campanhas e engajamento nas redes sociais. Atua na criação de estratégias para alcançar novos públicos e manter a comunidade ativa.",
    },
    {
      imagem: imgJv,
      nome: "João Victor",
      descricao: "Escrita criativa",
      info: "Cria e revisa conteúdos textuais para o jogo, site e redes sociais. Responsável pela construção de narrativas envolventes, diálogos e textos promocionais.",
    },
    {
      imagem: imgGe,
      nome: "Gustavo Esteque",
      descricao: "Game Developer",
      info: "Responsável por implementar mecânicas e funcionalidades do jogo. Atua com programação em engines, depuração e integração de sistemas para garantir uma experiência fluida.",
    },
    {
      imagem: imgFabricio,
      nome: "Fabricio",
      descricao: "Marketing",
      info: "Colabora com o planejamento de ações de marketing, produção de conteúdos e pesquisa de tendências. Contribui diretamente com o fortalecimento da presença online do projeto.",
    },
    {
      imagem: imgThais,
      nome: "Thais",
      descricao: "Arte e Design",
      info: "Desenvolve elementos visuais como ilustrações, interfaces e assets gráficos. Cuida da estética do projeto com atenção aos detalhes e consistência visual.",
    },
    {
      imagem: imgLynn,
      nome: "Lynn",
      descricao: "Documentação",
      info: "Organiza e mantém atualizada toda a documentação do projeto, como guias técnicos, atas de reunião e registros de desenvolvimento. Essencial para o controle de processos e comunicação da equipe.",
    },
    {
      imagem: imgGm,
      nome: "Gustavo Martins",
      descricao: "Game Designer",
      info: "Planeja a estrutura do jogo, define regras, níveis, mecânicas e sistemas de progressão. Garante que a jogabilidade seja equilibrada, divertida e coerente com a proposta do projeto.",
    },
    {
      imagem: imgHigor,
      nome: "Higor",
      descricao: "Game Developer",
      info: "Trabalha no núcleo da programação do jogo. Integra funcionalidades complexas, otimiza desempenho e assegura a estabilidade da aplicação em diferentes plataformas.",
    },
  ];

  const imagensDownload = [
    { imagem: img1 },
    { imagem: img2 },
    { imagem: img3 },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) return <Preloader />;

  return (
    <div className="page-container">
      <ParticlesBackground />

      <nav className="navbar">
        <div className="nav-left">
          <img src="/8luedark.png" alt="Logo pequeno" className="footer-logo" />
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection("inicio")}>Início</button>
          <button onClick={() => scrollToSection("sobre")}>Sobre</button>
          <button onClick={() => scrollToSection("equipe")}>Equipe</button>
          <button onClick={() => scrollToSection("download")}>Download</button>
        </div>
      </nav>

      <section
        id="inicio"
        className="inicio-section"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "80vh",
          margin: 0,
          paddingTop: "100px",
          background: "#e0f3ff",
        }}
      >
        <img
          style={{ height: 400 }}
          src="/logo.png"
          alt="Math Quest Logo"
          className="logo-mathquest"
        />
      </section>

      <motion.section
        id="sobre"
        ref={sobreRef}
        className="sobre-section"
        style={{
          background: "#e0f3ff",
          padding: "40px 20px",
          rotateX: rotateX,
          scale,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div
          className="sobre-content hover-sobre"
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <h2
            className="titulo-com-linha"
            style={{ animation: "fadeInUp 0.8s ease forwards", opacity: 0 }}
          >
            Sobre o Math Quest
          </h2>
          <p className="texto-animado texto-delay-1">
            O{" "}
            <strong className="texto-animado texto-delay-2">Math Quest</strong>{" "}
            é muito mais do que um jogo — é uma jornada interativa onde a
            matemática se encontra com a aventura.
          </p>
          <p className="fade-text delay-2">
            Através de <strong>missões épicas</strong>,{" "}
            <strong>personagens carismáticos</strong> e{" "}
            <strong>problemas matemáticos</strong> que exigem raciocínio
            lógico...
          </p>
          <p className="fade-text delay-3">
            Criado por uma equipe apaixonada por educação e tecnologia...
          </p>
        </div>
      </motion.section>

      <div
        style={{
          height: "2px",
          background:
            "linear-gradient(to right, transparent, #ccc, transparent)",
          width: "90%",
          margin: "0 auto",
        }}
      ></div>

      <motion.section
        id="equipe"
        ref={equipeRef}
        style={{
          background: "#e0f3ff",
          padding: "40px 20px",
          rotateX: rotateX,
          scale,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div
          className="carrossel-equipe"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            background: "white",
            borderRadius: "20px",
            padding: "40px",
          }}
        >
          <h2
            className="titulo-com-linha"
            style={{ animation: "fadeInUp 0.8s ease forwards", opacity: 0 }}
          >
            Nossa Equipe
          </h2>
          <Carrossel
            itens={equipe}
            mostrarThumbs={true}
            carrosselTipo="equipe"
          />
        </div>
      </motion.section>

      <div
        style={{
          height: "2px",
          background:
            "linear-gradient(to right, transparent, #ccc, transparent)",
          width: "90%",
          margin: "0 auto",
        }}
      ></div>

      <motion.section
        id="download"
        ref={downloadRef}
        className="download-container"
        style={{
          background: "#e0f3ff",
          padding: "40px 20px",
          rotateX: rotateX,
          scale,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="download-card">
          <div className="carousel-wrapper">
            <Carrossel
              itens={imagensDownload}
              mostrarThumbs={true}
              clicavel={false}
              carrosselTipo="download"
            />
          </div>
          <div className="info-wrapper">
            <h2
              className="titulo-equipe"
              style={{ animation: "fadeInUp 0.8s ease forwards", opacity: 0 }}
            >
              Math Quest
            </h2>
            <p className="texto-animado texto-delay-1">
              Embarque nessa aventura cheia de monstros, montanhas e matemática!
            </p>
            <a href="/MathQuest.zip" download className="download-btn">
              Baixar Agora
            </a>
          </div>
        </div>
      </motion.section>

      <footer className="rodape">
        <div className="footer-text">
          <p className="footer-title">Entre em contato</p>
          <p className="footer-email">
            <img src="/gmail.png" alt="Email" className="email-icon" />
            <a href="mailto:quatiarchive@email.com">quatiarchive@gmail.com</a>
          </p>
        </div>
        <div className="footer-social">
          <a
            href="https://instagram.com/seuPerfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/insta.png" alt="Instagram" className="insta-icon" />
          </a>
          <a
            href="https://linkedin.com/in/seuPerfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="LinkedIn" className="insta-icon" />
          </a>
        </div>
        <img src="/logo.png" alt="Logo pequeno" className="footer-logo" />
      </footer>
    </div>
  );
}

export default App;
