import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import MainPokemonImage from "../Image/MainPokemonImage";
import Dropdown from "../Button/Dropdown";
import EvolutionCard from "./EvolutionCard";

const MainPokemon = (props) => {
    const { name, number, types, sprite, description, family } = props.data;
    const [reading, setReading] = useState(false);

    return (
        <ScrollView style={{ flexDirection: "column" }}>

            {/* IMAGE POKEMON CONTAINER */}
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MainPokemonImage sprite={sprite} />
            </View>

            {/* Name Pokemon with number */}
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Text style={[{ fontSize: 35 }, styles.text]}>{name}</Text>
                <Text style={[{ fontSize: 20 }, styles.text]}> #{number}</Text>
            </View>

            {/* Types of pokemon */}
            <View style={{ flexDirection: "row", alignContent: "center", justifyContent: "center" }}>
                {types.map((e) =>
                    <Text style={styles.textType} key={e}>{e}</Text>
                )}
            </View>

            {/* Description */}
            <Dropdown onPress={() => setReading(!reading)} press={reading} description={description} />

            {/* Evolutions Title */}
            <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                <Text style={styles.evolutions}>Evolutions</Text>
            </View>

            {/* Evolutions cards */}
            {
                family ?
                    family.evolutionLine ?
                        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                            {
                                family.evolutionLine.map((e) =>
                                    <EvolutionCard key={e} family={e} />
                                )
                            }
                        </View> : null : null
            }

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-SemiBold",
        color: "#2D2D2D"
    },
    textType: {
        paddingTop: 5,
        paddingBottom: 2,
        paddingHorizontal: 15,
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Poppins-Bold",
        marginRight: 5,
        borderRadius: 20
    },
    evolutions: {
        fontFamily: "Poppins-Black",
        color: "#2D2D2D",
        fontSize: 25
    }
});

export default MainPokemon;