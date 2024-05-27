import style from './Formulario.module.css'
import Email from '../assets/icon-email.png'
import Telefone from '../assets/icon-tel.png'
import Plus from '../assets/icon-plus.png'
import { useState } from 'react'

const Formulario = () => {

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState([''])
    const [description, setDescription] = useState('')
    const [nMax, setNMax] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, phone, description)
        setEmail('')
        setPhone([''])
        setDescription('')
    }

    const insertContent = (e) => {
        e.preventDefault()
        setPhone([...phone, ''])
        setNMax(nMax + 1)
    }

    const handlePhoneChange = (index, value) => {
        const newPhone = [...phone];
        newPhone[index] = value;
        setPhone(newPhone);
    }

    return (
        <>
            <section id='contacts' className={style.request_section}>
                <h1>Precisando de algo em específico?</h1>
                <h2>Vamos discutir seu próximo projeto</h2>
                <fieldset>
                    <form onSubmit={handleSubmit} >
                        <h1>Entrar em Contato</h1>
                        <h2>Vamos discutir seu próximo projeto!</h2>
                        <div className={style.request_section_email}>
                            <img src={Email} alt="email" />
                            <input
                                className={style.request_section_form_text}
                                type="email"
                                placeholder="Seu melhor email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                            />
                        </div>
                        {phone.map((number, index) => (
                            <div className={style.request_section_telefone} key={index}>
                                <img src={Telefone} alt="telefone" />
                                <input
                                    className={style.request_section_form_text}
                                    type="tel"
                                    placeholder="Seu melhor número de telefone"
                                    onChange={(e) => handlePhoneChange(index, e.target.value)}
                                    value={number}
                                    required
                                />
                            </div>
                        ))}
                        <div className={style.request_section_add}>
                            <button onClick={nMax < 1 ? insertContent : null}><img src={Plus} alt="plus" /></button>
                            <p>Adicionar outra forma de contato</p>
                        </div>
                        <div className={style.request_section_comments}>
                            <img src={Email} alt="email" />
                            <textarea
                                className={style.request_section_form_text}
                                placeholder="Nos conte um pouco sobre seu o projeto"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                            />
                        </div>
                        <button id={style.request_section_btn} type="submit">Enviar</button>
                    </form>
                </fieldset>
            </section>
        </>
    )
}

export default Formulario