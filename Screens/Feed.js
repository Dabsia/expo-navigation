import React, {useEffect, useState} from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native'
import Tweets from '../comonents/Tweets/Tweets'

const Feed = () => {
    const [users, setUsers] = useState([])

    const url = 'https://jsonplaceholder.typicode.com/users'

    const getUsers = async(url) => {
        const res = await fetch(url)
        const data = await res.json()
        setUsers(data)
    }

    useEffect(() => {
        getUsers(url)
    }, [url])

    return (
        <SafeAreaView>
        <View  >
           <FlatList 
            data={users}
            renderItem={user => <Tweets user = {user} />}
            keyExtractor={item => item.id}
      />
      </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100',
        width: '100%',
        flex: 1, backgroundColor: 'red'
    }
})


export default Feed