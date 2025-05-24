import styled from "styled-components";
import PokemonList from "../components/Dex/PokemonList";
import Dashboard from "../components/Dex/Dashboard";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DEX_STORAGE_KEY = "myPokemonDex";

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
    const [dex, setDexState] = useState([]);

    // localStorage와 동기화된 setDex
    const setDex = (newDex) => {
        setDexState(newDex);
        localStorage.setItem(DEX_STORAGE_KEY, JSON.stringify(newDex));
    };

    // 마운트 시 localStorage에서 불러오기
    useEffect(() => {
        const saved = localStorage.getItem(DEX_STORAGE_KEY);
        if (saved) {
            setDexState(JSON.parse(saved));
        } else {
            setDexState([]);
        }
    }, []);

    // 카드 덱 추가/삭제 토글 함수
    const handleToggleDex = (id) => {
        if (dex.includes(id)) {
            const filtered = dex.filter((pokeid) => pokeid !== id);
            setDex([
                ...filtered,
                ...Array(6 - filtered.length).fill(null),
            ]);
            toast.info("포켓몬이 덱에서 삭제되었습니다.");
        } else {
            const filled = dex.filter((pokeid) => pokeid !== null);
            if (filled.length >= 6) {
                toast.error("포켓몬을 더 이상 선택할 수 없습니다.");
                return;
            }
            setDex([
                ...filled,
                id,
                ...Array(6 - filled.length - 1).fill(null),
            ]);
            toast.success("포켓몬이 덱에 추가되었습니다!");
        }
    };

    return (
        <AppCont>
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />
            <Dashboard dex={dex} onToggleDex={handleToggleDex} />
            <PokemonList dex={dex} onToggleDex={handleToggleDex} />
        </AppCont>
    );
};
