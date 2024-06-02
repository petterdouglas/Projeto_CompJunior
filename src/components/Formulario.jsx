//hooks
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import validator from 'validator'
import { initializeApp } from "firebase/app"
import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore"
//estilos
import style from './Formulario.module.css'
// imagens
import Email from '../assets/icon-email.png'
import Telefone from '../assets/icon-tel.png'
import Plus from '../assets/icon-plus.png'

const firebaseForm = initializeApp({
    apiKey: "AIzaSyBj0yrpbfXPCXtNVyhXTekHerpwLmLS8w4",
    authDomain: "compjunior-b5e06.firebaseapp.com",
    projectId: "compjunior-b5e06",
    storageBucket: "compjunior-b5e06.appspot.com",
    messagingSenderId: "918246898122",
    appId: "1:918246898122:web:64c7481c0ce7cee9feb733"
})

const Formulario = () => {

    const [verdade, setVerdade] = useState(false)
    const [nMax, setNMax] = useState(0)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [contacts, setContacts] = useState([]) // armazém dos dados dos clientes

    const db = getFirestore(firebaseForm)
    const contactCollectionRef = collection(db, 'dataBase')

    useEffect(() => {
        const getClients = async () => {
            const data = await getDocs(contactCollectionRef)
            setContacts(...data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getClients()
    }, []);


    const onSubmit = async (data) => {
        const email = data.Email
        const phone1 = data.Telefone1
        const phone2 = (data.Telefone2 ? data.Telefone2 : '')
        const text = data.Texto
        await addDoc(contactCollectionRef, {
            email, phone1, phone2, text,
        })
        window.alert('Formulário enviado com successo!')
        reset()
    }

    const insertContent = (e) => {
        e.preventDefault()
        setNMax(nMax + 1)
        setVerdade(true)
    }

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
                                {...register('Email', { required: true, validate: (value) => validator.isEmail(value) })}
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