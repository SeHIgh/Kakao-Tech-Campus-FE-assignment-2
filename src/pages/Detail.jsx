import { useSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getTypeColor } from "../data/pokemonType";
import MOCK_DATA from "../data/mock";

// 스타일 컴포넌트
const DetailCont = styled.div`
    width: 100%;
    min-height: 100dvh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    width: 180px;
    height: 180px;
    margin-bottom: 16px;
`;

const Name = styled.h2`
    font-size: 2rem;
    margin-bottom: 8px;
`;

const Id = styled.p`
    font-size: 1.1rem;
    color: #888;
    margin-bottom: 8px;
`;

const Types = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 16px;
`;

const Type = styled.div`
    padding: 6px 16px;
    border-radius: 20px;
    color: #fff;
    font-weight: bold;
    background: ${(props) => props.backgroundColor};
`;

const Description = styled.p`
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 24px;
    text-align: center;
`;

const BackBtn = styled.button`
    padding: 8px 20px;
    border: none;
    border-radius: 8px;
    background: #1976d2;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
        background: #1565c0;
    }
`;

export const Detail = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const navigate = useNavigate();

    // id로 포켓몬 데이터 찾기
    const pokemon = MOCK_DATA.find((p) => String(p.id) === id);

    if (!pokemon) {
        return (
            <Container>
                <h1>포켓몬을 찾을 수 없습니다.</h1>
                <BackBtn onClick={() => navigate(-1)}>뒤로 가기</BackBtn>
            </Container>
        );
    }

    return (
        <DetailCont>
            <Img src={pokemon.img_url} alt={pokemon.korean_name} />
            <Name>{pokemon.korean_name}</Name>
            <Id>No. {pokemon.id}</Id>
            <Types>
                {pokemon.types.map((type) => (
                    <Type key={type} backgroundColor={getTypeColor(type)}>
                        {type}
                    </Type>
                ))}
            </Types>
            <Description>{pokemon.description}</Description>
            <BackBtn onClick={() => navigate(-1)}>뒤로 가기</BackBtn>
        </DetailCont>
    );
};
