import style from './Formulario.module.css'
import Email from '../assets/icon-email.png'
import Telefone from '../assets/icon-tel.png'
import Plus from '../assets/icon-plus.png'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import validator from 'validator'

const Formulario = () => {

    const [verdade, setVerdade] = useState(false)
    const [nMax, setNMax] = useState(0)
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    const insertContent = (e) => {
        e.preventDefault()
        setNMax(nMax + 1)
        setVerdade(true)
    }
    console.log({ errors })

    return (
        <>
            <section id='contacts' className={style.request_section}>
                <h1>Precisando de algo em específico?</h1>
                <h2>Vamos discutir seu próximo projeto</h2>
                <fieldset>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <h1>Entrar em Contato</h1>
                        <h2>Vamos discutir seu próximo projeto!</h2>
                        <div className={style.request_section_email}>
                            <img src={Email} alt="email" />
                            <input
                                className={style.request_section_form_text}
                                type="email"
                                placeholder="Seu melhor email"
                                {...register('Email', { required: true, validate: (value) => validator.isEmail(value)})}
                            />
                        </div>
                        {errors?.Email?.type === 'required' && <span className={style.error_message}>Este campo é obrigatório!</span>}
                        {errors?.Email?.type === 'validate' && <span className={style.error_message}>Email inválido!</span>}
                        <div className={style.request_section_telefone}>
                            <img src={Telefone} alt="telefone" />
                            <input
                                className={style.request_section_form_text}
                                type="tel"
                                placeholder="Seu melhor número de telefone"
                                {...register('Telefone1', { required: true, validate: (value) => validator.isMobilePhone(value, 'pt-BR') })}
                            />
                        </div>
                        {errors?.Telefone1?.type === 'required' && <span className={style.error_message}>Este campo é obrigatório!</span>}
                        {errors?.Telefone1?.type === 'validate' && <span className={style.error_message}>Telefone inválido</span>}
                        {verdade &&
                            <div className={style.request_section_telefone}>
                                <img src={Telefone} alt="telefone" />
                                <input
                                    className={style.request_section_form_text}
                                    type="tel"
                                    placeholder="Seu melhor número de telefone"
                                    {...register('Telefone2', { required: true, validate: (value) => validator.isMobilePhone(value, 'pt-BR') })}
                                />
                            </div>
                        }
                        {verdade && errors?.Telefone2?.type === 'required' && <span className={style.error_message}>Este campo é obrigatório!</span>}
                        {errors?.Telefone2?.type === 'validate' && <span className={style.error_message}>Telefone inválido</span>}

                        <div className={style.request_section_add}>
                            <button onClick={nMax < 1 ? insertContent : null}><img src={Plus} alt="plus" /></button>
                            <p>Adicionar outra forma de contato</p>
                        </div>
                        <div className={style.request_section_comments}>
                            <img src={Email} alt="email" />
                            <textarea
                                className={style.request_section_form_text}
                                placeholder="Nos conte um pouco sobre seu o projeto"
                                {...register('Texto')}
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