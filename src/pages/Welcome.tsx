import React from 'react';
import { Container, Text, Text14 } from '../../styles';
import { Image, TouchableOpacity } from 'react-native';

import wateringImg from '../assets/watering.png'

export default function Welcome(){
  return(
    <Container>
      <Text>Gerencie suas plantas de forma fácil</Text>
    
      <Image source={wateringImg} />

      <Text14>Não esqueça de regar suas plantas</Text14>

      <TouchableOpacity>
        <Text14>
          a
        </Text14>
      </TouchableOpacity>
    </Container>
  )
}