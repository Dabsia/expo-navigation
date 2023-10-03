import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Feed from '../../Screens/Feed'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Settings from '../../Screens/Settings'
import Notifications from '../../Screens/Notifications'
import { Ionicons } from '@expo/vector-icons'
import TweetDetail from '../../Screens/TweetDetail'

// Tab Bottom
const Tab = createBottomTabNavigator()


const TabGroup = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName;
                    if (route.name === 'HomeStackGroup') {
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    else if (route.name === 'Notifications') {
                        iconName = focused ? 'notifications' : 'notifications-outline'
                    }
                    else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'ios-settings-sharp'
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: '#1da1f2',
                tabBarInactiveTintColor: 'gray'

            })}

        >
            <Tab.Screen name='HomeStackGroup' component={HomeStackGroup} options ={{headerShown: false}} />
            <Tab.Screen name='Notifications' component={Notifications} />
            <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
    )
}

// stack Navigation

const HomeStack = createNativeStackNavigator()

const HomeStackGroup = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Feed' component={Feed} />
            <HomeStack.Screen name='TweetDetail' component={TweetDetail}  />
        </HomeStack.Navigator>
    )
}

const Navigation = () => {
    return (


        <NavigationContainer>
            <TabGroup />
        </NavigationContainer>

    )
}

export default Navigation