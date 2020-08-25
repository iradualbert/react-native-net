import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>To Do App</Text>
        </View>
    )
}



const styles =  StyleSheet.create({
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        marginRight: 0,
        fontSize: 50,
        padding: 10,
        backgroundColor: "lightblue",
        width: "100%"
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        textTransform: "uppercase"
    }
})