import {
  faBook,
  faDatabase,
  faFutbolBall,
  faGamepad,
  faHeadphones,
  faLaptopCode,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import Proyectos from "../components/Proyectos";
import Blog from "../components/Blog";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {

  gsap.registerPlugin(ScrollTrigger);

  let texto = "Hola, soy Anthony Rodrigo. Soy un desarrollador web apasionado con experiencia en la creación de soluciones web innovadoras. Mi enfoque se centra en el desarrollo utilizando tecnologías de vanguardia, y estoy comprometido con el aprendizaje continuo. Estoy emocionado de contribuir a proyectos que marquen la diferencia en la experiencia en línea de las personas. ¡Es un placer conocerte!";
  useEffect(() => {

    let tlTextAnimation = gsap.timeline({ repeat: 0 });

    tlTextAnimation.staggerTo('.fs-3 span', 0.5, { opacity: 1, y: 0, ease: 'power3.out', }, 0.08);

    // Animación para el título de la sección
    let tlTitleSection = gsap.timeline({ repeat: 0 });
    tlTitleSection.from('#sobremi .heading', { duration: 1, x: -400, opacity: 0 });
    tlTitleSection.from('#sobremi .intereses', { duration: 2, x: -400, opacity: 0 });
    tlTitleSection.from("#sobremi .col-icon", { duration: 1, opacity: 0 });

    tlTitleSection.from('#habilidades .heading', { duration: 1, x: -400, opacity: 0 });
    tlTitleSection.from('#habilidades .habilidades-duras', { duration: 1, y: -400, opacity: 0 });
    tlTitleSection.from('#habilidades .habilidades-blandas', { duration: 1, y: -400, opacity: 0 });
    tlTitleSection.from('#habilidades .html', { duration: 1.5, x: -400, opacity: 0 });
    tlTitleSection.from('#habilidades .css', { duration: 1.4, x: -400, opacity: 0 });
    tlTitleSection.from('#habilidades .javascript', { duration: 1.3, x: -400, opacity: 0 });
    tlTitleSection.from('#habilidades .php', { duration: 1.2, x: -400, opacity: 0 });
    tlTitleSection.from('#habilidades .java', { duration: 1.1, x: -400, opacity: 0 });
    tlTitleSection.from('#habilidades .laravel', { duration: 1, x: -400, opacity: 0 });
    tlTitleSection.from('#habilidades .react', { duration: 0.9, x: -400, opacity: 0 });
    tlTitleSection.from('#habilidades .angular', { duration: 0.8, x: -400, opacity: 0 });
    tlTitleSection.from('#habilidades .bootstrap', { duration: 0.7, x: -400, opacity: 0 });
    tlTitleSection.from('#habilidades .database', { duration: 0.6, x: -400, opacity: 0 });
    tlTitleSection.from('#habilidades .git', { duration: 0.5, x: -400, opacity: 0 });
    tlTitleSection.from("#habilidades .wordpress", { duration: 0.4, opacity: 0 });



    ScrollTrigger.create({
      trigger: "#sobremi", // Punto de activación del trigger
      start: "top center", // Punto de inicio del trigger en relación con el elemento de activación
      animation: tlTitleSection, // La timeline que deseas reproducir cuando se activa el trigger
      toggleActions: "play none none none", // Configuración de las acciones al activar y desactivar el trigger
    });
  }, []);

  return (
    <>
      <Layout title={"Inicio"} description={"Esta es la pagina de Inicio"}>
        <section
          id="sobremi"
          className="px-4 px-md-0"
          style={{ backgroundColor: "#F8F8F8" }}
        >
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
                  <div className="col col-icon">
                    <div className="d-flex flex-column gap-2 bg-white rounded-4 py-5 shadow-sm">
                      <FontAwesomeIcon
                        style={{ color: "var(--primary)", height: "3.5rem" }}
                        icon={faFutbolBall}
                      />
                      <span>Deporte</span>
                    </div>
                  </div>
                  <div className="col col-icon">
                    <div className="d-flex flex-column gap-2 bg-white rounded-4 py-5 shadow-sm">
                      <FontAwesomeIcon
                        style={{ color: "var(--primary)", height: "3.5rem" }}
                        icon={faBook}
                      />
                      <span>Lectura</span>
                    </div>
                  </div>
                  <div className="col col-icon">
                    <div className="d-flex flex-column gap-2 bg-white rounded-4 py-5 shadow-sm">
                      <FontAwesomeIcon
                        style={{ color: "var(--primary)", height: "3.5rem" }}
                        icon={faGamepad}
                      />
                      <span>Juegos</span>
                    </div>
                  </div>
                  <div className="col col-icon">
                    <div className="d-flex flex-column gap-2 bg-white rounded-4 py-5 shadow-sm">
                      <FontAwesomeIcon
                        style={{ color: "var(--primary)", height: "3.5rem" }}
                        icon={faHeadphones}
                      />
                      <span>Música</span>
                    </div>
                  </div>
                  <div className="col col-icon">
                    <div className="d-flex flex-column gap-2 bg-white rounded-4 py-5 shadow-sm">
                      <FontAwesomeIcon
                        style={{ color: "var(--primary)", height: "3.5rem" }}
                        icon={faLaptopCode}
                      />
                      <span>Programación</span>
                    </div>
                  </div>
                  <div className="col col-icon">
                    <div className="d-flex flex-column gap-2 bg-white rounded-4 py-5 shadow-sm">
                      <FontAwesomeIcon
                        style={{ color: "var(--primary)", height: "3.5rem" }}
                        icon={faPenNib}
                      />
                      <span>Dibujo</span>
                    </div>
                  </div>
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
                <h2 className="habilidades-duras fw-semibold display-6 text-md-start">
                  Habilidades Duras
                </h2>
                <div className="d-flex flex-wrap row-gap-4 column-gap-5">
                  <FontAwesomeIcon className="html"
                    style={{ height: "6.9rem", color: "#FF5733" }}
                    icon={faHtml5}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon className="css"
                    style={{ height: "6.9rem", color: "#0073E6" }}
                    icon={faCss3}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon className="javascript"
                    style={{ height: "6.9rem", color: "#EFD81D" }}
                    icon={faJsSquare}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon className="php"
                    style={{ height: "6.9rem", color: "#7377AD" }}
                    icon={faPhp}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon className="java"
                    style={{ height: "6.9rem", color: "#FE9136" }}
                    icon={faJava}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon className="laravel"
                    style={{ height: "6.9rem", color: "#E63946" }}
                    icon={faLaravel}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon className="react"
                    style={{ height: "6.9rem", color: "#269898" }}
                    icon={faReact}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon className="angular"
                    style={{ height: "6.9rem", color: "#E63946" }}
                    icon={faAngular}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon className="bootstrap"
                    style={{ height: "6.9rem", color: "#9D0FC6" }}
                    icon={faBootstrap}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon className="database"
                    style={{ height: "6.9rem", color: "#444444" }}
                    icon={faDatabase}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon className="git"
                    style={{ height: "6.9rem", color: "#333333" }}
                    icon={faGit}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon className="wordpress"
                    style={{ height: "6.9rem", color: "#007AF5" }}
                    icon={faWordpress}
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div className="col d-flex flex-column gap-5">
                <h2 className="habilidades-blandas fw-semibold display-6 text-md-start">
                  Habilidades Blandas
                </h2>
                <div className="d-md-flex flex-md-wrap row-gap-md-4 column-gap-md-5">
                  <div className="border border-1 border-black rounded-5 fs-3 px-5 py-2">
                    <span>Trabajo en Equipo</span>
                  </div>
                  <div className="border border-1 border-black rounded-5 fs-3 px-5 py-2">
                    <span>Aprendizaje Continuo</span>
                  </div>
                  <div className="border border-1 border-black rounded-5 fs-3 px-5 py-2">
                    <span>Proactivo</span>
                  </div>
                  <div className="border border-1 border-black rounded-5 fs-3 px-5 py-2">
                    <span>Comunicación Asertiva</span>
                  </div>
                  <div className="border border-1 border-black rounded-5 fs-3 px-5 py-2">
                    <span>Resolución de Problemas</span>
                  </div>
                  <div className="border border-1 border-black rounded-5 fs-3 px-5 py-2">
                    <span>Colaboración</span>
                  </div>
                  <div className="border border-1 border-black rounded-5 fs-3 px-5 py-2">
                    <span>Adaptabilidad</span>
                  </div>
                  <div className="border border-1 border-black rounded-5 fs-3 px-5 py-2">
                    <span>Responsabilidad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="proyectos"
          className="section-py px-4 px-md-0"
          style={{ backgroundColor: "#F8F8F8" }}
        >
          <Proyectos />
        </section>
        <section id="blog">
          <Blog />
        </section>
      </Layout>
    </>
  );
}
