import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './SuppButton.style'

const SuppButton = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}> {text} </Text>
        </TouchableOpacity>
    )
}

export default SuppButton