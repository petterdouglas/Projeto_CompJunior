import { Link } from "react-router-dom"

//estilos
import './ButtonAbout.css'

const ButtonAbout = ({ bannerHash }) => {

    return (
        <Link to={`/Projeto_CompJunior/about/${bannerHash}/`} onClick={() => handleBannerHash(bannerHash)} className="saber_mais">Saber mais</Link>
    )
}

export default ButtonAbout