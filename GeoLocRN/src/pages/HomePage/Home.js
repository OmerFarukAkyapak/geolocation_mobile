import React from 'react'
import { View, Text, Button } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Home</Text>
            <Button title='Back' onPress={() => navigation.goBack()} />
        </View>
    )
}

export default Home