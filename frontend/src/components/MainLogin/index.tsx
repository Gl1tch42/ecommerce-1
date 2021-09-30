import React, { useState } from "react";
import "./styles.css";

import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

function MainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <>
      <form action="">
        <div className="login">
          <div className="login-logo">
            <a href="/"><h1>Logo</h1></a>
          </div>
          <div className="login-right">
            <h1>Acessar conta</h1>

            <div className="login-input-email">
              <MdEmail />
              <input
                type="text"
                placeholder="Digite um e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="login-input-passoword">
              <MdLock />
              <input
                type={show ? "text" : "password"}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="login-eye">
                {show ? (
                  <HiEye size={20} onClick={handleClick} />
                ) : (
                  <HiEyeOff size={20} onClick={handleClick} />
                )}
              </div>
            </div>

            <button type="submit">Entrar</button>

            <h4>Não tem conta?</h4>

            <a href="/cadastro" className="btn-cadastro">Cadastrar-se</a>
          </div>
        </div>
      </form>

    </>
  );
};

export default MainLogin;
