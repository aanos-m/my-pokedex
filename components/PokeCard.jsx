import { View, Text, Modal, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, {useEffect, useState} from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import CardType from '../helpers/ColorTypes'

const PokeCard = ( { name, onClose } ) => {
  let capitalName = name[0].toUpperCase() + name.slice(1);

  const [perfAttributes, setPerfAttributes] = useState(0);
  const [pokemonData, setPokemonData] = useState([])
  const pokemonApi = 'https://pokeapi.co/api/v2/pokemon';


  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`${pokemonApi}/${name}`);
            const data = await response.json();
            setPokemonData(data);

            // Calculate cumulative base_stat
            const cumulativeBaseStat = data.stats.reduce(
              (accumulator, currentStat) => accumulator + currentStat.base_stat,
              0
            );
          
            setPerfAttributes(cumulativeBaseStat);
        } 
        catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
  }, [name])

  const speedRatio = (45 / perfAttributes) || 0; 
  return (
    <Modal transparent animationType="slide" >
      <TouchableOpacity style={styles.container}  activeOpacity={1} onPress={() => onClose()}>
        <View style={styles.modalContent}>

          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText} > {capitalName} </Text>
            <View style={styles.cardIdDisplay}>
              <Text style={styles.cardIdText} > 
              {pokemonData.id !== undefined &&
                (pokemonData.id.toString().length === 1
                  ? `00${pokemonData.id}`
                  : pokemonData.id.toString().length === 2
                  ? `0${pokemonData.id}`
                  : pokemonData.id)}
              </Text>
            </View>
          </View>

          { pokemonData.sprites && 
            <Image source={{uri: pokemonData.sprites.other["official-artwork"].front_default}} 
              style={{height: 200, width: 200, resizeMode: 'contain', backgroundColor: '#dcdcdc', borderRadius: 20, margin: 8}}
          /> }
          <View style={{display: 'flex', flexDirection: 'row', gap: 8, flexWrap: 'wrap'}}>
              {pokemonData.types && 
                (pokemonData.types.length > 1 ? (
                  pokemonData.types.map((type, index) => (
                    <View 
                    style={{
                      padding: 6,  
                      display: 'flex', 
                      alignItems: 'center',
                      justifyContent: 'center', 
                      borderRadius: 20, 
                      backgroundColor: CardType[type.type.name],
                      width: 80
                      }} key={index}>
                    <Text key={index} style={{fontSize: 14, fontWeight: '500'}}> {type.type.name} </Text>
                    </View>
                  ))
              ) : (
                <View 
                  style={{
                    padding: 6,  
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'center', 
                    borderRadius: 20,
                    backgroundColor: CardType[pokemonData.types[0].type.name],
                    width: 80
                    }}>
                <Text style={{fontSize: 14, fontWeight: '500'}}>{pokemonData.types[0].type.name}</Text>
                </View>
              ))}
          </View>

          <View style={styles.weightHeightOutterDisplay}> 
            <View style={styles.weightHeightInnerDisplay}>
                <Text style={styles.weightHeightText}> {pokemonData.weight} KG </Text>
                <Text > Weight </Text>
            </View>
            <View style={styles.weightHeightInnerDisplay}>
                <Text style={styles.weightHeightText}> {pokemonData.height} M </Text>
                <Text> Height </Text>
            </View>
          </View>

          <View style={styles.performanceWrapper}>

            <View style={styles.performanceTextContainer}>
              <MaterialIcons name="star-outline" size={24} color="black" />
              <Text style={{fontWeight: '500', fontSize: 16}}> Performance Attributes </Text>
              <MaterialIcons name="star-outline" size={24} color="black" />
            </View>
            <View style={styles.perfAttributesContainer}>

                <View style={styles.attributeContainer}>
                  <Text style={styles.attributeText}> HP{' '} </Text>
                    <Progress.Bar 
                        progress= {(pokemonData.stats && pokemonData.stats[0].base_stat / perfAttributes) || 0} 
                        width={null} 
                        height={20} 
                        borderRadius={20} 
                        borderColor='lightgrey'
                        color='green'              
                        unfilledColor='lightgrey'
                        style={{flex: 1}}>
                          <Text style={styles.progressBarText}> 
                            {pokemonData.stats && pokemonData.stats[0].base_stat} / {perfAttributes} 
                          </Text>
                    </Progress.Bar> 
                </View>

                <View style={styles.attributeContainer}>
                  <Text style={styles.attributeText}> ATK </Text>
                    <Progress.Bar 
                        progress= {(pokemonData.stats && pokemonData.stats[1].base_stat / perfAttributes) || 0} 
                        width={null} 
                        height={20} 
                        borderRadius={20} 
                        borderColor='lightgrey'
                        color='red'              
                        unfilledColor='lightgrey'
                        style={{flex: 1}}>
                          <Text style={styles.progressBarText}> 
                            {pokemonData.stats && pokemonData.stats[1].base_stat} / {perfAttributes} 
                          </Text>
                    </Progress.Bar> 
                </View>
                
                <View style={styles.attributeContainer}>
                  <Text style={styles.attributeText}> DEF </Text>
                    <Progress.Bar 
                        progress= {(pokemonData.stats && pokemonData.stats[2].base_stat / perfAttributes) || 0} 
                        width={null} 
                        height={20} 
                        borderRadius={20} 
                        borderColor='lightgrey'
                        color='#ff00ff'              
                        unfilledColor='lightgrey'
                        style={{flex: 1}}>
                          <Text style={styles.progressBarText}> 
                            {pokemonData.stats && pokemonData.stats[2].base_stat} / {perfAttributes} 
                          </Text>
                    </Progress.Bar> 
                </View>

                <View style={styles.attributeContainer}>
                  <Text style={styles.attributeText}> SPD </Text>
                    <Progress.Bar 
                        progress= {(pokemonData.stats && pokemonData.stats[5].base_stat / perfAttributes) || 0} 
                        width={null} 
                        height={20} 
                        borderRadius={20} 
                        borderColor='lightgrey'
                        color='#00bfff'              
                        unfilledColor='lightgrey'
                        style={{flex: 1}}>
                          <Text style={styles.progressBarText}> 
                            {pokemonData.stats && pokemonData.stats[5].base_stat} / {perfAttributes} 
                          </Text>
                    </Progress.Bar> 
                </View>

            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
  attributeText: {
    fontWeight: '600',
    marginRight: 8
  },  
  progressBarText: {
    position:'absolute',
    flex: 0, alignSelf: 'center', 
    top: 1,
    fontWeight: '500'
  },
  attributeContainer: {
    display: 'flex', flexDirection: 'row', 
    height: 20,
    marginTop: 8, 
    // justifyContent: 'flex-start', 
    alignItems: 'center'
  },
  perfAttributesContainer: {
    display: 'flex', 
    flexDirection: 'column'
  },
  performanceTextContainer: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  performanceWrapper: {
    marginTop: 8, 
    width: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
  },
  cardHeaderText: {
    fontSize: 20,  fontWeight: '600'
  },
  cardIdText: {
    fontSize: 18,  fontWeight: '600'
  },
  cardHeader: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    width: '100%',
  },
  weightHeightOutterDisplay: {
    width: '100%', 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  weightHeightInnerDisplay: {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 2
  },
  weightHeightText: {
    fontSize: 16,
    fontWeight: '600'
  },
});

export default PokeCard