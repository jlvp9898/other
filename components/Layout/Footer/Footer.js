import React,{useMemo,useState} from "react";
import Link from "next/link";
import style from "./style";
import BtnRedes from "./../BtnRedes";
import api from ".../../../api/api";
import Cookies from 'universal-cookie';

const Footer = ({ theme }) => {

  const [_json, setJson] = useState(api.jsonApiLang);

  const cookies = new Cookies();

  const lang = cookies.get('lang');
 
  const handleChange = (e) => {
    
    cookies.set('lang',e.target.value, { path: '/' });
    window.location="";
  };


useMemo(async () => {
  const headers = api.head();
  fetch(api.urlApi("data_lang"), { method: "GET", headers })
    .then((response) => response.json())
    .then((data) => setJson(data));
}, []);
  return (
    <>
      <style jsx>{style}</style>
      <footer className="black">
        <div className="container">
          <div className="grid">
            <div className="columns">
              <h3 className="wow fadeInUp">Trabaja con nosotros</h3>
              <p className="wow fadeInLeft">
                <Link href="/te-unes-a-nuestro-equipo">
                  <a>¿Te unes al equipo?</a>
                </Link>
              </p>
              <p className="wow fadeInLeft">
                <Link href="/contacto">
                  <a>Contácto</a>
                </Link>
              </p>
              <p className="wow fadeInLeft">
              <select className="select-language" onChange={handleChange} value={lang}>
              {_json.map(
                ({ language, code, image}, j) => {
               
                  return (
                    <option value={code}>{language}</option>
                  );
                }
              )}
              </select>
              </p>
            </div>
            <div className="columns">
              <h3 className="wow fadeInUp">Legal</h3>
              <p className="wow fadeInLeft">
                <Link href="/terminos-condiciones">
                  <a>Términos y condiciones</a>
                </Link>
              </p>
              <p className="wow fadeInLeft">
                <Link href="/politica-cookies">
                  <a>Política de cookies</a>
                </Link>
              </p>
              <p className="wow fadeInLeft">
                <Link href="/aviso-legal">
                  <a>Aviso legal</a>
                </Link>
              </p>
            </div>
            <div className="columns">
              <h3 className="wow fadeInUp">Síguenos</h3>
              <BtnRedes />
            </div>
          </div>
        </div>

        <div className="footer-2">
          <div className="container">
            <small>
              <p className="wow fadeInUp">
                &copy;2021 200GRAMOS - Todos los derechos reservados
              </p>
            </small>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
