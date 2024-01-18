import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import GeneratePokemon from '../helpers/GeneratePokemon'


const Gen2 = ({navigation}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <GeneratePokemon num={2} navigation={navigation}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Gen2