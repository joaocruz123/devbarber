import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
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
import PersonIcon from '../../assets/person.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'

export default () =>{

    const navigation = useNavigation()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleMenssageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SingIn'}]
        })
    }

    const handleSingUp = () => {

    }
    
    return(
        <Container>
            <BarberLogo width="100%" height="160"></BarberLogo>

            <InputArea>
                <SingInput 
                    Icon={PersonIcon} 
                    placeholder="Digite seu nome" 
                    valeu={name} 
                    onChangeText={t => setName(t)}
                />

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

                <CustomButtom onPress={handleSingUp}>
                    <CustomButtomText>Cadastrar</CustomButtomText>
                </CustomButtom>
            </InputArea>

            <SingMessageButtom onPress={handleMenssageButtonClick}>
                <SingMessageButtomText>Já possui uma conta?</SingMessageButtomText>
                <SingMessageButtomTextBold>Faça o login</SingMessageButtomTextBold>
            </SingMessageButtom>
        </Container>
    )
}