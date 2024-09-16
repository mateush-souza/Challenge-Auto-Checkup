import { MembersComp } from "../../../styled";

import Cauan from "../../../assets/img/members/cauan.png"
import Mateus from "../../../assets/img/members/mateus.png"
import Lucas from "../../../assets/img/members/lucas.png"
import CardsMembers from "./partials/Cards";

const CardsMemb = [
    {
        img: Cauan,
        name: "Cauan Aranega S Passos",
        rm: 555466,
        link: "https://github.com/cashot01"
    },
    {
        img: Mateus,
        name: "Mateus Henrique de Souza",
        rm: 558424,
        link: "https://github.com/mateush-souza"
    },
    {
        img: Lucas,
        name: "Lucas de Assis Fialho",
        rm: 557884,
        link: "https://github.com/lxcaszz"
    }
]

export default function Members(){
    return(
        <MembersComp>
            <div className="auto-grid">
                <div className="column-desktop-12 column-mobile-4">
                    <h2 className="title">Participantes</h2>
                    <p className="description">Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstumvLorem ipstumvv Lorem ipstumvLorem ipstumvv</p>
                </div>
            </div>
            <div className="auto-grid border">
                {CardsMemb.map((card, i) => (
                    <div className="column-desktop-4 column-mobile-4">
                        <CardsMembers
                            key={i}
                            img={card.img}
                            name={card.name}
                            rm={card.rm}
                            link={card.link}
                        />
                    </div>
                ))}
            </div>
            <div className="auto-grid image-container">
                <div className="column-desktop-12 column-mobile-4">
                    <img src="src/assets/img/members/banner.png" alt="Banner com frase de intenção do grupo para com o projeto" />
                </div>
            </div>
        </MembersComp>
    )
}