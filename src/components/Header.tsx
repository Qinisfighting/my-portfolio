import { useState, useEffect, useRef } from "react"
import { Link, NavLink } from "react-router-dom"
import menu from "../../src/assets/menu.png"
import back from "../../src/assets/back.png"
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
    backgroundColor: string;
    borderRadius: string
}
 //to shut up typescript error warning
interface PendingStyles {
    borderTop: string;
    borderBottom: string;
    width:string;
}

interface langProps {
    isGerman: boolean;
    toggleGerman: () => void

}

const Header: React.FC<langProps> = ({isGerman, toggleGerman}) => {
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
        backgroundColor: "rgba(223, 201, 161, 0.973)" ,
        borderRadius: "5px" 
    }

   
    const pendingStyles: PendingStyles = { 
        borderTop: "",
        borderBottom: "",
        width:"",

    }

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if(menuRef.current != null && !menuRef.current.contains(e.target as Node)){
            setIsMenu(false)
          //  console.log(menuRef.current);
         }  
        }

        document.addEventListener("mousedown", handler)

        return
        () => {
            document.removeEventListener("mousedown", handler)
        }

    })

    
            


    return (
        <header ref={menuRef}>
            <Link to='/' className="site-logo">{isGerman?"Moin! Ich bin Qin":"Hey! I am Qin"}<span className="qin"> /'tʃɪn/. </span>
  </Link>
  
            <button  className="lang" onClick={toggleGerman}>{isGerman?"EN":"DE"}</button> 
            
             <img src={menu} alt="menu" className="menu" onClick={()=>setIsMenu(true)}/>
          
        
            
           {isMenu ?
            <div className="menuNav"  ref={menuRef}>
                
                <NavLink to='/' style={({isActive, isPending}: {isActive: boolean; isPending: boolean}) => isActive && !isPending ? activeStylesMenu : pendingStyles}>
                   HOME <img src={home} alt="home" width="18px" />
                </NavLink> 
                <NavLink to='about' style={({isActive, isPending}: {isActive: boolean; isPending: boolean}) => isActive && !isPending ? activeStylesMenu : pendingStyles}>
                {isGerman?"ÜBER MICH":"ABOUT ME"} <img src={smile} alt="smile" width="18px" />
                </NavLink>
                <NavLink to='works' style={({isActive, isPending}: {isActive: boolean; isPending: boolean}) => isActive && !isPending ? activeStylesMenu : pendingStyles}>
                {isGerman?"PROJEKT":"PROJECT"} <img src={project} alt="project" width="18px" />
                </NavLink>   
                <NavLink to='contact' className="login-link" style={({isActive, isPending}: {isActive: boolean; isPending: boolean}) => isActive && !isPending ? activeStylesMenu : pendingStyles}>
                {isGerman?"KONTAKT":"CONTACT"} <img src={mail} alt="mail" width="18px" />
                </NavLink>   
                <img src={back} alt="back" className="back" onClick={()=>setIsMenu(!isMenu)}/>
            </div>
           :
            <nav>
                <NavLink to='/' style={({isActive, isPending}: {isActive: boolean; isPending: boolean}) => isActive && !isPending ? activeStyles : pendingStyles}>
                   HOME
                </NavLink>
                <NavLink to='about' style={({isActive, isPending}: {isActive: boolean; isPending: boolean}) => isActive && !isPending ? activeStyles : pendingStyles}>
                {isGerman?"ÜBER MICH":"ABOUT ME"}
                </NavLink>
                <NavLink to='works' style={({isActive, isPending}: {isActive: boolean; isPending: boolean}) => isActive && !isPending ? activeStyles : pendingStyles}>
                {isGerman?"PROJEKT":"PROJECT"}
                </NavLink>   
                <NavLink to='contact' className="login-link" style={({isActive, isPending}: {isActive: boolean; isPending: boolean}) => isActive && !isPending ? activeStyles : pendingStyles}>
                {isGerman?"KONTAKT":"CONTACT"}
                </NavLink>    
            </nav>
        } 
        </header>
    )

}


export default Header 