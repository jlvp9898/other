import React, {useState} from "react";
import Link from "next/link";
import style from "./style";
import Lottie from 'react-lottie';
import animationData from '../../../public/static/lotties/check';
import api from ".../../../api/api";

const  clicEventos = (evento) => {
  evento.preventDefault();

  var isChecked = document.getElementById('flexCheckChecked').checked;
 
  if(evento.target[0].value.length > 0 && evento.target[1].value.length > 0 && isChecked){

  document.getElementById("error-mailchimp").style.display="none";

  document.getElementById("form-novedades").style.display="none";
  document.getElementById("check-form").style.display="block";
 
   
  const headers = { 'Content-Type': 'application/json', 'X-MBX-APIKEY': '6ETIUIL29WAXXHYO'};

  const values = JSON.stringify({'name':evento.target[0].value, 'email':evento.target[1].value});
  
  fetch(api.urlBackPanel()+`api.php`, { method: 'POST', headers, body: values})
  .then((response) => {
    return response.json();
  })
 .then((response) => {
  console.log(response);
  
  });

  }else{
    document.getElementById("error-mailchimp").style.display="block";
    document.getElementById("error-mailchimp").innerHTML="Por favor, rellena todo los campos.";
  }

  if(!isChecked){
    document.getElementById("error-mailchimp").style.display="block";
    document.getElementById("error-mailchimp").innerHTML="Debes aceptar los terminos y condiciones.";
  }
  
}
const Novedades = (props) => {

  
  
  const [state, setState] = useState({isPaused: true});
  
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  

  return (
    <>
      <style jsx>{style}</style>
      <style jsx>{`
        #check-form{
          text-align:center;
          color:#fff;
          display:none;
          margin-top:-40px;
        }
        #check-form p{
          margin-top:7px;
        }
        #error-mailchimp{
          color:red;
          margin-bottom:10px;
          display:none;
        }
      `}</style>
      <div className="novedades">
        <div className="container">
          <p className="text-novedades wow fadeInUp" data-wow-offset="20">
          {props.api.seccion_fourth.title}
          </p>
          <p id="error-mailchimp"></p>
          <form className="form-novedades wow fadeIn" id="form-novedades" onSubmit={clicEventos}>
            <div className="form-nombre">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="name"
              />
            </div>
            <div className="form-email">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="E-mail"
              />
            </div>
            <div className="form-btn">
              <button
                className="btn-red"
                type="submit"
                value="¡Quiero ser el primero!"
                onClick={() => { setState({isPaused: false});}}
                
              >
              {props.api.seccion_fourth.title_btn}
              </button>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                <Link href="/terminos-condiciones">
                  <a>Acepto los términos y condiciones</a>
                </Link>
              </label>
            </div>
          </form>
          <div id="check-form">
          <Lottie 
	       options={defaultOptions}
        height={200}
        width={200}
        isPaused={state.isPaused}
      />
        <h2>¡Se ha enviado correctamente!</h2>
        <p>A partir de ahora recibirás nuevas promociones y novedades</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Novedades;
