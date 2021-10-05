import React, { useState } from "react";
import InputMask from 'react-input-mask'

import api from '../../services/api'

import "./styles.css";

import { MdEmail, MdLock, MdPerson, MdDateRange, MdSmartphone } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

function MainCadastro() {

    const [values, setValues] = useState({
        nome: '',
        data: '',
        email: '',
        confirmEmail: '',
        tel: '',
        senha: '',
    });

    function handleChange(event: any) {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    const [show, setShow] = useState(false);
    const handleClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setShow(!show);
    };

    function handleSubmit(e: any) {
        const cadastro = {
            cadastro_usuario: values,
        }
        e.preventDefault();
        if(values.nome === '' || values.data === '' || values.email === '' || values.confirmEmail === '' || values.tel === '' ||values.senha === '') {
            console.log('Não cadastrado!');
        } else {
            console.log('Cadastrado com sucesso', cadastro);
    }
}
    

    return (
        <form action="">
            <div className="cadastro">
                <div className="cadastro-logo">
                    <a href="/"><h1>Logo</h1></a>
                </div>
                <div className="cadastro-right">
                    <h1>Cadastrar conta</h1>

                    <div className="cadastro-input-nome">
                        <MdPerson />
                        <input
                            name="nome"
                            value={values.nome}
                            placeholder="Digite seu nome completo"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="cadastro-input-data">
                        <MdDateRange />
                        <InputMask
                            name="data"
                            mask="99/99/9999"
                            placeholder="DD/MM/AAAA"
                            value={values.data}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="cadastro-input-email">
                        <MdEmail />
                        <input
                            name="email"
                            placeholder="email@example.com"
                            value={values.email}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="cadastro-input-confirmEmail">
                        <MdEmail />
                        <input
                            name="confirmEmail"
                            type="email"
                            placeholder="Confirme seu e-mail"
                            value={values.confirmEmail}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="cadastro-input-tel">
                        <MdSmartphone />
                        <InputMask
                            name="tel"
                            type="tel"
                            mask="(99) 99999-9999"
                            placeholder="(99) 99999-9999"
                            value={values.tel}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="login-input-passoword">
                        <MdLock />
                        <input
                            name="senha"
                            type={show ? "text" : "password"}
                            value={values.senha}
                            placeholder="Digite sua senha"
                            required
                            onChange={handleChange}
                        />
                        <div className="cadastro-eye">
                            {show ? (
                                <HiEye size={20} onClick={handleClick} />
                            ) : (
                                <HiEyeOff size={20} onClick={handleClick} />
                            )}
                        </div>
                    </div>

                    <button type="submit" id="enviar-cadastro" onClick={handleSubmit}>Enviar</button>
                </div>
            </div>
        </form>

    )
}

export default MainCadastro;