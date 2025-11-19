import { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "./Carrossel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carrossel({ itens = [], mostrarThumbs = true, clicavel = true, carrosselTipo = "padrao" }) {
  const [selecionado, setSelecionado] = useState(null);

  const settings = {
    arrows: true,
    customPaging: function (i) {
      return mostrarThumbs && itens[i] && itens[i].imagem ? (
        <img src={itens[i].imagem} alt={`Thumb ${i}`} className="img-thumb" />
      ) : (
        <div className="custom-dot" />
      );
    },
    dots: true,
    dotsClass: mostrarThumbs ? "slick-dots slick-thumb" : "slick-dots slick-default",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const renderSlide = (item, index) => {
    if (carrosselTipo === "equipe") {
      return (
        <motion.div
          key={index}
          className="equipe-slide"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
        >
          <div className="equipe-card">
            <img
              src={item.imagem}
              alt={item.nome || `Slide ${index}`}
              className="equipe-img"
            />
            <div className="equipe-info">
              <h3 className="subtitulo span" >{item.nome}</h3>
              <p className="descricao">{item.descricao}</p>
              <p className="texto-animado">{item.info}</p>
            </div>
          </div>
        </motion.div>
      );
    }

    return (
      <div key={index} className="carrossel-slide">
        <img
          src={item.imagem}
          alt={item.nome || `Slide ${index}`}
          className="img-grande"
          onClick={clicavel ? () => setSelecionado(item) : undefined}
          style={{ cursor: clicavel ? "pointer" : "default" }}
        />
        {item.nome && (
          <div className="info">
            <h3>{item.nome}</h3>
            <p>
              <em>{item.descricao}</em>
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={carrosselTipo === "equipe" ? "slider-wrapper-equipe" : "slider-wrapper"}>
      <Slider {...settings}>
        {itens.map((item, index) => renderSlide(item, index))}
      </Slider>

      {clicavel && selecionado && (
        <div className="modal-overlay" onClick={() => setSelecionado(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selecionado.nome}</h2>
            <p>
              <em>{selecionado.descricao}</em>
            </p>
            <p>{selecionado.info}</p>
            <button onClick={() => setSelecionado(null)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrossel;
