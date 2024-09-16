import { FeaturesComp } from "../../../../styled";

export default function Features() {
    return (
        <FeaturesComp>
            <div className="auto-grid">
                <div className="column-desktop-12 column-mobile-4 section-title">
                    <h2>Funcionalidades</h2>
                    <p>Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstumvLorem ipstumvv Lorem ipstumvLorem ipstumvv</p>
                </div>
            </div>
            <div className="container">
                <div className="auto-grid">
                    <div className="column-desktop-6 column-mobile-4 text-container">
                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Elementum odio proin consectetur a velit tortor adipiscing turpis morbi. Auctor viverra luctus neque quam. Faucibus erat risus morbi eleifend malesuada eget nisl est. Sagittis nunc mauris malesuada et.</p>
                    </div>
                    <div className="column-desktop-6 no-mobile">
                        <img
                            src="src/assets/img/home/features.png" alt=""
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </FeaturesComp>
    )
}