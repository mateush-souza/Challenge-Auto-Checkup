import styled from "styled-components";

export const MenuComp = styled.header`
    opacity: 1;
    box-shadow: 0px 1px 10px 0px #0000001A;
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
    width: 100%;
    color: #019FF9;
    height: auto;
    padding: 20px;
    .container {
        background-color: #F3F3F3;
        border-radius: 25px;

        .auto-grid {
            .text-container {
                padding: 0 40px;
                display: flex;
                flex-direction: column;
                justify-content: center;

                h1 {
                    font-weight: 500;
                    font-size: 50px;
                    max-width: 470px;
                }
                span {
                    font-weight: 600;
                }
                p {
                    margin-top: 20px;
                    font-size: 18px;
                    max-width: 320px;
                }

                .btn-banner {
                    cursor: pointer;
                    margin-top: 20px;
                    max-width: 218px;
                    height: 60px;
                    border: none;
                    border-radius: 25px;
                    background-color: #019FF9;
                    color: white;
                }

                .btn-banner:hover {
                    transition: ease-in-out 1s;
                    box-shadow: 5px 5px #019FF9;
                    background: none;
                    color: #019FF9;
                    border: 1px solid #019FF9;
                }
            }
            img {
                width: 100%;
                max-height: 584px;
            }
        }
    }

    @media (max-width: 1100px) {
        .container {
            .auto-grid {
                .text-container {
                    order: 2;
                    
                    h1 {
                        font-size: 22px;
                    }
                    .btn-banner {
                        margin-bottom: 24px;
                    }
                }
            }
        }
    }
`