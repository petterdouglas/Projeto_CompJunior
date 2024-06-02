import { Link } from "react-router-dom"

//estilos
import './ButtonAbout.css'

const ButtonAbout = ({ bannerHash }) => {

    return (
        <Link to={`/about/${bannerHash}/#inicio`} className="saber_mais">Saber mais</Link>
    )
}

export default ButtonAbout