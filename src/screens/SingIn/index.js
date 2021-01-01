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

import config from '../../config'

import SingInput from '../../components/common/SignInput'

import BarberLogo from '../../assets/barber.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'

export default () =>{

    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleMenssageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SingUp'}]
        })
    }

    const handleSingIn = async () => {
        if(email != '' && password != ''){
            
            let json = await config.singIn(email, password);
            
            if(json.token){
                alert("Deu certo!")
            }else{
                alert("Email e/ou senha incorretos!")
            }

        }else{
            alert("Preencha os campos!")
        }

    }
    
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

                <CustomButtom onPress={handleSingIn}>
                    <CustomButtomText>Login</CustomButtomText>
                </CustomButtom>
            </InputArea>

            <SingMessageButtom onPress={handleMenssageButtonClick}>
                <SingMessageButtomText>Ainda não possui uma conta?</SingMessageButtomText>
                <SingMessageButtomTextBold>Cadastre-se</SingMessageButtomTextBold>
            </SingMessageButtom>
        </Container>
    )
}