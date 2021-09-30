import React from "react";

import "./styles.css";

function MainContato() {
  return (
    <main>
      <section className="mainContato">
        <h1>Entre em contato conosco</h1>
        <div className="mainContatoForm">
          <form action="">
            <input type="text" placeholder="Nome Completo" name="" required />
            <input type="text" placeholder="Email" name="" required />
            <input type="text" placeholder="Assunto" name="" required />
            <textarea placeholder="Mensagem" name="" required></textarea>
            <button>Enviar</button>
          </form>
        </div>
        <div className="mainContatoIframe">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125868.21608680792!2d-35.78523114179692!3d-9.648385099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70145ce597aec61%3A0xf9e1637991e3acad!2sAmericanas!5e0!3m2!1spt-BR!2sbr!4v1632433848958!5m2!1spt-BR!2sbr"
            width="1000"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default MainContato;
