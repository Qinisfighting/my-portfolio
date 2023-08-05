import { useState, useEffect, useRef  } from "react"
import { Link, NavLink } from "react-router-dom"
import menu from "../../src/assets/menu.png"
import home from "../../src/assets/home.png"
import smile from "../../src/assets/smile.png"
import project from "../../src/assets/project.png"
import mail from "../../src/assets/mail.png"

interface ActiveStyles {
    border: string;
    borderRadius: string | number;
    boxShadow:string;
}

interface ActiveStylesMenu {
    borderTop: string;
    borderBottom: string;
    width:string;
}

interface PendingStyles {
    borderTop: string;
    borderBottom: string;
    width:string;
}


export default function Header() {
    const [isMenu, setIsMenu] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    

    const activeStyles: ActiveStyles = {
        border: "1px dotted #A49E9E",
        borderRadius: 50,
        boxShadow: "1px 1px 2px gray",
    }

    const activeStylesMenu: ActiveStylesMenu = {
        borderTop: "2px dotted white",
        borderBottom: "2px dotted white",
        width:"100%",     
    }

    //to shut up typescript error
    const pendingStyles: PendingStyles = { 
        borderTop: "",
        borderBottom: "",
        width:"",

    }

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if(menuRef.current != null && !menuRef.current.contains(e.target as Node)){
            setIsMenu(false)
            console.log(menuRef.current);
         }  
        }

        document.addEventListener("mousedown", handler)

        return
        () => {
            document.removeEventListener("mousedown", handler)
        }

    })




    return (
        <header>
            <Link to='/' className="site-logo">Moin! Ich bin Qin<span className="qin"> /'tʃɪn/. </span>
  </Link>
            <button className="lang">EN</button> 
            <img src={menu} alt="menu" className="menu" onClick={()=>setIsMenu(prev=>!prev)}/>
           {isMenu ?
            <div className="menuNav" ref={menuRef}>
                <NavLink to='/' style={({isActive, isPending}: {isActive: boolean; isPending: boolean}) => isActive && !isPending ? activeStylesMenu : pendingStyles}>
                   HOME <img src={home} alt="home" width="18px" />
                </NavLink> 
                <NavLink to='about' style={({isActive, isPending}: {isActive: boolean; isPending: boolean}) => isActive && !isPending ? activeStylesMenu : pendingStyles}>
                  ICH <img src={smile} alt="smile" width="18px" />
                </NavLink>
                <NavLink to='works' style={({isActive, isPending}: {isActive: boolean; isPending: boolean}) => isActive && !isPending ? activeStylesMenu : pendingStyles}>
                   PROJEKT <img src={project} alt="project" width="18px" />
                </NavLink>   
                <NavLink to='contact' className="login-link" style={({isActive, isPending}: {isActive: boolean; isPending: boolean}) => isActive && !isPending ? activeStylesMenu : pendingStyles}>
                   KONTAKT <img src={mail} alt="mail" width="18px" />
                </NavLink>    
            </div>
           :
            <nav>
                <NavLink to='/' style={({isActive, isPending}: {isActive: boolean; isPending: boolean}) => isActive && !isPending ? activeStyles : pendingStyles}>
                   HOME
                </NavLink>
                <NavLink to='about' style={({isActive, isPending}: {isActive: boolean; isPending: boolean}) => isActive && !isPending ? activeStyles : pendingStyles}>
                    ICH
                </NavLink>
                <NavLink to='works' style={({isActive, isPending}: {isActive: boolean; isPending: boolean}) => isActive && !isPending ? activeStyles : pendingStyles}>
                   PROJEKT
                </NavLink>   
                <NavLink to='contact' className="login-link" style={({isActive, isPending}: {isActive: boolean; isPending: boolean}) => isActive && !isPending ? activeStyles : pendingStyles}>
                   KONTAKT
                </NavLink>    
            </nav>
        } 
        </header>
    )

}