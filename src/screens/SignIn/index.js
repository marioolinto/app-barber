/* eslint-disable prettier/prettier */
import React from  'react';
import { Container, InputArea, CustomButton, CustomButtonText, SignMessageButton, SignMessageButtonText,
    SignMessageButtonTextBold } from './style';

import BarberLogo from '../../assets/barber.svg';

import SignInput from '../../components/SignInput';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
    return (
        <Container>
            <BarberLogo width="100%" height="160"/>

            <InputArea>
                <SignInput
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                />
                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                />

                <CustomButton>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>

                <SignMessageButton>
                    <SignMessageButtonText>Não possui um cadastro ainda?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
                </SignMessageButton>
            </InputArea>
        </Container>
    );
};
