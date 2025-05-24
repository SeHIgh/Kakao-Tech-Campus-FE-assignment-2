import { createSlice } from "@reduxjs/toolkit";

// 로컬 스토리지 키 설정
const DEX_STORAGE_KEY = "myPokemonDex";

// 덱 상태 초기화 (로컬 스토리지에서 가져오기 - 페이지 새로고침 시 덱 상태 유지를 위해)
const getInitialDex = () => {
    const saved = localStorage.getItem(DEX_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
};

const initialState = {
    dex: getInitialDex(),
};

// 이전 context api 방식으로 작성된 코드를 redux-toolkit 방식으로 변경
const dexSlice = createSlice({
    name: "dex",
    initialState,
    reducers: {
        toggleDex: (state, action) => {
            const id = action.payload;
            let newDex;
            if (state.dex.includes(id)) {
                const filtered = state.dex.filter((pokeid) => pokeid !== id);
                newDex = [
                    ...filtered,
                    ...Array(6 - filtered.length).fill(null),
                ];
            } else {
                const filled = state.dex.filter((pokeid) => pokeid !== null);
                if (filled.length >= 6) {
                    // 용량 초과, 상태는 그대로
                    return;
                }
                newDex = [
                    ...filled,
                    id,
                    ...Array(6 - filled.length - 1).fill(null),
                ];
            }
            state.dex = newDex;
            localStorage.setItem(DEX_STORAGE_KEY, JSON.stringify(newDex));
        },
        setDex: (state, action) => {
            state.dex = action.payload;
            localStorage.setItem(
                DEX_STORAGE_KEY,
                JSON.stringify(action.payload)
            );
        },
    },
});

export const { toggleDex, setDex } = dexSlice.actions;
export default dexSlice.reducer;
