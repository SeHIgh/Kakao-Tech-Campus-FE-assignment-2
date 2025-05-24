import { useNavigate } from "react-router-dom";
import pokemonLogo from "../assets/pokemonLogo.png"; // 이미지 import
import styled from "styled-components";

// 홈 컨테이너 스타일
const HomeCont = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100dvh;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

// 로고 이미지 스타일
const LogoImg = styled.img`
    width: 400px;
    height: auto;
`;

export const Home = () => {
    const navigate = useNavigate();

    return (
        <HomeCont>
            <LogoImg src={pokemonLogo} alt="Pokemon Logo" className="LogoImg" />
            {/* 도감 페이지 이동 버튼 */}
            <button
                onClick={() => {
                    navigate("/dex");
                }}
            >
                포켓몬 도감 시작하기
            </button>
        </HomeCont>
    );
};


// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png