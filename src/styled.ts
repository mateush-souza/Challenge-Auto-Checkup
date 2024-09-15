import styled from "styled-components";

export const MenuComp = styled.header`
    opacity: 1;
    box-shadow: 0px 1px 10px 0px #0000001A;
    position: fixed;
    width: 100%;
    height: auto;
    padding: 25px 38px;


    .auto-grid {
        :nth-child(2){
            align-self: center;
        }

        :nth-child(3){
            display: flex;
            justify-content: end;
        }
    }

    img {
        width: 100%;
        height: auto;
    }

    .menu-container {
        display: flex;
        font-weight: 600;
        justify-content: space-around;

        .nav-item {
            min-height: 30px;
        }

        .nav-item:hover {
            cursor: pointer;
            border-bottom: 3px solid #019FF9;
        }
    }
    .button {
        width: 160px;
        height: 40px;
        background: none;
        border: 1px solid #019FF9;
        border-radius: 25px;
        color: #019FF9;
        cursor: pointer;
    }

    .button:hover {
        transition: ease-in-out 1s;
        background: #019FF9;
        color: white;
    }
`
export const FooterComp = styled.footer`
    font-size: 16px;
    background-color: #0046C0;
    color: white;
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: 400px;

    .auto-grid {
        justify-items: center;
        padding: 24px;

        ul {
            font-weight: 700;
        }

        li {
            font-weight: 400;
        }

        .container-social-icons {
          img{
            margin-right: 18px;
          } 
        }
        .container-shops {
            margin-top: 44px;

            img {
                cursor: pointer;
                margin-right: 17px;
            }
        }

        .below {
            margin-top: 30px;
            display: flex;
            width: 100%;
            border-top: 1px solid white;

            p {
                margin-right: 150px;
            }
        }
    }

    @media (max-width: 500px) {
        .auto-grid {
            .below {
                p {
                    margin-right: 20px;
                }
            }
        }
    }
    
`

//Estilização dos components da Home
export const BannerComp = styled.section`
    padding: 20px;
`