import React from "react";
import { Image, TouchableOpacity, Text, View, StyleSheet } from "react-native";

const Dropdown = ({ onPress, press, description }) => {


    return (
        <View style={{ marginLeft: 50, marginTop: 20 }}>
            <TouchableOpacity onPress={onPress}>
                <View style={{ flexDirection: "row", alignItems: "center", alignContent: "center" }}>
                    <Text style={styles.text}>{press ? 'Hide description' : 'Read description'}</Text>
                    <Image style={[{ width: 10, height: 10, marginLeft: 10 }, { transform: [{ rotate: press ? '180deg' : '0deg' }] }]} source={require("../../../assets/images/caret-down.png")} />
                </View>
            </TouchableOpacity>
            <View style={{ maxHeight: press ? null : 0, paddingRight: 50 }}>
                <Text>{description}</Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-SemiBold",
        color: "#2D2D2D",
        fontSize: 15
    }
});

export default Dropdown;