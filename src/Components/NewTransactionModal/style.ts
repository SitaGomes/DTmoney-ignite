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
        border: 1px solid #d7d7d7;
        padding: 1.5rem 1.25rem;
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