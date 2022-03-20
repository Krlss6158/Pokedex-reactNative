import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import api from "../../services/api";

const EvolutionCard = ({ family }) => {

    const [evolution, setEvolution] = useState(null);

    useEffect(() => {

        async function getEvolutions() {
            try {
                const { data } = await api.get(`pokemon/${family}`);
                setEvolution(data[0]);
            } catch (error) { console.log("error getEvolutions: " + error); }
        }
        getEvolutions();
    }, []);

    return (
        evolution ?
            <View style={styles.border}>
                <View style={styles.container}>
                    <Image style={{ width: 125, height: 125 }}
                        source={{ uri: evolution.sprite }} />
                    <Text style={styles.text}>{family}</Text>
                </View>
            </View> : <Text>Cargando....</Text>
    );
}

const styles = StyleSheet.create({
    container: {
        shadowColor: "#EDEDED",
        elevation: 1,
        width: 175,
        height: 175,
        borderRadius: 86,
        margin: 5,
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    border: {
        shadowColor: "#EDEDED",
        borderRadius: 92,
        elevation: 10,
        shadowRadius: 6.27,
    },
    text: {

    }
});

export default EvolutionCard;