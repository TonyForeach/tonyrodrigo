import Layout from "../components/layout";
import Proyectos from "../components/Proyectos";
import Blog from "../components/Blog";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faDatabase,
  faFutbolBall,
  faGamepad,
  faHeadphones,
  faLaptopCode,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";

import {
  faAngular,
  faBootstrap,
  faCss3,
  faGit,
  faHtml5,
  faJava,
  faJsSquare,
  faLaravel,
  faPhp,
  faReact,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const texto =
    "Hola, soy Anthony Rodrigo. Soy un desarrollador web apasionado con experiencia en la creación de soluciones web innovadoras. Mi enfoque se centra en el desarrollo utilizando tecnologías de vanguardia, y estoy comprometido con el aprendizaje continuo. Estoy emocionado de contribuir a proyectos que marquen la diferencia en la experiencia en línea de las personas. ¡Es un placer conocerte!";

  const intereses = [
    { icon: faFutbolBall, label: "Deporte" },
    { icon: faBook, label: "Lectura" },
    { icon: faGamepad, label: "Juegos" },
    { icon: faHeadphones, label: "Música" },
    { icon: faLaptopCode, label: "Programación" },
    { icon: faPenNib, label: "Dibujo" },
  ];

  const habilidadesDuras = [
    { icon: faHtml5, color: "#FF5733" },
    { icon: faCss3, color: "#0073E6" },
    { icon: faJsSquare, color: "#EFD81D" },
    { icon: faPhp, color: "#7377AD" },
    { icon: faJava, color: "#FE9136" },
    { icon: faLaravel, color: "#E63946" },
    { icon: faReact, color: "#269898" },
    { icon: faAngular, color: "#E63946" },
    { icon: faBootstrap, color: "#9D0FC6" },
    { icon: faDatabase, color: "#444444" },
    { icon: faGit, color: "#333333" },
    { icon: faWordpress, color: "#007AF5" },
  ];

  const habilidadesBlandas = [
    "Trabajo en Equipo",
    "Aprendizaje Continuo",
    "Proactivo",
    "Comunicación Asertiva",
    "Resolución de Problemas",
    "Colaboración",
    "Adaptabilidad",
    "Responsabilidad",
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const setupAnimations = () => {
      gsap.timeline({ repeat: 0 })
        .staggerTo('.fs-3 span', 0.5, { opacity: 1, y: 0, ease: 'power2.out' }, 0.08);

      gsap.timeline({
        scrollTrigger: {
          trigger: "#sobremi",
          start: "top center",
          toggleActions: "play none none none",
        },
      })
      .from('#sobremi .heading', { duration: 1, y: 50, opacity: 0 })
      .from('#sobremi .intereses', { duration: 1, y: 50, opacity: 0 }, "-=0.5")
      .from("#sobremi .col-icon", { duration: 1, opacity: 0, stagger: 0.2 }, "-=0.5")
      .from('#habilidades .heading', { duration: 1, y: 50, opacity: 0 })
      .from('#habilidades .habilidades-duras', { duration: 1, y: 50, opacity: 0 }, "-=0.5")
      .from('#habilidades .habilidades-blandas', { duration: 1, y: 50, opacity: 0 }, "-=0.5")
      .from('#habilidades .html5, #habilidades .css3, #habilidades .square-js, #habilidades .php, #habilidades .java, #habilidades .laravel, #habilidades .react, #habilidades .angular, #habilidades .bootstrap, #habilidades .database, #habilidades .git, #habilidades .wordpress', 
        { duration: 1, y: 50, opacity: 0, stagger: 0.1 }, "-=0.5");
    };

    setupAnimations();
  }, []);

  return (
    <Layout title={"Inicio"} description={"Esta es la pagina de Inicio"}>
      <section id="sobremi" className="px-4 px-md-0" style={{ backgroundColor: "#F8F8F8" }}>
        <div className="container text-center">
          <h1 className="heading">Sobre Mi</h1>
          <div className="row row-cols-1 row-cols-lg-2 row-gap-5 mt-5 align-items-center">
            <div className="col pe-md-5">
              <p className="fs-3" style={{ textAlign: 'justify', whiteSpace: 'pre-wrap' }}>
                {texto.split(' ').map((palabra, index) => (
                  <span key={index} style={{ opacity: 0, transform: 'translateY(20px)', display: 'inline-block' }}>
                    {palabra}{' '}
                  </span>
                ))}
              </p>
            </div>
            <div className="col d-flex flex-column gap-5">
              <h2 className="intereses fw-semibold display-6">Mis Intereses</h2>
              <div className="row row-cols-2 row-cols-lg-3 row-gap-4 text-center px-md-4 fs-2">
                {intereses.map((interes, index) => (
                  <div key={index} className="col col-icon">
                    <div className="d-flex flex-column gap-2 bg-white rounded-4 py-5 shadow-sm">
                      <FontAwesomeIcon style={{ color: "var(--primary)", height: "3.5rem" }} icon={interes.icon} />
                      <span>{interes.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="habilidades" className="section-py px-4 px-md-0">
        <div className="container text-center">
          <h1 className="heading pb-5">Habilidades</h1>
          <div className="row row-cols-1 row-cols-lg-2 row-gap-5 mt-5">
            <div className="d-flex flex-column gap-5 pe-md-5">
              <h2 className="habilidades-duras fw-semibold display-6 text-md-start">Habilidades Duras</h2>
              <div className="d-flex flex-wrap row-gap-4 column-gap-5">
                {habilidadesDuras.map((habilidad, index) => (
                  <FontAwesomeIcon
                    key={index}
                    className={habilidad.icon.iconName}
                    style={{ height: "6.9rem", color: habilidad.color }}
                    icon={habilidad.icon}
                  />
                ))}
              </div>
            </div>
            <div className="col d-flex flex-column gap-5">
              <h2 className="habilidades-blandas fw-semibold display-6 text-md-start">Habilidades Blandas</h2>
              <div className="d-md-flex flex-md-wrap row-gap-md-4 column-gap-md-5">
                {habilidadesBlandas.map((habilidad, index) => (
                  <div key={index} className="border border-1 border-black rounded-5 fs-3 px-5 py-2">
                    <span>{habilidad}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="proyectos" className="section-py px-4 px-md-0" style={{ backgroundColor: "#F8F8F8" }}>
        <Proyectos />
      </section>
      <section id="blog">
        <Blog />
      </section>
    </Layout>
  );
}
