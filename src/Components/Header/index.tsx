import React from 'react'
import Logo from 'Assets/SVG/logo.svg'

import { Container, Content } from 'Components/Header/style'

import { HeaderProps } from 'Interfaces'

export const Header: React.FC <HeaderProps> = ({onOpenNewTransaction}) => {
    return (
        <Container>

            <Content>
                <img src={Logo} alt="dt money" />

                <button type="button" onClick={onOpenNewTransaction}>
                    Nova Transação
                </button>

            </Content>

        </Container>
    )
}
