import "./About.css";
import rick from "../components/img/rick-bailando.gif";

const About = () => {
  return (
    <div className="contenedor">
      <div>
        <h1 className="titulo-principal">Sobre la App Rick and Morty</h1>
      </div>
      <div className="video">
        <iframe
          width="650"
          height="315"
          src="https://www.youtube.com/embed/Jvb3gcVTfDg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="contenedor-img">
          <img className="img-rick" src={rick} alt="imagen de Rick"></img>
        </div>
      </div>

      <div className="contenedor-texto glass-effect">
        <p className="texto">
          Rick y Morty es una serie de televisión de animación para adultos
          creada por Justin Roiland y Dan Harmon en 2013 para «Adult Swin». ¿Qué
          es Adult Swim? Si no te suena de nada, se trata de la filial de la
          Cartoon Network que dedica su programación al contenido de animación
          para adultos emitidos sin censura. Una emisión que, según sus propios
          creadores, es una mezcla entre Modern Family, Los Simpsons y Futurama,
          mezclada con constantes guiños a grandes sagas de la ciencia ficción
          como Regreso al futuro o Star Trek, entre muchas otras.
        </p>
      </div>
    </div>
  );
};

export default About;
