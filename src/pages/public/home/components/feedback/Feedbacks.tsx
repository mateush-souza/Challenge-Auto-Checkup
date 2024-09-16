import { FeedbackComp } from "../../../../../styled";
import CardsFeed from "./partials/Cards";

import ManCard from "../../../../../assets/img/home/cards/man-card.png";
import WomanCard from "../../../../../assets/img/home/cards/woman-card.png";

export default function Feedbacks() {
    const Cards = [
        {
            icon: WomanCard,
            description: "Lorem ipsum dolor sit amet consectetur. Viverra mi id felis praesent.",
            name: "Lorem ipsum",
            author: "Lorem ipsum"
        },
        {
            icon: ManCard,
            description: "Lorem ipsum dolor sit amet consectetur. Viverra mi id felis praesent.",
            name: "Lorem ipsum",
            author: "Lorem ipsum"
        },
        {
            icon: WomanCard,
            description: "Lorem ipsum dolor sit amet consectetur. Viverra mi id felis praesent.",
            name: "Lorem ipsum",
            author: "Lorem ipsum"
        },
    ]
    return (
        <FeedbackComp>
            <div className="section-title">
            <div className="auto-grid">
                <div className="column-desktop-12 column-mobile-4">
                    <h2>Feedbacks dos usuários</h2>
                    <p>Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstumvLorem ipstumvv Lorem ipstumvLorem ipstumvv</p>
                </div>
            </div>
            </div>
            <div className="auto-grid">
                {Cards.map((card, i) => (
                    <div className="column-desktop-4 column-mobile-4">
                        <CardsFeed
                            key={i}
                            icon={card.icon}
                            description={card.description}
                            name={card.name}
                            author={card.author}
                        />
                    </div>
                ))}
            </div>
        </FeedbackComp>
    )
}