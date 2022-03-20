import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";

const NewPokemon = ({ onPress, loading }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity disabled={!loading} onPress={onPress} style={styles.button}>
                {!loading ?
                    <Text style={styles.text}>Searching Pokemon <ActivityIndicator size="small" color="white" /></Text> :
                    <Text style={styles.text}>New Pokemon</Text>}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10
    },
    button: {
        backgroundColor: "black",
        padding: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
        elevation: 10
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "800",
        fontFamily: "Poppins-Bold"
    }
});

export default NewPokemon;