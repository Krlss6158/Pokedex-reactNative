import React from "react";
import { StyleSheet, Animated, Easing } from "react-native";

const Pokeboll = () => {

    const spinValue = new Animated.Value(0);
    Animated.loop(
        Animated.spring(spinValue, {
            toValue: 1,
            friction: 1,
            easing: Easing.bounce,
            useNativeDriver: true,
        })
    ).start()

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <Animated.Image source={require('../../../assets/images/poke.png')} style={[style.image, { transform: [{ rotate: spin }] }]} />
    );
}


const style = StyleSheet.create({
    image: {
        width: "100%",
        height: "60%",
        justifyContent: "center"
    },
    container: {
        backgroundColor: "green"
    }
});

export default Pokeboll;
