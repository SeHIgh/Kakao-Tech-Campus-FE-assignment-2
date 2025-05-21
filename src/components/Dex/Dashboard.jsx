import { useState } from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../../data/mock";
import styled from "styled-components";

const DashboardCont = styled.div`
    width: 90%;
`;

const List = styled.div`
    width: 100%;
    padding: 16px;
    background-color: #f2f2f2;
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 24px;
    padding: 24px;
    justify-items: center;

    /* @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 16px;
        padding: 12px;
    }
    @media (min-width: 601px) and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        padding: 16px;
    }
    @media (min-width: 1025px) {
        grid-template-columns: repeat(6, 1fr);
        gap: 24px;
        padding: 24px;
    } */
`;

// 나만의 포켓몬 덱 대시보드
const Dashboard = ({ dex, onToggleDex }) => {
    const [pokeList] = useState(MOCK_DATA);

    return (
        <DashboardCont>
            <h1>나만의 포켓몬 덱</h1>
            <List>
                {dex.map((id) => {
                    const pokemon = pokeList.find((p) => p.id === id);
                    if (!pokemon) return null; // 혹시 id가 유효하지 않을 때 방어 코드
                    return (
                        <PokemonCard
                            key={id}
                            pokemon={pokemon}
                            isAdded={dex.includes(pokemon.id)}
                            onToggleDex={onToggleDex}
                        />
                    );
                })}
            </List>
        </DashboardCont>
    );
};

export default Dashboard;
