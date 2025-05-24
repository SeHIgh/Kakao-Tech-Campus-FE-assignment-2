import styled from "styled-components";
import PokemonList from "../components/Dex/PokemonList";
import Dashboard from "../components/Dex/Dashboard";
import { useState } from "react";

const AppCont = styled.div`
    width: 100%;
    min-height: 100dvh;
    height: fit-content;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 16px;
`;

export const Dex = () => {
    const [dex, setDex] = useState([]);

    // 카드 덱 추가/삭제 토글 함수
    const handleToggleDex = (id) => {
        if (dex.includes(id)) {
            const filtered = dex.filter((pokeid) => pokeid !== id);
            setDex([
                ...filtered,
                ...Array(6 - filtered.length).fill(null),
            ]);
        } else {
            const filled = dex.filter((pokeid) => pokeid !== null);
            if (filled.length >= 6) {
                alert("포켓몬을 더 이상 선택할 수 없습니다. (최대 6마리)");
                return;
            }
            setDex([
                ...filled,
                id,
                ...Array(6 - filled.length - 1).fill(null),
            ]);
        }
    };

    return (
        <AppCont>
            <Dashboard dex={dex} onToggleDex={handleToggleDex} />
            <PokemonList dex={dex} onToggleDex={handleToggleDex} />
        </AppCont>
    );
};
