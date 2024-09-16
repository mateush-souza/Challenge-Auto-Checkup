import { CardsMembersComp } from "../../../../styled";
import { MembersCardsProps } from "../../../../types";

export default function CardsMembers({img, name, rm, link}: MembersCardsProps){
    return(
    <CardsMembersComp>
    <div className="container">
                <img src={img} alt="" />
                <a href={link}>
                <h3 className="name">{name}</h3>
                <p className="rm">RM{rm}</p>
                </a>
    </div>
    </CardsMembersComp>
    )
}