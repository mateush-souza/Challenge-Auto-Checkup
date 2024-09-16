import { useNavigate } from "react-router-dom";
import { MenuComp } from "../styled";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Menu(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

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
                <div className="mobile-menu-toggle">
                    {isMobileMenuOpen ? (
                        <FaTimes className="icon" onClick={toggleMobileMenu} />
                    ) : (
                        <FaBars className="icon" onClick={toggleMobileMenu} />
                    )}
                </div>
                {isMobileMenuOpen && (
                    <div className="mobile-menu">
                        <ul>
                            <li className="nav-item" onClick={HomeRoutes}>Home</li>
                            <li className="nav-item">Diagnostico</li>
                            <li className="nav-item" onClick={MemberRoutes}>Participantes</li>
                            <li className="nav-item">
                                <button className="button" onClick={LoginRoutes}>Àrea do Cliente</button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </MenuComp>
    )
}