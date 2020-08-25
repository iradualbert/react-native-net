import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default function Item(props) {
    const {item, index, handleDelete} = props;
    return (
        <View style={styles.item}>
             <Text
               style={styles.text}
               key={item.id}>{`${index + 1}  -  ${item.name}`}</Text>
             <TouchableOpacity onPress={() => handleDelete(item.id)} ><Text style={styles.button}>X</Text></TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        display: "flex",
        flexDirection: "row",
        flexShrink: 1,
        alignItems: "center",
        justifyContent: "space-between",
        width: "95%",
        padding: 10,
        margin: 10,
        borderColor: "#bbb",
        borderStyle: "dashed",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#f7f7f7"
    },
    text: {
        fontSize: 20,
        width: "90%",
    },
    button: {
        color: "black",
        fontSize: 20,
        backgroundColor: "red",
        padding: 5,
        color: "white",
    }
})