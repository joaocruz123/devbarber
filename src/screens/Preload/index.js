import React, { useEffect } from 'react'
import { Container, LoadingIcon } from './styles'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'

import BarberLogo from '../../assets/barber.svg'

export default () =>{
    const navigation = useNavigation()

    useEffect(() =>{      
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');

            if(token){
                //Validar token
            }else{
                navigation.navigate('SingIn')
            }
        }
        checkToken();
    }, []);

    return(
        <Container>
            <BarberLogo width="100%" height="160"></BarberLogo>
            <LoadingIcon size="large" color="#FFF"></LoadingIcon>
        </Container>
    )
}