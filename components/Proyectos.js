import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Registro del plugin
gsap.registerPlugin(ScrollTrigger);

const proyectosData = [
  {
    title: "Campaña Old Spice",
    tecnologias: ["html", "bootstrap", "css", "javascript", "gsap", "mysql"],
    descripcion: "Desarrollé un sistema de registro de usuarios con validación en tiempo real y un panel de administración para monitorear los registros en la campaña.",
    image: "/images/cap-registro.png",
  },
  {
    title: "Diseño Web ISPerú IX",
    tecnologias: ["wordpress", "Bricks Builder", "css"],
    descripcion: "Descripción del proyecto 2",
    image: "/images/cap-isperuix.png",
  },
  {
    title: "Diseño web de Yuriko",
    tecnologias: ["wordpress", "php", "woocomerce"],
    descripcion: "Descripción del proyecto 3",
    image: "/images/web-yuriko.png",
  },
  // Agrega más proyectos según sea necesario
];

const Proyectos = () => {
  const [filtro, setFiltro] = useState("todos");
  const [proyectosVisibles, setProyectosVisibles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const proyectosRef = useRef([]);

  useEffect(() => {
    cargarProyectos();
  }, [filtro, currentPage]);

  useEffect(() => {
    if (proyectosVisibles.length > 0 && proyectosRef.current.length > 0) {
      animarProyectos();
    }
  }, [proyectosVisibles]);

  const cargarProyectos = () => {
    const proyectosFiltrados = proyectosData.filter((proyecto) =>
      filtro === "todos"
        ? true
        : proyecto.tecnologias.includes(filtro)
    );

    const startIndex = (currentPage - 1) * 6;
    const endIndex = startIndex + 6;

    setProyectosVisibles(proyectosFiltrados.slice(startIndex, endIndex));
  };

  const animarProyectos = () => {
    // Verificar si hay elementos en proyectosRef.current antes de aplicar la animación
    if (proyectosRef.current.length > 0) {
      gsap.fromTo(
        proyectosRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: proyectosRef.current,
            start: "top bottom",
          },
        }
      );
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const totalProyectosFiltrados = proyectosData.filter((proyecto) =>
    filtro === "todos"
      ? true
      : proyecto.tecnologias.includes(filtro)
  ).length;

  const tieneProyectosSiguientes = currentPage * 6 < totalProyectosFiltrados;
  const tieneProyectosPrevios = currentPage > 1;

  return (
    <div className="container text-center">
      <h1 className="heading pb-5">Proyectos</h1>
      <div className="d-flex justify-content-center mb-5">
        <button onClick={() => setFiltro("todos")} className="btn btn-primary mx-2">
          Todos
        </button>
        <button onClick={() => setFiltro("html")} className="btn btn-primary mx-2">
          HTML
        </button>
        <button onClick={() => setFiltro("react")} className="btn btn-primary mx-2">
          React
        </button>
        <button onClick={() => setFiltro("wordpress")} className="btn btn-primary mx-2">
          WordPress
        </button>
        <button onClick={() => setFiltro("javascript")} className="btn btn-primary mx-2">
          JavaScript
        </button>
      </div>

      {totalProyectosFiltrados === 0 ? (
        <p className="fs-4 text-muted">No se encontraron proyectos.</p>
      ) : (
        <>
          <div className="row row-cols-lg-3
           row-gap-4 mt-5">
            {proyectosVisibles.map((proyecto, index) => (
              <div className="col" key={index}>
                <div
                  className="card"
                  ref={(el) => (proyectosRef.current[index] = el)}
                >
                  <Image
                    src={proyecto.image}
                    className="card-img-top"
                    alt={proyecto.title}
                    width={1000}
                    height={1000}
                  />
                  <div className="card-body fs-4">
                    <h5 className="card-title fs-2 fw-bold mb-4">
                      {proyecto.tecnologias.join(", ")}
                    </h5>
                    <p className="card-text">{proyecto.descripcion}</p>
                  </div>
                  <div className="card-body fs-4">
                    <a href="#" className="card-link">
                      Ver Código
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination mt-5">
            {tieneProyectosPrevios && (
              <button onClick={handlePrevPage} className="btn btn-secondary mx-2">
                Anterior
              </button>
            )}
            {tieneProyectosSiguientes && (
              <button onClick={handleNextPage} className="btn btn-secondary mx-2">
                Siguiente
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Proyectos;

