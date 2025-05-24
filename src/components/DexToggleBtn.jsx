import styled from "styled-components";
import { useDexContext } from "../shared/DexContext";
import { toast } from "react-toastify";

// 덱 추가 및 삭제 버튼
const Btn = styled.button`
    padding: 8px 12px;
    border: none;
    border-radius: 12px;
    font-size: 0.8rem;
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
    const { dex, handleToggleDex } = useDexContext();
    const isAdded = dex.includes(pokemonId);

    const handleClick = (e) => {
        e.stopPropagation();
        handleToggleDex(
            pokemonId,
            () => toast.success("포켓몬이 덱에 추가되었습니다!"),
            () => toast.info("포켓몬이 덱에서 삭제되었습니다."),
            () => toast.error("포켓몬을 더 이상 선택할 수 없습니다.")
        );
    };

    return (
        <Btn isAdded={isAdded} onClick={handleClick}>
            {isAdded ? "삭제" : "추가"}
        </Btn>
    );
};

export default DexToggleBtn;