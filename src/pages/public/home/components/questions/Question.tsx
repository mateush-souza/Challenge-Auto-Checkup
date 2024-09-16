import { QuestionsComp } from "../../../../../styled";
import Accordion from "./partials/Accordion";

export default function Questions(){
    const AccordionData = [
        {
            title: "Lorem ipsum dolor sit amet dolor"
        },
        {
            title: "Lorem ipsum dolor sit amet dolor"
        },
        {
            title: "Lorem ipsum dolor sit amet dolor"
        },
        {
            title: "Lorem ipsum dolor sit amet dolor"
        },
        {
            title: "Lorem ipsum dolor sit amet dolor"
        },
        {
            title: "Lorem ipsum dolor sit amet dolor"
        },
        {
            title: "Lorem ipsum dolor sit amet dolor"
        },
        {
            title: "Lorem ipsum dolor sit amet dolor"
        },
    ]
    return (
        <QuestionsComp>
            <div className="auto-grid">
                <div className="column-desktop-12 column-mobile-4">
                    <h2 className="title">Tire suas dúvidas sobre a Auto <span>Seguro</span></h2>
                    <p className="description">Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstumvLorem ipstumvv Lorem ipstumvLorem ipstumvv</p>
                </div>
                {AccordionData.map((item, i) => (
                    <div className="column-desktop-6 column-mobile-4">
                        <Accordion
                            key={i}
                            title={item.title}
                        />
                    </div>
                ))}
            </div>
        </QuestionsComp>
    )
}