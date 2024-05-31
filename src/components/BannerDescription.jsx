import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

//imagens
import Imagem from '../assets/description_about_img.png'

const BannerDescription = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
        const handleScroll = () => {
            const scrollTop = window.scrollY
            if (scrollTop) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        };

        window.addEventListener('scroll', handleScroll)

        // Limpar o event listener quando o componente for desmontado
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])



    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash)
            if (element) {
                element.scrollIntoView()
            }
        }
    }, [location])

    return (
        <main id='inicio'>
            <section className='sobre_container'>
                <img src={Imagem} alt="imagem" width='780px' height='400px' />
                <h1 className='sobre_container_title'>O que são as Empresas Juniores (EJs)</h1>
                <p>
                    As Empresas Juniores (EJs) são organizações sem fins lucrativos formadas por estudantes universitários, sob orientação de professores, que buscam desenvolver habilidades empreendedoras e práticas do mercado de trabalho. No Brasil, elas fazem parte do Movimento Empresa Júnior (MEJ), uma das maiores redes de empreendedorismo jovem do mundo. O MEJ proporciona um ambiente de aprendizado prático, onde os estudantes têm a oportunidade de aplicar conhecimentos teóricos em projetos reais, promovendo impacto social e econômico nas comunidades atendidas.</p>
                <p>
                    Os eventos de Empresa Júnior são fundamentais para a disseminação de conhecimento, networking e desenvolvimento profissional e pessoal dos estudantes. Eles englobam desde workshops e palestras até competições e feiras empresariais, proporcionando experiências enriquecedoras e inspiradoras. Além disso, esses eventos estimulam a troca de ideias entre EJs, fortalecendo o ecossistema empreendedor e impulsionando a inovação no meio acadêmico.
                </p>
                <p>
                    Ao participar de uma Empresa Júnior e dos eventos do MEJ, os estudantes têm a oportunidade de vivenciar a prática empresarial de forma única, adquirindo habilidades como trabalho em equipe, liderança, comunicação e gestão de projetos. Essa experiência extracurricular complementa a formação acadêmica, preparando os jovens para os desafios do mercado de trabalho e incentivando o empreendedorismo e a transformação social.
                </p>
            </section>
            <section className='doubts_container'>
                <h1 className='doubts_container_title'>Ficou em dúvida sobre algo?</h1>
                <h2 className='doubts_container_caption'>Vamos conversar sobre!</h2>
                <Link to='/#contacts' onClick={() => handleNavClick('/#contacts')}>Entrar em contato</Link>
            </section>
        </main>
    )
}

export default BannerDescription