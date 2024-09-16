import { ProblemsComp } from "../../../../styled";

export default function Problems(){
    const ProblemsItems = [
        {
            title: "Relate seu problema",
            description: "Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstumvLorem ipstumvv Lorem ipstumvvLorem ipstumLorem ipstum vLorem ipstum"
        },
        {
            title: "Realize o diagnóstico",
            description: "Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstumvLorem ipstumvv Lorem ipstumvvLorem ipstumLorem ipstum vLorem ipstum"
        },
        {
            title: "Orçe e realize o reparo",
            description: "Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstumvLorem ipstumvv Lorem ipstumvvLorem ipstumLorem ipstum vLorem ipstum"
        }
    ]
    
    return (
        <ProblemsComp>
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
                    {ProblemsItems.map((itemObj) => (
                        <div className="container-items">
                            <h3>{itemObj.title}</h3>
                            <p>{itemObj.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            
        </ProblemsComp>
    )
}