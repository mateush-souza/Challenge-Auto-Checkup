import { ProblemsComp } from "../../../../styled";

import infos from "./data/data.json"

export default function Problems() {
    return (
        <ProblemsComp>
            <section className="container-section-image">
            <div className="auto-grid">
                <div className="column-desktop-6 no-mobile">
                    <img
                        src="src/assets/img/home/problems-car.png"
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div className="column-desktop-6 column-mobile-4 text-container">
                    <h2>Com o AutoCheckup, realize o auto diagnósticos do seu veículo para garantir o seu melhor desempenho</h2>
                    {infos.problemsItems.map((itemObj) => (
                        <div className="container-items">
                            <h3>{itemObj.title}</h3>
                            <p>{itemObj.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            </section>
            <section className="warnings-container">
                <div className="auto-grid">
                    {infos.cards.map((itemObj) => (
                        <div className="column-desktop-4 column-mobile-4 items-container">
                            <img src={itemObj.image} alt=""/>
                            <h3>{itemObj.title}</h3>
                            <p>{itemObj.description}</p>
                        </div>
                    ))}
                </div>
            </section>

        </ProblemsComp>
    )
}