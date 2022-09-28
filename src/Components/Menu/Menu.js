import React, { useState } from 'react'
import { NavigatorMenu, LogoMenu, StyledMenu, Divisor } from '../../Styles/Navigator/Menu'
import { AuthenticationButton } from '../AuthenticationButton/AuthenticationButton'
import LogoImage from '../../Assets/Images/logo2.png'
import Burger from '../Burger/Burger'

export const Menu = () => {
    const [open, setOpen] = useState(false);
  return (
    <NavigatorMenu>
        <LogoMenu src={LogoImage} alt='Bookers Logo' />
        <Divisor></Divisor>
        <Divisor></Divisor>
        <Divisor></Divisor>
        <Burger open={open} setOpen={setOpen} />
        <ul>
            <li>
                <a href="https://bookers.club/" target={'_blank'} rel="noreferrer">Información</a>
            </li>
            <li>
                <a href="https://bookers.club/legal/" target={'_blank'} rel="noreferrer">Aviso Legal</a>
            </li>
            <li>
                <a href="https://bookers.club/#preguntas-frecuentes" target={'_blank'} rel="noreferrer">FAQs</a>
            </li>
            <li>
                <a href="https://opensea.io/collection/bookers-oficial" target={'_blank'} rel="noreferrer">Opensea </a>
            </li>
        </ul>
        <StyledMenu open={open}>
            <AuthenticationButton mobile />
            <a href="https://bookers.club/" target={'_blank'} rel="noreferrer">Información</a>

            <a href="https://bookers.club/legal/" target={'_blank'} rel="noreferrer">Aviso Legal</a>

            <a href="https://bookers.club/#preguntas-frecuentes" target={'_blank'} rel="noreferrer">FAQs</a>

            <a href="https://opensea.io/collection/bookers-oficial" target={'_blank'} rel="noreferrer">Opensea </a>

        </StyledMenu>
        <AuthenticationButton />
    </NavigatorMenu>
  )
}
