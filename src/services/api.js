import axios from "axios";

const api = axios.create({
    baseURL: "https://pokeapi.glitch.me/v1/",
});

export default api;