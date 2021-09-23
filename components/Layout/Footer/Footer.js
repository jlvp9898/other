import React,{useMemo,useState} from "react";
import Link from "next/link";
import style from "./style";
import BtnRedes from "./../BtnRedes";
import api from ".../../../api/api";
import Cookies from 'universal-cookie';

const Footer = ({ theme }) => {

  const [_json, setJson] = useState(api.jsonApiLang);
  const [_footer, setFooter] = useState(api.jsonApiFooter);
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

  
    fetch(api.urlApi("data_footer&lang="+lang), { method: "GET", headers })
    .then((response) => response.json())
    .then((data) => setFooter(data));
}, []);



  return (
    <>
      <style jsx>{style}</style>
      <footer className="black">
        <div className="container">
          <div className="grid">
            <div className="columns">
              <h3 className="wow fadeInUp">{_footer.column_1}</h3>
              <p className="wow fadeInLeft">
                <Link href="/te-unes-a-nuestro-equipo">
                  <a>{_footer.coumn_1_items[0]}</a>
                </Link>
              </p>
              <p className="wow fadeInLeft">
                <Link href="/contacto">
                  <a>{_footer.coumn_1_items[1]}</a>
                </Link>
              </p>
              

              <p className="wow fadeInLeft">
              <select className="select-language" onChange={handleChange} value={lang}>
               
              { _json.map(
                ({ language, code, enable_language}, j) => {
              
                  return (
                    
                    enable_language == true ? <option value={code} key={j}>{language}</option> : ""
                  );
                }
              ) }
              </select>
              </p>
             
            </div>
            <div className="columns">
              <h3 className="wow fadeInUp">{_footer.column_2}</h3>
              <p className="wow fadeInLeft">
                <Link href="/terminos-condiciones">
                  <a>{_footer.coumn_2_items[0]}</a>
                </Link>
              </p>
              <p className="wow fadeInLeft">
                <Link href="/politica-cookies">
                  <a>{_footer.coumn_2_items[1]}</a>
                </Link>
              </p>
              <p className="wow fadeInLeft">
                <Link href="/aviso-legal">
                  <a>{_footer.coumn_2_items[2]}</a>
                </Link>
              </p>
            </div>
            <div className="columns">
              <h3 className="wow fadeInUp">{_footer.column_3}</h3>
              <BtnRedes />
            </div>
          </div>
        </div>

        <div className="footer-2">
          <div className="container">
            <small>
              <p className="wow fadeInUp">
              {_footer.copyright}
              </p>
            </small>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
