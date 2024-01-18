import { View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import PokeList from '../components/PokeList'
import SearchBar from "react-native-dynamic-search-bar";
import Header from '../components/Header';


const GeneratePokemon = ( {num, navigation} ) => {
    const generationApi = `https://pokeapi.co/api/v2/generation/${num}`
    const pokemonApi = 'https://pokeapi.co/api/v2/pokemon';

    const [generation, setGeneration] = useState([])
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(generationApi);

                const data = await response.json();
                const pokemonSpecies = data.pokemon_species || [];

                const pokemonWithImages = await Promise.all(
                    pokemonSpecies.map(async (species) => {
                        const pokemonResponse = await fetch(`${pokemonApi}/${species.name}`);
                        const pokemonData = await pokemonResponse.json();
                        return {
                            name: species.name,
                            image: pokemonData.sprites.front_default,
                        };
                    })
                );
                setGeneration(pokemonWithImages);
            } 
            catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchData();
    }, [])

    const filteredPokemon = generation.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  return (
    <View style={styles.container}>     
        <Header navigation={navigation}/>
        <SearchBar
            placeholder="Search Pokemon"
            onChangeText={(text) => setSearchText(text)}
            onClearPress={(text) => setSearchText("")}
            value={searchText}
            style={{
                width: 'auto',
                marginTop: 8,
                marginBottom: 8
            }}
        />
        <ScrollView vertical showsVerticalScrollIndicator={false}>
            {filteredPokemon.map((pokemon, index) => (
                <PokeList key={index} id={index + 1} name={pokemon.name} pokeImg={pokemon.image}/>
            ))}
        </ScrollView>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        
    }
})
export default GeneratePokemon