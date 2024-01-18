import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'


const HomeScreen = ( {navigation} ) => {
  return (
    <SafeAreaView style={styles.container}>   
    
        <TouchableOpacity onPress={() => navigation.push('Gen1')}>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>GEN 1</Text>
            </View>
            
        </TouchableOpacity>  

        <TouchableOpacity onPress={() => navigation.push('Gen2')}>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>GEN 2</Text>
            </View>
        </TouchableOpacity>  

        <TouchableOpacity onPress={() => navigation.push('Gen1')}>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>GEN 3</Text>
            </View>
        </TouchableOpacity> 

        <TouchableOpacity onPress={() => navigation.push('Gen1')}>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>GEN 4</Text>
            </View>
        </TouchableOpacity> 

        <TouchableOpacity onPress={() => navigation.push('Gen1')}>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>GEN 5</Text>
            </View>
        </TouchableOpacity> 

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        flex: 1
    },
    textWrapper: {
        backgroundColor: '#fffacd',
        width: 100,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    text: {
        fontWeight: '700',
        fontSize: 20
    }
})
export default HomeScreen