import { faFacebookF, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <section id="contacto" className={`${styles.sectioncontact}`}>
        <div className="container d-md-flex">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <h1 className="mb-4" style={{fontSize: "6rem"}}>
              Contácta<span style={{ color: "#007272" }}>me!</span>
            </h1>
            <p className="col-md-11 mb-5" style={{fontSize: "1.9rem"}}>
              Estoy emocionado de contribuir a proyectos que marquen la
              diferencia en la experiencia en línea de las personas. ¡Es un
              placer conocerte!
            </p>
            <div className={`d-flex flex-column gap-3 fs-4 mb-4`}>
              <li>
                <a>+51 944 435 369</a>
              </li>
              <li>
                <a>anrofer.28@gmail.com</a>
              </li>
            </div>
            <div className={`mb-5 mb-md-0 ${styles.contacticons}`}>
              <a href="https://wa.me/51944435369">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <form className={`${styles.contactform}`}>
              <div className="mb-3">
                <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Nombre" autoComplete="off"/>
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" id="correo" name="correo" placeholder="Correo Electrónico" autoComplete="off"/>
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control" id="telefono" name="telefono" placeholder="Teléfono" autoComplete="off"/>
              </div>
              <div className="mb-4">
                <textarea className="form-control" id="mensaje" name="mensaje" placeholder="Mensaje" rows="3" autoComplete="off"></textarea>
              </div>
              <button className={`${styles.btnform}`} type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </section>
      <section className="py-4" style={{ backgroundColor: "#2A2A2A" }}>
        <div className={`container py-3 ${styles.contenido}`}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Anthony Rodrigo
          </p>
        </div>
      </section>
    </footer>
  );
}
