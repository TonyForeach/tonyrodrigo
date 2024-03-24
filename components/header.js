
import styles from "../styles/header.module.css";
import Image from "next/image";
import { useEffect } from "react";
import { Link } from "react-scroll";

export default function Header() {
  useEffect(() => {
    let header1 = document.querySelector("#header");

    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        if (window.scrollY > 80) {
          header1.style.background = "#007272";
          header1.style.boxShadow = "0 5px 10px #0000001a";
        } else {
          header1.style.background = "transparent";
          header1.style.boxShadow = "0 0 0 transparent";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header id="header" className={`py-2 ${styles.header}`}>
        <div className="container py-lg-2">
          {/* <Link href='/'>
                    <Image src="/images/logo.png" width={200} height={50} alt={"logo designweb"}></Image>
            </Link> */}

          <nav
            id="navbar"
            className={`navbar navbar-expand-lg ${styles.navbar} w-100`}
          >
            <h1
              className="fs-1 text-white"
              style={{ marginBottom: "0px !important" }}
            >
              LOGO
            </h1>
            <input
              id="toggleNavBar"
              type="checkbox"
              className="toggleNavBar navbar-toggler"
            />
            <label
              htmlFor="toggleNavBar"
              className={`iconToggle fs-1 bg-white px-4 py-1 rounded-2`}
            >
              &#9776;
            </label>
            <div className="collapse navbar-collapse d-lg-flex justify-content-end">
              <ul className="navbar-nav gap-2 mb-2 mb-lg-0 py-5 py-lg-0">
                <li className="">
                  <Link
                    to="sobremi"
                    spy={true}
                    smooth={true}
                    offset={-12}
                    duration={500}
                    activeClass={styles.active}
                  >
                    Sobre Mí
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="habilidades"
                    spy={true}
                    smooth={true}
                    offset={-12}
                    duration={500}
                    activeClass={styles.active}
                  >
                    Habilidades
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="proyectos"
                    spy={true}
                    smooth={true}
                    offset={-12}
                    duration={500}
                    activeClass={styles.active}
                  >
                    Proyectos
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-12}
                    duration={500}
                    activeClass={styles.active}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="contacto"
                    spy={true}
                    smooth={true}
                    offset={-12}
                    duration={500}
                    activeClass={styles.active}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <section className={`${styles.hero}`}>
        <div
          className={`d-flex flex-column align-items-center justify-content-center position-relative w-100 h-100 ${styles.backgroundblur}`}
        >
          <div className={`py-3 order-2 order-lg-1 ${styles.nombre}`}>
            <h1>Anthony Rodrigo</h1>
            <p className="fs-4 fw-bold mb-0">Desarrollador Web</p>
          </div>
          <div className={`order-1 order-lg-2 ${styles.fotoface}`}>
            <Image
              src="/images/foto-face.svg"
              width={180}
              height={180}
              alt={"Foto de Perfil"}
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}
