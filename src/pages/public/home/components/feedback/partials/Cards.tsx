import { CardsFeedComp } from "../../../../../../styled";
import { CardsFeedProps } from "../../../../../../types";

export default function CardsFeed({icon, description, name, author}: CardsFeedProps){
    return (
        <CardsFeedComp>
            <div className="container">
                <div className="auto-grid">
                    <div className="column-desktop-6 column-mobile-2"></div>
                    <div className="column-desktop-6 column-mobile-2 img-container">
                        <img src={icon} alt="" />
                    </div>
                    <div className="column-desktop-7 column-mobile-3">
                        <img src="src/assets/img/home/cards/quote.png" alt="" />
                        <p className="description">{description}</p>
                        <p className="name">{name}</p>
                        <p className="author">{author}</p>
                    </div>
                </div>
            </div>
        </CardsFeedComp>
    )
}