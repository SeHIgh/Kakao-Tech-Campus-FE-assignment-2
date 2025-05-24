import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { toggleDex } from "../redux/slices/dexSlice";

// 덱 추가 및 삭제 버튼
const Btn = styled.button`
    padding: 9px 14px;
    border: none;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;

    background: ${({ isAdded }) => (isAdded ? "#f44336" : "#1976d2")};
    color: #fff;

    &:hover {
        background: ${({ isAdded }) => (isAdded ? "#d32f2f" : "#1565c0")};
    }
`;

const DexToggleBtn = ({ pokemonId }) => {
    // redux-toolkit을 사용하여 덱 상태 관리
    const dex = useSelector((state) => state.dex.dex);
    const dispatch = useDispatch();
    const isAdded = dex.includes(pokemonId);

    const handleClick = (e) => {
        e.stopPropagation();
        if (!isAdded && dex.filter((id) => id !== null).length >= 6) {
            toast.error("포켓몬을 더 이상 선택할 수 없습니다.");
            return;
        }
        dispatch(toggleDex(pokemonId));
        if (isAdded) {
            toast.info("포켓몬이 덱에서 삭제되었습니다.");
        } else {
            toast.success("포켓몬이 덱에 추가되었습니다!");
        }
    };

    return (
        <Btn isAdded={isAdded} onClick={handleClick}>
            {isAdded ? "삭제" : "추가"}
        </Btn>
    );
};

export default DexToggleBtn;