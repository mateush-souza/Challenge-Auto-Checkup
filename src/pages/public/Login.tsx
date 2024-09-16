import { LoginComp } from "../../styled";

export default function Login(){
    return (
        <LoginComp>
            <div className="container">
                <div className="auto-grid">
                    <div className="column-desktop-12 column-mobile-4">
                        <form className="form-container">
                            <img 
                                src="src/assets/img/login/left-arrow.png" alt="" 
                            />
                            <h2>Acesso a conta</h2>
                            <p className="description">Preencha seus dados de acesso para continuar.</p>
                            <div className="form-items">
                            <input type="cpf" placeholder="CPF ou CNPJ"/>
                            <button type="submit">Entrar</button>
                            </div>
                            <p className="details">Preencha seus dados de acesso para continuar.</p>
                        </form>
                    </div>
                </div>
            </div>
        </LoginComp>
    )
}