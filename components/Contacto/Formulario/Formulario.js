import React from 'react';
import LineDoble from '../../ui/LineDoble';
import style from "./style";

export const Formulario = (props) => {
  return (
    <>
      <style jsx>{style}</style>
      <LineDoble />
      <h1 className="title-formulario wow fadeInRight">{props.api.form_title}</h1>
      <form className="form-contacto">
        <div className="form-name">
          <input
            type="text"
            className="form-control"
            placeholder={props.api.form_name}
          />
        </div>
        <div className="form-email">
          <input
            type="email"
            className="form-control"
            placeholder={props.api.form_email}
          />
        </div>
        <select className="form-select" aria-label="Default select example">
        { props.api.content_menu.map(
                ({ title_menu}, j) => {
              
                  return (
                    <option value={title_menu} key={j}>{title_menu}</option>
                  );
                }
              ) }
        </select>
        <div className="form-textarea">
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <div className="form-btn">
          <button
            className="form-control btn-red"
            type="submit"
            value="¡Quiero ser el primero!">
              Enviar
          </button>
        </div>
      </form>
    </>
  )
}
