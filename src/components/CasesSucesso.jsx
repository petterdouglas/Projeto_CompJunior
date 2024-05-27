import style from './CasesSucesso.module.css'
import Case from '../assets/case1_img.png'

const CasesSucesso = () => {
    return (
        <>
            <section className={style.cases_section}>
                <h1>Cases de sucesso</h1>
                <img src={Case} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem esse illo quo? Autem dolores reiciendis
                        repellendus at soluta quos. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <div className={style.cases_icons}>
                        <button className={style.cases_arrow_left}><svg width="26" height="22" viewBox="0 0 30 22" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M28.1766 9.05448L6.00174 9.05448L10.8735 3.74917C11.5454 3.0174 11.5454 1.91975 10.8735 1.18799C10.2015 0.456218 9.19357 0.456218 8.52161 1.18799L0.794013 9.6033C0.122048 10.3351 0.122048 11.4327 0.794013 12.1645L8.52161 20.5798C9.19357 21.3116 10.2015 21.3116 10.8735 20.5798C11.5454 19.848 11.5454 18.7504 10.8735 18.0186L6.00174 12.7133L28.1766 12.7133C29.0165 12.7133 29.8565 11.9815 29.8565 10.8839C29.8565 9.78625 29.0165 9.05448 28.1766 9.05448Z"
                                fill="#006BFF" />
                        </svg>
                        </button>
                        <div className={style.cases_icons_balls}>
                            <svg id="case1_topic" width="8" height="13" viewBox="0 0 11 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <ellipse opacity="0.3" cx="5.26063" cy="6.47436" rx="5.2682" ry="5.73705" fill="#006BFF" />
                            </svg>
                            <svg id={style.case2_topic} width="8" height="13" viewBox="0 0 11 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <ellipse opacity="0.3" cx="5.26063" cy="6.47436" rx="5.2682" ry="5.73705" fill="#006BFF" />
                            </svg>
                            <svg id={style.case3_topic} width="8" height="13" viewBox="0 0 11 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <ellipse opacity="0.3" cx="5.26063" cy="6.47436" rx="5.2682" ry="5.73705" fill="#006BFF" />
                            </svg>
                            <svg id={style.case3_topic} width="8" height="13" viewBox="0 0 11 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <ellipse opacity="0.3" cx="5.26063" cy="6.47436" rx="5.2682" ry="5.73705" fill="#006BFF" />
                            </svg>
                        </div>
                        <button><svg width="26" height="22" viewBox="0 0 31 22" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.29828 12.8938L24.4731 12.8938L19.6014 18.1991C18.9294 18.9308 18.9294 20.0285 19.6014 20.7603C20.2733 21.492 21.2813 21.492 21.9532 20.7603L29.6808 12.3449C30.3528 11.6132 30.3528 10.5155 29.6808 9.78375L21.9532 1.36843C21.2813 0.636666 20.2733 0.636666 19.6014 1.36843C18.9294 2.1002 18.9294 3.19785 19.6014 3.92962L24.4731 9.23493L2.29828 9.23493C1.45833 9.23493 0.618371 9.96669 0.618371 11.0643C0.618371 12.162 1.45833 12.8938 2.29828 12.8938Z"
                                fill="#006BFF" />
                        </svg>
                        </button>
                    </div>
            </section>
        </>
    )
}

export default CasesSucesso