import { FooterComp } from "../styled";
import json from "./data/items-foter.json"

export default function Footer() {

    return (
        <FooterComp>
            <div className="auto-grid">
                <div className="column-desktop-2 column-mobile-2">
                    <ul>Institucional</ul>
                    {json.itemsInst.map((itemObj, i) => (
                        <li key={i}>{itemObj.item}</li>
                    ))}
                </div>
                <div className="column-desktop-2 column-mobile-2">
                    <ul>Blog Porto</ul>
                    {json.itemsBlog.map((itemObj, i) => (
                        <li key={i}>{itemObj.item}</li>
                    ))}
                </div>
                <div className="column-desktop-2 column-mobile-2">
                    <ul>Porto e Você</ul>
                    {json.itemsForYou.map((itemObj, i) => (
                        <li key={i}>{itemObj.item}</li>
                    ))}
                </div>
                <div className="column-desktop-6 no-mobile">
                    <img src="src/assets/img/footer/logo-white.png" alt="Logo AutoCheckup" />
                    <p>Acompanhe a Porto nas redes sociais</p>
                    <div className="container-social-icons">
                        {json.iconsSocial.map((itemObj) =>
                            <img src={itemObj.src} alt={itemObj.alt} />
                        )}
                    </div>
                    <div className="container-shops">
                    <p>Baixe o app da porto</p>
                        {json.dowload.map((itemObj) =>
                            <img src={itemObj.src} alt={itemObj.alt} />
                        )}
                    </div>
                </div>
                <div className="column-desktop-12 column-mobile-4 below">
                    <p>Privacidade</p>
                    <p>Procon</p>
                </div>
            </div>
        </FooterComp>
    )
}