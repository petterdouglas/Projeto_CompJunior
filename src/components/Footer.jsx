import { Link } from 'react-router-dom'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <>
      <section className={style.footer_info}>
        <div className={style.footer_info_comp}>
          <svg id={style.comp_icon} width="45" height="44" viewBox="0 0 45 44" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M41.4636 25.7789C42.8936 25.7775 44.0523 24.6238 44.0523 23.201V2.57789C44.0523 1.15416 42.8921 0 41.461 0H20.7305C19.2994 0 18.1392 1.15416 18.1392 2.57789V23.201C18.1392 24.6236 19.2976 25.7771 20.7273 25.7789C20.7284 25.7789 20.7294 25.7789 20.7305 25.7789L23.3218 25.7789C23.3233 25.7789 23.3248 25.7789 23.3263 25.7789H31.0912C31.0927 25.7789 31.0942 25.7789 31.0958 25.7789H41.461C41.4619 25.7789 41.4627 25.7789 41.4636 25.7789ZM28.5044 30.9346V41.2462C28.5044 42.6699 29.6646 43.8241 31.0958 43.8241H41.461C42.8921 43.8241 44.0523 42.6699 44.0523 41.2462V30.9346C44.0523 29.5109 42.8921 28.3567 41.461 28.3567H31.0958C29.6646 28.3567 28.5044 29.5109 28.5044 30.9346ZM25.9131 30.932C25.9117 29.5095 24.7521 28.3567 23.3218 28.3567H17.1888C16.2825 28.3567 15.5479 27.6259 15.5479 26.7243V23.2041C15.5479 23.2031 15.5479 23.202 15.5479 23.201V20.6231C15.5479 20.6223 15.5479 20.6216 15.5479 20.6208C15.5467 19.1981 14.387 18.0452 12.9566 18.0452H2.59131C1.16017 18.0452 0 19.1994 0 20.6231V41.2462C0 42.6699 1.16017 43.8241 2.59132 43.8241H23.3218C24.7521 43.8241 25.9117 42.6713 25.9131 41.2488C25.9131 41.2479 25.9131 41.247 25.9131 41.2462V30.9346C25.9131 30.9338 25.9131 30.9329 25.9131 30.932ZM12.9584 15.4673C14.388 15.4663 15.5467 14.3138 15.5479 12.8917C15.5479 12.8909 15.5479 12.8902 15.5479 12.8894V2.57789C15.5479 2.57728 15.5479 2.57666 15.5479 2.57605C15.5469 1.15316 14.3871 0 12.9566 0H2.59131C1.16017 0 0 1.15416 0 2.57789V12.8894C0 14.3125 1.15917 15.4663 2.58947 15.4673C2.59008 15.4673 2.5907 15.4673 2.59131 15.4673H12.9566C12.9572 15.4673 12.9578 15.4673 12.9584 15.4673Z"
              fill="#FFFFFF" />
          </svg>
          <h1><b>Comp</b>Junior</h1>
        </div>
        <div className={style.footer_info_contact}>
          <h1>Contato</h1>
          <div>
            <p>endereço@email.com</p>
            <p>(35) 9 3535 - 3535</p>
          </div>
          <div>
            <p>endereço@email.com</p>
            <p>(35) 9 3535 - 3535</p>
          </div>
          <div className={style.footer_info_contact_address}>
            <h2>Endereço</h2>
            <p>Rua BLABLABA, Cidade, UF</p>
            <p>37170000</p>
            <ol>
              <li>Departamento de Ciências da computação </li>
            </ol>
          </div>
        </div>
        <div className={style.footer_info_solutions}>
          <h1>Soluções</h1>
          <div>
            <p>O que faz uma empresa junior</p>
            <Link to="/about/description/#inicio">Saber mais</Link>
          </div>
          <div>
            <p>Quais são nossas missões?</p>
            <Link to="/about/missions_and_values/#inicio">Saber mais</Link>
          </div>
          <div>
            <p>Quais são nossos valores?</p>
            <Link to="/about/missions_and_values/#inicio">Saber mais</Link>
          </div>
        </div>
        <div className={style.footer_info_request}>
          <h1>Orçamento</h1>
          <div>
            <p>Nossos serviços</p>
            <Link to="/about/services/#inicio">Saber mais</Link>
          </div>
          <div className={style.footer_info_request_cases}>
            <h2>Cases de sucesso</h2>
            <ol>
              <li>Case 1 (Aplicação Mobile)</li>
              <li>Case 2 (Aplicação Mobile)</li>
              <li>Case 3 (Aplicação Mobile)</li>
              <li>Case 4 (Aplicação Mobile)</li>
              <li>Case 5 (Aplicação Mobile)</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer