import React, { useState } from 'react'
import { 
    Container,
    InputArea,
    CustomButtom,
    CustomButtomText,
    SingMessageButtom,
    SingMessageButtomText,
    SingMessageButtomTextBold, 
} from './styles'

import SingInput from '../../components/common/SignInput'

import BarberLogo from '../../assets/barber.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'

export default () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return(
        <Container>
            <BarberLogo width="100%" height="160"></BarberLogo>

            <InputArea>
                <SingInput 
                    Icon={EmailIcon} 
                    placeholder="Digite seu e-mail" 
                    valeu={email} 
                    onChangeText={t => setEmail(t)}
                />
                
                <SingInput 
                    Icon={LockIcon} 
                    placeholder="Digite sua senha" 
                    valeu={password} 
                    onChangeText={t => setPassword(t)} 
                    password={true}
                />

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