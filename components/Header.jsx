import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({navigation}) => {
  return (
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
      
      <Image source={require('../assests/pokeball.png')} style={styles.pokeball} />
      <Image source={require('../assests/pokedexTitle.png')} style={styles.title}/>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create ({
    pokeball: {
      height: 50,
      width: 50,
      resizeMode: 'contain',
      // marginLeft: 12
    },
    title: {
      height: '100%',
      width: '50%',
      resizeMode: 'contain',
      // marginLeft: 52
    }
})

export default Header