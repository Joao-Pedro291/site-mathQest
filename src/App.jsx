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
import imgDownload1 from "./assets/img1.jpg";
import imgDownload2 from "./assets/img2.jpg";
import imgDownload3 from "./assets/img3.jpg";
import img1 from "./assets/valor1.jpg";
import img2 from "./assets/valor2.jpg";
import img3 from "./assets/valor3.jpg";
import logo from "./assets/logo.png";
import miniLogo from "./assets/minilogo.png";
import miniLogoEscura from "./assets/8luedark.png";
import gmail from "./assets/gmail.png";
import insta from "./assets/insta.png";

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

  // animação padrão para cada seção
  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // ---------- EQUIPE ----------
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

  // ---------- DOWNLOAD ----------
  const imagensDownload = [{ imagem: imgDownload1 }, { imagem: imgDownload2 }, { imagem: imgDownload3 }];

  // ---------- VALORES ----------
  const valores = [
    {
      id: 1,
      titulo: "Educação",
      descricao:
        "O Math Quest busca aproximar a educação de matemática nas escolas e reduzir o déficit no ensino dessa matéria no Brasil, por meio de recursos digitais e gamificados.",
      imagem: img1,
    },
    {
      id: 2,
      titulo: "Gamificação",
      descricao:
        "Por meio de elementos históricos, cenários e personagens que fazem referência a contextos matemáticos, tornamos a matéria mais lúdica, envolvente e descomplicada.",
      imagem: img2,
    },
    {
      id: 3,
      titulo: "Criatividade",
      descricao:
        "Entregamos histórias, missões e artes originais. Valorizamos propostas criativas e a individualidade de cada integrante no desenvolvimento do projeto.",
      imagem: img3,
    },
  ];

  // ---------- SCROLL ----------
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) return <Preloader />;

  return (
    <div className="page-container">
      <ParticlesBackground />

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          <img
            src={miniLogoEscura}
            alt="Logo pequeno"
            className="footer-logo"
          />
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection("inicio")}>Inicio</button>
          <button onClick={() => scrollToSection("sobre")}>Sobre</button>
          <button onClick={() => scrollToSection("equipe")}>Equipe</button>
          <button onClick={() => scrollToSection("download")}>Download</button>
          <button onClick={() => scrollToSection("valores")}>Valores</button>
        </div>
      </nav>

      {/* INÍCIO */}
      <motion.section
        id="inicio"
        className="inicio-section fullpage-section"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          margin: 0,
          paddingTop: "100px",
          background: "#A7B2B3",
          rotateX,
          scale,
        }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          style={{ height: 400 }}
          src={logo}
          alt="Math Quest Logo"
          className="logo-mathquest"
        />
      </motion.section>

      {/* DIVISOR */}
      <div className="divider" />

      {/* SOBRE */}
      <motion.section
        id="sobre"
        ref={sobreRef}
        className="sobre-section fullpage-section"
        style={{
          background: "white",
          padding: "40px 20px",
          rotateX,
          scale,
        }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div
          className="sobre-content hover-sobre"
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <h2 className="titulo-com-linha">Sobre o Math Quest</h2>
          <p className="texto-animado texto-delay-1">
            O <strong>Math Quest</strong> é muito mais do que um jogo — é uma
            jornada interativa onde a matemática se encontra com a aventura.
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

      <div className="divider" />

      {/* EQUIPE */}
      <motion.section
        id="equipe"
        ref={equipeRef}
        className="fullpage-section"
        style={{
          background: "#D9D9D9",
          padding: "40px 20px",
          rotateX,
          scale,
        }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
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
          <h2 className="titulo-com-linha">Nossa Equipe</h2>
          <Carrossel
            itens={equipe}
            mostrarThumbs={true}
            carrosselTipo="equipe"
          />
        </div>
      </motion.section>

      <div className="divider" />

      {/* DOWNLOAD */}
      <motion.section
        id="download"
        ref={downloadRef}
        className="download-container fullpage-section"
        style={{
          background: "#EBEBEB",
          padding: "40px 20px",
          rotateX,
          scale,
        }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
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
            <h2 className="titulo-equipe">Math Quest</h2>
            <p className="texto-animado texto-delay-1">
              Embarque nessa aventura cheia de monstros, montanhas e
              matemática!
            </p>
            <a href="/MathQuest.zip" download className="download-btn">
              Baixar Agora
            </a>
          </div>
        </div>
      </motion.section>

      <div className="divider" />

      {/* VALORES */}
      <motion.section
        id="valores"
        className="valores-section fullpage-section"
        style={{
          background: "#050816",
          padding: "40px 20px 60px",
          rotateX,
          scale,
          color: "#fff",
        }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h2
            className="titulo-com-linha"
            style={{
              color: "#fff",
              marginBottom: "28px",
            }}
          >
            Nossos valores
          </h2>

          <div
            className="valores-cards"
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {valores.map((valor) => (
              <div key={valor.id} className="valor-card">
                <div
                  className="valor-card-bg"
                  style={{ backgroundImage: `url(${valor.imagem})` }}
                />
                <div className="valor-overlay">
                  <p className="valor-texto">{valor.descricao}</p>
                  <button className="valor-pill">{valor.titulo}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="rodape">
        <div className="footer-text">
          <p className="footer-title">Entre em contato</p>
          <p className="footer-email">
            <img src={gmail} alt="Email" className="email-icon" />
            <a href="mailto:quatiarchive@email.com">
              quatiarchive@gmail.com
            </a>
          </p>
        </div>
        <div className="footer-social">
          <a
            href="https://instagram.com/projeto_mathquest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="Instagram" className="insta-icon" />
          </a>
        </div>
        <img src={miniLogo} alt="Logo pequeno" className="footer-logo" />
      </footer>
    </div>
  );
}

export default App;
