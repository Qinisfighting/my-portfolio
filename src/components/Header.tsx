import { Link, NavLink } from "react-router-dom"
import menu from "../../src/assets/menu.png"

interface ActiveStyles {
    border: string;
    borderRadius: string | number;
    boxShadow:string;
}

export default function Header() {

    const activeStyles: ActiveStyles = {
        border: "1px dotted #A49E9E",
        borderRadius: 50,
        boxShadow: "1px 1px 2px gray"
    }

    return (
        <header>
            <Link to='/' className="site-logo">Moin! Ich bin Qin <span className="qin">/'tʃɪn/. </span>
  </Link>
            <button className="lang">EN</button> 
            <img src={menu} alt="menu" className="menu"/>
            <nav>
                <NavLink to='/' style={({isActive}: {isActive: boolean}) => isActive ? activeStyles : null}>
                   HOME
                </NavLink>
                <NavLink to='about' style={({isActive}: {isActive: boolean}) => isActive ? activeStyles : null}>
                  ÜBER MICH
                </NavLink>
                <NavLink to='works' style={({isActive}: {isActive: boolean}) => isActive ? activeStyles : null}>
                   PROJEKTE
                </NavLink>   
                <NavLink to='contact' className="login-link" style={({isActive}: {isActive: boolean}) => isActive ? activeStyles : null}>
                   KONTAKT
                </NavLink>    
            </nav>
           
        </header>
    )

}