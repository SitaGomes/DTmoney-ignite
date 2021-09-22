import React from 'react'
import { Container } from 'Components/Summary/style'

import Income from 'Assets/SVG/income.svg'
import Outcome from 'Assets/SVG/outcome.svg'
import Total from 'Assets/SVG/total.svg'

export const Summary: React.FC = () => {
    return (
        
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={Income} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={Outcome} alt="Saídas" />
                </header>
                <strong>R$250,00</strong>
            </div>
            
            <div>
                <header>
                    <p>Total</p>
                    <img src={Total} alt="Saídas" />
                </header>
                <strong>R$250,00</strong>
            </div>

        </Container>
    )
}
