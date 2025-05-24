import { useEffect, useState } from "react";
import MOCK_DATA from "../../data/mock";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const PokemonListCont = styled.div`
    width: 100%;
    height: 100%;
`;

const PokemonListTitle = styled.h1`
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 16px;
    color: #58585a;
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

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        padding: 12px;
    }
    @media (min-width: 601px) and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        padding: 16px;
    }
    @media (min-width: 1025px) {
        grid-template-columns: repeat(6, 1fr);
        gap: 24px;
        padding: 24px;
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
            <PokemonListTitle>포켓몬 도감</PokemonListTitle>
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
