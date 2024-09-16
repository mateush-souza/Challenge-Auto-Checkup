// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuComp } from "../styled";
// import { IoClose } from "react-icons/io5";
// import { FiMenu } from "react-icons/fi";

export default function Menu(){
    const navigate = useNavigate();

    const MemberRoutes = () => {
        navigate('/membros');
    }
    const HomeRoutes = () => {
        navigate('/');
    }
    const LoginRoutes = () => {
        navigate('/login');
    }
    // const [menuIsVisible, setMenuIsVisible] = useState(false);
    return(
        <MenuComp>
            <nav className="auto-grid">
                <div className="column-desktop-2 column-mobile-2">
                    <img 
                        src="src/assets/img/logo.png" 
                        alt="Logo autocheckup"
                        fetchPriority="high"    
                    />
                </div>
                <div className="column-desktop-6 no-mobile">
                    <ul className="menu-container">
                        <li className="nav-item" onClick={HomeRoutes}>Home</li>
                        <li className="nav-item">Diagnostico</li>
                        <li className="nav-item" onClick={MemberRoutes}>Participantes</li>
                    </ul>
                </div>
                <div className="column-desktop-4 no-mobile">
                    <button className="button" onClick={LoginRoutes}>Àrea do Cliente</button>
                </div>
                {/* <div className="column-mobile-2">
                    <div className="mobile-icon">
                    { menuIsVisible ? (
                        <IoClose size={30} onClick={() => setMenuIsVisible(false)}/>
                    ): (
                        <FiMenu size={30} onClick={() => setMenuIsVisible(true)}/>
                    )}
                    </div>
                </div> */}
            </nav>
            {/* <div className="column-mobile">
                    <ul className="menu-container">
                        <li className="nav-item">Home</li>
                        <li className="nav-item">Diagnostico</li>
                        <li className="nav-item">Participantes</li>
                    </ul>
                </div> */}
        </MenuComp>
    )
}