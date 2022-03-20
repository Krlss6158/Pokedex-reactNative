import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AppName = () => {
    return (
        <View style={styles.container}>
            <Text style={[{ color: "#000000" }, styles.text]}>POKE</Text><Text style={[{ color: "#fff" }, styles.text]}>DEX</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        fontFamily: "Poppins-Black",
    }
});

export default AppName;