import { createContext, useState, useEffect, useCallback, useContext } from "react";

const DEX_STORAGE_KEY = "myPokemonDex";
// context 생성
const DexContext = createContext();

export const DexProvider = ({ children }) => {
    const [dex, setDex] = useState([]);

    // 내 덱 데이터 로컬 스토리지에서 가져오기
    useEffect(() => {
        const myDex = localStorage.getItem(DEX_STORAGE_KEY);
        setDex(myDex ? JSON.parse(myDex) : []);
    }, []);

    // 덱 추가/삭제 함수 전역 적으로 사용 가능하도록 설정
    // 불필요한 리렌더링 방지를 위해 useCallback 사용
    const handleToggleDex = useCallback(
        (id, onAdd, onRemove, onError) => {
            let newDex;
            if (dex.includes(id)) {
                const filtered = dex.filter((pokeid) => pokeid !== id);
                newDex = [
                    ...filtered,
                    ...Array(6 - filtered.length).fill(null),
                ];
                if (onRemove) onRemove();
            } else {
                const filled = dex.filter((pokeid) => pokeid !== null);
                if (filled.length >= 6) {
                    if (onError) onError();
                    return;
                }
                newDex = [
                    ...filled,
                    id,
                    ...Array(6 - filled.length - 1).fill(null),
                ];
                if (onAdd) onAdd();
            }
            setDex(newDex);
            localStorage.setItem(DEX_STORAGE_KEY, JSON.stringify(newDex));
        },
        [dex]
    );

    return (
        <DexContext.Provider value={{ dex, handleToggleDex }}>
            {children}
        </DexContext.Provider>
    );
};

export function useDexContext() {
    return useContext(DexContext);
}
