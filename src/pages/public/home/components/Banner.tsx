import { BannerComp } from "../../../../styled";

export default function Banner() {
    return (
        <BannerComp>
            <div className="container">
                <div className="auto-grid">
                    <div className="column-desktop-6 column-mobile-4 text-container">
                        <h1>Cuide do seu automóvel <span>com praticidade.</span></h1>
                        <p>Facilite sua vida com o ganho de tempo em descobrir problemas em seu veículo.</p>
                        <button className="btn-banner">Comece agora!</button>
                    </div>
                    <div className="column-desktop-6 column-mobile-4">
                        <img 
                            src="src/assets/img/home/banner.png" alt="" 
                        />
                    </div>
                </div>
            </div>
        </BannerComp>
    )
}