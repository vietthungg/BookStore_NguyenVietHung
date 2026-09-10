import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Entypo from '@expo/vector-icons/Entypo';

const Header = () => {
  return (
    <View style={styles.container}>
        <View>
            <Image 
                source={require('T:\BookStore\BookStore\img\images.png')}
            />
        </View>
        <View style={styles.left}>
            
            <FontAwesome name="search" size={24} color="black" />
            <input style={{border : '3px solid gray', height: '20px'}} type="text" name="" id="" />
            <Entypo name="shopping-cart" size={24} color="black" />
        </View>
    </View>
  )
}

const styles =StyleSheet.create({
    container:{
        width: 390,
        // backgroundColor: "blue",
        flexDirection : 'row',
        justifyContent: 'space-between',
        height: 56,
        padding: 10
    },
    left:{
        flexDirection : 'row',
        gap: 20,
    }
})


export default Header