import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --background: #F0F2F5;
        --text-tittle: #363F5F;
        --text-body: #969CB3;

        --red: #E62E4D;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --green: #33CC95;

        --shape: #FFFFFF;
    }

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html {
        /*
            ? Para melhorar a acessibilidade, variando as fontes consoante o usuario

            * font-size normal: 16px
         */ 
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; //Fontes mais nítidas
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

` 