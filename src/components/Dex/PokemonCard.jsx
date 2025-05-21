import styled from "styled-components";
import DexToggleBtn from "../DexToggleBtn";

// 포켓몬 카드 컨테이너
const Card = styled.div`
    /* width: 250px; */
    width: 80%;
    min-width: 100px;
    border: 1px solid #ddd;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    font-family: "Arial", sans-serif;
`;

// 포켓몬 이미지
const Img = styled.img`
    width: 120px;
    height: 120px;
`;

// 포켓몬 이름 타이틀
const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
`;

// 포켓몬 도감 번호
const Id = styled.p`
    font-size: 1rem;
    font-weight: semibold;
    color: #555;
`;

// 포켓몬 타입 리스트 컨테이너
const Types = styled.div`
    display: flex;
    gap: 8px;
`;

// 포켓몬 타입 컨테이너
const Type = styled.div`
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.9rem;
    color: white;
    background-color: ${(props) => props.backgroundColor};
`;

// 타입 별 맞는 색상을 반환해주는 함수
const getTypeColor = (type) => {
    switch (type) {
        case "노말":
            return "#A8A77A";
        case "불꽃":
            return "#EE8130";
        case "물":
            return "#6390F0";
        case "풀":
            return "#7AC74C";
        case "전기":
            return "#F7D02C";
        case "얼음":
            return "#96D9D6";
        case "격투":
            return "#C22E28";
        case "독":
            return "#A33EA1";
        case "땅":
            return "#E2BF65";
        case "비행":
            return "#A98FF3";
        case "에스퍼":
            return "#F95587";
        case "벌레":
            return "#A6B91A";
        case "바위":
            return "#B6A136";
        case "고스트":
            return "#735797";
        case "드래곤":
            return "#6F35FC";
        case "강철":
            return "#B7B7CE";
        case "페어리":
            return "#D685AD";
        default:
            return "#888"; // 알 수 없는 타입은 회색
    }
};

const PokemonCard = ({ pokemon, isAdded, onToggleDex }) => {
    return (
        <Card>
            <Img src={pokemon.img_url} alt={pokemon.korean_name} />
            <Title>{pokemon.korean_name}</Title>
            <Id>No. {pokemon.id}</Id>
            <Types>
                {pokemon.types.map((type, idx) => (
                    <Type key={idx + type} backgroundColor={getTypeColor(type)}>
                        <p>{type}</p>
                    </Type>
                ))}
            </Types>
            {/* <Btn isAdded={isAdded} onClick={() => onToggleDex(pokemon.id)}>
                {isAdded ? "삭제" : "추가"}
            </Btn> */}
            <DexToggleBtn
                isAdded={isAdded}
                onClick={() => onToggleDex(pokemon.id)}
            />
        </Card>
    );
};

export default PokemonCard;
