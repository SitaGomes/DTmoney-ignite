import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1120px;

    margin: 4rem auto;

    table { 
        width: 100%;
        border-spacing: 0 0.5rem;
        
        th { 
            color: var(--text-body);
            font-weight: 400;
            text-align:left;
            padding: 1rem 2rem;

            line-height: 1.5rem;
        }

        td { 
            color: var(--text-body);
            padding: 1rem 2rem;
            background-color: var(--shape);

            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
            }

            &.withdraw {
                color: var(--red);
            }

            &.deposit {
                color: var(--green);
            }
        }

    }
`