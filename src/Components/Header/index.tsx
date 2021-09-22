import React from 'react'

import Logo from 'Assets/SVG/logo.svg'

import { Container, Content } from 'Components/Header/style'

export const Header: React.FC = () => {
    
    return (
        <Container>

            <Content>
                <img src={Logo} alt="dt money" />

                <button type="button">
                    Nova Transação
                </button>
            </Content>

        </Container>
    )
}
