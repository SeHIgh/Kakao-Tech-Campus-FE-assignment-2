import { useEffect, useState } from "react";
import MOCK_DATA from "../../data/mock";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const PokemonListCont = styled.div`
    width: 90%;
`;

const List = styled.div`
    width: 100%;
    padding: 24px;
    background-color: #f2f2f2;
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
    justify-items: center;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }
    @media (max-width: 900px) {
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }
    @media (max-width: 600px) {
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    }
`;

// 포켓몬 전체 리스트
const PokemonList = ({ dex, onToggleDex }) => {
    const [pokeList, setPokeList] = useState([]);

    useEffect(() => {
        setPokeList(MOCK_DATA);
    }, []);

    return (
        <PokemonListCont>
            <h1>포켓몬 도감</h1>
            <List>
                {pokeList.map((pokemon, idx) => (
                    <PokemonCard
                        key={idx + pokemon.id}
                        pokemon={pokemon}
                        isAdded={dex.includes(pokemon.id)}
                        onToggleDex={onToggleDex}
                    />
                ))}
            </List>
        </PokemonListCont>
    );
};

export default PokemonList;
