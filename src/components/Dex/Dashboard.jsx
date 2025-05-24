import { useState } from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../../data/mock";
import styled from "styled-components";
import pokeball from "../../assets/pokeball.png";
import { useSelector } from "react-redux";

const DashboardCont = styled.div`
    width: 100%;
    min-height: 340px;
`;

const DashboardTitle = styled.h1`
    text-align: center;
    font-size: 1.7rem;
    font-weight: bold;
    margin-bottom: 16px;
    color: #f44336;
`;

const List = styled.div`
    width: 100%;
    min-height: 320px;
    height: 100%;
    padding: 16px;

    /* 포켓볼 처럼 배경 그라데이션 효과 적용 */
    background: linear-gradient(
        to bottom,
        #f44336 0%,
        #f44336 45%,
        #58585a 45%,
        #58585a 55%,
        #fff 55%,
        #fff 100%
    );

    border: 2px solid #58585a;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 24px;
    padding: 24px;
    justify-items: center;

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        padding: 12px;
    }
    @media (min-width: 601px) and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        padding: 16px;
    }
    @media (min-width: 1025px) {
        grid-template-columns: repeat(6, 1fr);
        gap: 24px;
        padding: 24px;
    }
`;

// 빈 슬롯 카드 스타일
const EmptyCard = styled.div`
    width: 100%;
    min-width: 100px;
    min-height: 290px;
    border: 2px dashed #bdbdbd;
    border-radius: 12px;
    background: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #bdbdbd;
    font-size: 1.1rem;
    font-weight: bold;
`;

// 로고 이미지 스타일
const EmptyImg = styled.img`
    width: 120px;
    height: auto;
`;

// 나만의 포켓몬 덱 대시보드
const Dashboard = () => {
    // redux-toolkit을 사용하여 덱 상태 관리
    const dex = useSelector((state) => state.dex.dex);
    const [pokeList] = useState(MOCK_DATA);
    const filledDex = dex.filter((id) => id !== null);
    const emptyCount = 6 - filledDex.length;

    return (
        <DashboardCont>
            <DashboardTitle>나만의 포켓몬 덱</DashboardTitle>
            <List>
                {/* 덱에 들어있는 포켓몬 카드 렌더링 (앞쪽) */}
                {filledDex.map((id) => {
                    const pokemon = pokeList.find((p) => p.id === id);
                    return (
                        <PokemonCard
                            key={id}
                            pokemon={pokemon}
                        />
                    );
                })}
                {/* 부족한 개수만큼 빈 카드 추가 렌더링 (뒤쪽) */}
                {Array.from({ length: emptyCount }, (_, idx) => (
                    <EmptyCard key={"empty_" + idx}>
                        <EmptyImg src={pokeball} alt="빈 덱" />
                    </EmptyCard>
                ))}
            </List>
        </DashboardCont>
    );
};

export default Dashboard;
