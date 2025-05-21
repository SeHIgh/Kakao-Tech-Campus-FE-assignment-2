import styled from "styled-components";
import PokemonList from "../components/Dex/PokemonList";
import Dashboard from "../components/Dex/Dashboard";
import { useState } from "react";
import MOCK_DATA from "../data/mock";

const AppCont = styled.div`
    width: 100%;
    min-height: 100dvh;
    height: fit-content;

    padding: 24px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

export const Dex = () => {
    const [dex, setDex] = useState([]);

    // 카드 덱 추가 토글 함수
    const handleToggleDex = (id) => {
        // 이미 덱에 있으면 삭제
        if (dex.includes(id)) {
            setDex((prev) => prev.filter((pokeid) => pokeid !== id));
        } else {
            // 6마리 제한 체크
            if (dex.length >= 6) {
                alert("덱에는 최대 6마리만 선택할 수 있습니다!");
                return;
            }
            setDex((prev) => [...prev, id]);
        }
    };

    return (
        <AppCont>
            <Dashboard dex={dex} onToggleDex={handleToggleDex} />
            <PokemonList dex={dex} onToggleDex={handleToggleDex} />
        </AppCont>
    );
};
