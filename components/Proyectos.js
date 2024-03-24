import Image from "next/image";

const Proyectos = () => {
  return (
    <div className="container text-center">
      <h1 className="heading pb-5">Proyectos</h1>
      <div className="row row-cols-lg-2 row-gap-4 mt-5">
        <div className="col">
          <div className="card">
            <Image src="/images/registro.png" className="card-img-top" alt="..." width={1000} height={1000}/>
            <div className="card-body fs-4">
              <h5 className="card-title fs-2 fw-bold mb-4">html, css, js, php, gsap</h5>
              <p className="card-text">
                Registro de Usuarios por Campaña de Old Spice y un Panel Administrador para visualizar los Usuarios Registrados, 
                Ver el total y Exportar a Excel
              </p>
            </div>
            <div className="card-body fs-4">
              <a href="#" className="card-link">
                Ver Codigo
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <Image src="/images/registro.png" className="card-img-top" alt="..." width={1000} height={1000}/>
            <div className="card-body fs-4">
              <h5 className="card-title fs-2 fw-bold mb-4">html, css, js, php, gsap</h5>
              <p className="card-text">
                Registro de Usuarios por Campaña de Old Spice y un Panel Administrador para visualizar los Usuarios Registrados, 
                Ver el total y Exportar a Excel
              </p>
            </div>
            <div className="card-body fs-4">
              <a href="#" className="card-link">
                Ver Codigo
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <Image src="/images/registro.png" className="card-img-top" alt="..." width={1000} height={1000}/>
            <div className="card-body fs-4">
              <h5 className="card-title fs-2 fw-bold mb-4">html, css, js, php, gsap</h5>
              <p className="card-text">
                Registro de Usuarios por Campaña de Old Spice y un Panel Administrador para visualizar los Usuarios Registrados, 
                Ver el total y Exportar a Excel
              </p>
            </div>
            <div className="card-body fs-4">
              <a href="#" className="card-link">
                Ver Codigo
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <Image src="/images/registro.png" className="card-img-top" alt="..." width={1000} height={1000}/>
            <div className="card-body fs-4">
              <h5 className="card-title fs-2 fw-bold mb-4">html, css, js, php, gsap</h5>
              <p className="card-text">
                Registro de Usuarios por Campaña de Old Spice y un Panel Administrador para visualizar los Usuarios Registrados, 
                Ver el total y Exportar a Excel
              </p>
            </div>
            <div className="card-body fs-4">
              <a href="#" className="card-link">
                Ver Codigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
