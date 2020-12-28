import React from 'react'
import { 
    Container,
    InputArea,
    CustomButtom,
    CustomButtomText,
    SingMessageButtom,
    SingMessageButtomText,
    SingMessageButtomTextBold, 
} from './styles'

import BarberLogo from '../../assets/barber.svg'

export default () =>{
    return(
        <Container>
            <BarberLogo width="100%" height="160"></BarberLogo>

            <InputArea>
                {/* <SingInput/>
                <SingInput/> */}

                <CustomButtom>
                    <CustomButtomText>Login</CustomButtomText>
                </CustomButtom>
            </InputArea>

            <SingMessageButtom>
                <SingMessageButtomText>Ainda não possui uma conta?</SingMessageButtomText>
                <SingMessageButtomTextBold>Cadastre-se</SingMessageButtomTextBold>
            </SingMessageButtom>
        </Container>
    )
}