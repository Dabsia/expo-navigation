import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const Tweets = ({user}) => {
    const {navigate} = useNavigation()
    
    
  return (
    <Pressable
        onPress = {() => navigate('TweetDetail', {user})}
    >
    <View style = {styles.container} >
      <Text>{user.item.email}</Text>
      <Text>{user.item.name}</Text>
      <Text>{user.item.phone}</Text>
      <Text>{user.item.company.catchPhrase}</Text>
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        height: '100',
        width: '100%',
        backgroundColor: '#1da1f2',
        padding: 10,
        marginBottom: 10
    }
})

export default Tweets