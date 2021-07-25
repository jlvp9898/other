import React from 'react';
import LineDoble from '../../ui/LineDoble';
import style from "./style";

export const Formulario = () => {
  return (
    <>
      <style jsx>{style}</style>
      <LineDoble />
      <h1 className="title-formulario wow fadeInRight">FORMULARIO PARA DUDAS Y PREGUNTAS</h1>
      <form className="form-contacto">
        <div className="form-name">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
          />
        </div>
        <div className="form-email">
          <input
            type="email"
            className="form-control"
            placeholder="E-mail"
          />
        </div>
        <select className="form-select" aria-label="Default select example">
          <option value="1">Asunto</option>
          <option value="2">Asunto</option>
          <option value="3">Asunto</option>
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
