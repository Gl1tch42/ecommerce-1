import React, { useState } from "react";
import { MdAccountCircle, MdExpandMore, MdSearch } from "react-icons/md";
import "./styles.css";

import logo from "../../assets/logo-sem-nome.jpg";

function Header() {
  const [products, showProducts] = useState(false);

  const productsClass = document.querySelector('.products')
  const specifyProducts = document.querySelector(".specify-products");

  if (products === true) {
    specifyProducts?.classList.add("active");
    productsClass?.classList.add('active')
  } else {
    specifyProducts?.classList.remove("active");
    productsClass?.classList.remove('active')
  }

  return (
    <>
      <nav>
        <div className="header">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="links">
            <ul className="menu">
              <a href="/">
                <li>Home</li>
              </a>
              <a href="/produtos" className="products" onMouseEnter={() => showProducts(!products)} onMouseLeave={() => showProducts(false)}>
                <li>Produtos</li>
                <MdExpandMore/>
                <div className="specify-products">
                  <ul>
                    <a href="/"><li>Tabaco</li></a>
                    <li>Essência</li>
                    <li>Isqueiro</li>
                    <li>Cinzeiro</li>
                    <li>Dichavador</li>
                  </ul>
                </div>
              </a>
              <a href="/contato">
                <li>Contato</li>
              </a>
              <a href="/login">
                <li className="loginAtivo">
                  <MdAccountCircle />
                  <p>Olá, Felipe</p>
                </li>
              </a>
              <MdSearch className="lupa"/>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
