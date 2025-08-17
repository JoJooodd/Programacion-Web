import { useEffect, useState } from "react";
import Card from "./components/card";
import "./App.css";
import { getPokemonRes } from "./api/pokeapi";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        // Cargo los pokemones de la cuarta generacion (387 a la 493)
        const items = await getPokemonRes(107, 387);
        setPokemons(items);
      } catch (e) {
        console.error("BATCH ERROR:", e);
        setErr(String(e?.message || e));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="pokedex">
        <h1 className="title">Pokédex</h1>
        <p>Cargando…</p>
      </div>
    );
  }

  if (err) {
    return (
      <div className="pokedex">
        <h1 className="title">Pokédex</h1>
        <p>Error: {err}</p>
      </div>
    );
  }

  return (
    <>
      <div className="pokedex">
        <h1 className="title">Pokédex</h1>
        <div className="cards-zone">
          {pokemons.map((p) => (
            <Card
              key={p.id}
              img={p.image}
              name={p.name}
              type={p.types}              
              height={p.height_m}         
              weight={p.weight_kg}        
              hp={p.stats.hp}
              attack={p.stats.attack}
              defence={p.stats.defense}
            />
          ))}
        </div>

        <footer>

        </footer>
      </div>
    </>
  );
}
