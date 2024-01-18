import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import PokeCard from './PokeCard'

const PokeList = ( { id, name, pokeImg }) => {
  const [cardOpen, isCardOpen] = useState(false)

  const openCard = () => {
    isCardOpen(true)
  }
  const closeCard = () => {
    isCardOpen(false);
  };

  return (
    <TouchableOpacity onPress={openCard}>
      <View style={styles.container} >
        <Text style={styles.textStyle}>{id}</Text>
        <Image source={{uri: pokeImg}} style={styles.img}/>
        <Text style={styles.textStyle}>{name.toLocaleString('en')}</Text>

        { cardOpen && <PokeCard name={name} onClose={closeCard} /> }

      </View> 
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 12,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'blue',
    color: '#fff',
    padding: 4,
    margin: 8,
    hadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  img: {
    width: 100,
    height: 100,
    // backgroundColor: 'red',
    resizeMode: 'contain',
    margin: 4
  },
  textStyle:{
    color: 'white',
    fontSize: 20,
  },
})

export default PokeList