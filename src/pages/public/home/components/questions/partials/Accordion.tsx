import { AccordionComp } from "../../../../../../styled";
import { AccordionProps } from "../../../../../../types";

export default function Accordion({title}: AccordionProps){
    return(
        <AccordionComp>
            <div className="auto-grid">
                <div className="column-desktop-12 column-mobile-4">
                    <div className="container">
                        <h3>{title}</h3>
                        <img 
                            src="src/assets/img/home/arrow.png" alt=""
                            loading="lazy" 
                        />
                    </div>
                </div>
            </div>
        </AccordionComp>
    )
}