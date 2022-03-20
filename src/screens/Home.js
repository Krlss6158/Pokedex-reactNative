import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";

import { AppName, MainPokemon, NewPokemon, Pokeboll } from "../components";
import { generate } from "../core/Methods";
import api from "../services/api";

const Home = () => {

    const [numbtn, setNumBtn] = useState(1);
    const [pokemon, setPokemon] = useState(null);


    useEffect(() => {
        async function getPokemon() {
            console.log("search...");
            try {
                const { data } = await api.get(`pokemon/${generate()}`);
                setPokemon(data[0]);
            } catch (error) {
                console.log("error getPokemon: " + error);
                setNumBtn(numbtn + 1);
            }
        }
        setPokemon(null);
        setTimeout(() => getPokemon(), 3000);
    }, [numbtn]);

    return (
        <View style={{ backgroundColor: "#FF1C1C", flex: 1 }}>
            <AppName />
            {pokemon ? <MainPokemon data={pokemon} /> : <Pokeboll />}
            <NewPokemon loading={pokemon} onPress={() => setNumBtn(numbtn + 1)} />
        </View>
    );
}

export default Home;