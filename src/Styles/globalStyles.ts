import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --background: #F0F2F5;
        --background-input: #E7E9EE;
        
        --text-title: #363F5F;
        --text-body: #969CB3;

        --red: #E62E4D;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --green: #33CC95;

        --shape: #FFFFFF;
        --border-radius: 0.25rem;
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

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif; 
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, strong {
        font-weight: 600;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        inset: 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-modal-content {
        max-width: 576px; 
        width: 100%;

        background: var(--shape);
        padding: 3rem;

        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        border: none;
        background: transparent;
        
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.7)
        }
    }

` 
