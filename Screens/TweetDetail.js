import { View, Text, SafeAreaView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useRoute, useNavigation} from '@react-navigation/native'

const TweetDetail = () => {

    const navigation = useNavigation()
    const route = useRoute() 
    const {params} = route

    // If u want the persons name to be at the header
    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerTitle: params.user.item.name
    //     })
    // }, [])
    
    return (
        <SafeAreaView>
            <View>
                <Text>{params.user.item.email}</Text>
            </View>
        </SafeAreaView>

    )
}

export default TweetDetail