import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        list-style: none;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", Helvetica, sans-serif;
    }

    //Configuração de Grid para facilitar desenvolvimento responsivo
    .auto-grid {
        width: 100%;
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(12, 1fr);
    }

    .column-desktop-12 {
        grid-column: span 12;
    }
    .column-desktop-11 {
        grid-column: span 11;
    }
    .column-desktop-10 {
        grid-column: span 10;
    }
    .column-desktop-9 {
        grid-column: span 9;
    }
    .column-desktop-8 {
        grid-column: span 8;
    }
    .column-desktop-7 {
        grid-column: span 7;
    }
    .column-desktop-6 {
        grid-column: span 6;
    }
    .column-desktop-5 {
        grid-column: span 5;
    }
    .column-desktop-4 {
        grid-column: span 4;
    }
    .column-desktop-3 {
        grid-column: span 3;
    }
    .column-desktop-2 {
        grid-column: span 2;
    }

    @media (max-width: 1100px) {
        .auto-grid {
            grid-template-columns: repeat(4, 1fr);
        }
        .column-mobile-4 {
            grid-column: span 4;
        }
        .column-mobile-3 {
            grid-column: span 3;
        }
        .column-mobile-2 {
            grid-column: span 2;
        }
        .column-mobile-1 {
            grid-column: span 1;
        }
        .no-mobile {
            display: none !important;
        }
    }
`

export default GlobalStyle