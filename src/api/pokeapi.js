import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

const api = axios.create({
    baseURL: API_URL,
    headers: { Accept: "application/json" }
});

export async function listPokemon(limit = 20, offset = 0) {
    try {
        const { data } = await api.get("/pokemon", { params: { limit, offset } });
        return data;
    } catch (error) {
        throw new Error("Error fetching Pokémon List");
    }
}

export async function getPokemon(Url) {
    try {
        const isURL = 
            typeof Url === 'string' && Url.startsWith('http');
        const { data: d } = isURL
            ? await axios.get(Url, { headers: { accept: 'application/json' } })
            : await api.get(`/pokemon/${Url}`);
        return {
            id: d.id,
            name: d.name,
            image: d?.sprites?.front_default,
            types: (d.types || []).map(t => t.type.name),
            height_m: d.height * 10,
            weight_kg: d.weight / 10,
            stats: Object.fromEntries((d.stats || []).map(s => [s.stat.name, s.base_stat])),
        };
    } catch (e) {
        throw new Error('No se pudo obtener el Pokémon');
    }
}

export async function getPokemonRes(limit = 20, offset = 0) {
    const list = await listPokemon(limit, offset);
    const details = await Promise.all(list.results.map(p => getPokemon(p.url)));
    return details;
}

