import styled from "styled-components";

// 덱 추가 버튼
const Btn = styled.button`
    padding: 8px 20px;
    border: none;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;

    background: ${({ isAdded }) => (isAdded ? "#f44336" : "#1976d2")};
    color: #fff;

    &:hover {
        background: ${({ isAdded }) => (isAdded ? "#d32f2f" : "#1565c0")};
    }
`;

const DexToggleBtn = ({ isAdded, onClick }) => (
    <Btn isAdded={isAdded} onClick={onClick}>
        {isAdded ? "삭제" : "추가"}
    </Btn>
);

export default DexToggleBtn;