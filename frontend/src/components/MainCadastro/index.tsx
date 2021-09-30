import React, { useState } from "react";
import InputMask from 'react-input-mask'

import "./styles.css";

import { MdEmail, MdLock, MdPerson, MdDateRange, MdSmartphone } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

function MainCadastro() {

    const [values, setValues] = useState({
        nomeForm: '',
        dataForm: '',
        emailForm: '',
        confirmEmailForm: '',
        telForm: '',
        senhaForm: '',
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
        if(values.nomeForm === '' || values.dataForm === '' || values.emailForm === '' || values.confirmEmailForm === '' || values.telForm === '' ||values.senhaForm === '') {
            console.log('Não cadastrado!')
        } else {
            console.log('Cadastrado com sucesso!', cadastro)
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
                            name="nomeForm"
                            value={values.nomeForm}
                            placeholder="Digite seu nome completo"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="cadastro-input-data">
                        <MdDateRange />
                        <InputMask
                            name="dataForm"
                            mask="99/99/9999"
                            placeholder="DD/MM/AAAA"
                            value={values.dataForm}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="cadastro-input-email">
                        <MdEmail />
                        <input
                            name="emailForm"
                            placeholder="email@example.com"
                            value={values.emailForm}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="cadastro-input-confirmEmail">
                        <MdEmail />
                        <input
                            name="confirmEmailForm"
                            type="email"
                            placeholder="Confirme seu e-mail"
                            value={values.confirmEmailForm}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="cadastro-input-tel">
                        <MdSmartphone />
                        <InputMask
                            name="telForm"
                            type="tel"
                            mask="(99) 99999-9999"
                            placeholder="(99) 99999-9999"
                            value={values.telForm}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="login-input-passoword">
                        <MdLock />
                        <input
                            name="senhaForm"
                            type={show ? "text" : "password"}
                            value={values.senhaForm}
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