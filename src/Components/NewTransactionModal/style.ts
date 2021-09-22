import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.form`

    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        background-color: var(--background-input);
        
        padding: 1.5rem 1.25rem;

        border: 1px solid #d7d7d7;
        border-radius: var(--border-radius);

        font-size: 1rem;
        font-weight: 400;

        & + input {
            margin-top: 1rem;
        }

        &::placeholder {
            color: var(--text-body)
        }
    }

    button[type="submit"] {
        height: 4rem;
        width: 100%;

        margin-top: 1.5rem;

        padding: 0 1.5rem;

        border: none;
        border-radius: var(--border-radius);

        color: #FFF;
        background: var(--green);

        font-size: 1rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }
    }

`

export const TransactionCategoryContainer = styled.div`
    margin: 1rem 0;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;

    
    button {
        background: transparent;

        border: none;
        border: 1px solid #d7d7d7;
        border-radius: var(--border-radius);

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 1.5rem 0;

        gap: 0.75rem;

        img {
            width: 1.75rem;
        }

        span {
            font-weight: 400;
            font-size: 1rem;
            color: var(--text-title)
        }

        transition: border-color 0.2s;

        &:hover {
            border-color: ${darken(0.2, '#d7d7d7')}
        }
    }


`
