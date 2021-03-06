import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 2rem;
    margin-top: -7.5rem;

    div{ 
        background: var(--shape);
        padding: 1.5rem 2rem;

        border-radius: var(--border-radius);

        color: var(--text-title);

        header {
            display: flex;
            justify-content: space-between;
        }

        strong{
            display: block;

            margin-top: 1rem;
            font-size: 2rem;
            line-height: 3rem;
            font-weight: 500;
        }
    }
    
    div:last-child { 
        background: var(--green);
        color: #FFF;
    }


`