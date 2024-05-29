import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

//imagens
import Imagem from '../assets/imagem.png'

const BannerMissionsValues = () => {
    const navigate = useNavigate()
    const [hash, setHash] = useState()

    useEffect(() => {
        const handleNavigation = () => {
            navigate(hash)
        }
        handleNavigation()
    }, [hash])

    const handleNavClick = (hash) => {
        setHash(hash)
    }

    return (
        <main id='inicio'>
            <section className='sobre_container'>
                <img src={Imagem} alt="imagem" width='780px' height='400px' />
                <h1 className='sobre_container_title'>Mission and Values</h1>
                <h2 className='sobre_container_caption'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto sequi, vero necessitatibus saepe eveniet sunt laborum. </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi porro ducimus nihil maxime quibusdam. Dolores odio quos voluptatum aliquam perspiciatis. Illum tempora magnam veritatis accusamus doloremque amet facilis ad inventore vitae sunt quidem vel, in unde ducimus totam laudantium earum!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi porro ducimus nihil maxime quibusdam. Dolores odio quos voluptatum aliquam perspiciatis. Illum tempora magnam veritatis accusamus doloremque amet facilis ad inventore vitae sunt quidem vel, in unde ducimus totam laudantium earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum similique harum repellendus quibusdam qui iure quae nihil ullam hic quaerat! </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi porro ducimus nihil maxime quibusdam. Dolores odio quos voluptatum aliquam perspiciatis. Illum tempora magnam veritatis accusamus doloremque amet facilis ad inventore vitae sunt quidem vel, in unde ducimus totam laudantium earum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium id ad expedita eligendi similique ducimus asperiores sint impedit vel totam unde quae fugiat, molestias voluptates natus consequatur officia harum tempora.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi porro ducimus nihil maxime quibusdam. Dolores odio quos voluptatum aliquam perspiciatis. Illum tempora magnam veritatis accusamus doloremque amet facilis ad inventore vitae sunt quidem vel, in unde ducimus totam laudantium earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quae ex omnis soluta vero, a dolor, quas quo optio, non ea. Et odit natus nam perspiciatis dignissimos sunt officiis beatae!</p>
            </section>
            <section className='doubts_container'>
                <h1 className='doubts_container_title'>Ficou em dúvida sobre algo?</h1>
                <h2 className='doubts_container_caption'>Vamos conversar sobre!</h2>
                <Link to='/#contacts' onClick={() => handleNavClick('/#contacts')}>Entrar em contato</Link>
            </section>
        </main>
    )
}

export default BannerMissionsValues