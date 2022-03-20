import React from "react";
import { Image } from "react-native";

const MainPokemonImage = ({ sprite }) => {
    return (
        <Image style={{ width: 200, height: 200, marginHorizontal: 10 }}
            source={{ uri: sprite }} />
    );
}

export default MainPokemonImage;