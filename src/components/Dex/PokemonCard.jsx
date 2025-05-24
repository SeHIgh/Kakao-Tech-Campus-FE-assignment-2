import styled from "styled-components";
import DexToggleBtn from "../DexToggleBtn";
import { useNavigate } from "react-router-dom";
import { getTypeColor } from "../../data/pokemonType";

// 포켓몬 카드 컨테이너
const Card = styled.div`
    width: 100%;
    min-width: 100px;
    min-height: 290px;
    border: 1px solid #ddd;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 6px;
    font-family: "Arial", sans-serif;
    cursor: pointer;

    transition: all 0.3s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

// 포켓몬 이미지
const Img = styled.img`
    width: 100px;
    height: 100px;
`;

// 포켓몬 이름 타이틀
const Title = styled.h1`
    font-size: 1.3rem;
    font-weight: bold;
`;

// 포켓몬 도감 번호
const Id = styled.p`
    font-size: 1rem;
    font-weight: semibold;
    color: #888;
`;

// 포켓몬 타입 리스트 컨테이너
const Types = styled.div`
    display: flex;
    gap: 8px;
`;

// 포켓몬 타입 컨테이너
const Type = styled.div`
    padding: 4px 10px;
    border-radius: 16px;
    font-size: 0.7rem;
    color: white;
    background-color: ${(props) => props.backgroundColor};
`;

const PokemonCard = ({ pokemon }) => {
    const navigate = useNavigate();

    return (
        <Card
            onClick={() => {
                navigate(`/pokemon-detail?id=${pokemon.id}`);
            }}
        >
            <Img src={pokemon.img_url} alt={pokemon.korean_name} />
            <Title>{pokemon.korean_name}</Title>
            <Id>No. {String(pokemon.id).padStart(3, '0')}</Id>
            <Types>
                {pokemon.types.map((type, idx) => (
                    <Type key={idx + type} backgroundColor={getTypeColor(type)}>
                        <p>{type}</p>
                    </Type>
                ))}
            </Types>
            <DexToggleBtn pokemonId={pokemon.id} />
        </Card>
    );
};

export default PokemonCard;
