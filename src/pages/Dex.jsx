import styled from "styled-components";
import PokemonList from "../components/Dex/PokemonList";
import Dashboard from "../components/Dex/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDexContext } from "../shared/DexContext";

const AppCont = styled.div`
    width: 100%;
    min-height: 100dvh;
    height: fit-content;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 16px;
`;

export const Dex = () => {
    // 전역 Context를 통해 덱 추가/삭제 함수 가져오기
    const { handleToggleDex } = useDexContext();

    // 카드 덱 추가/삭제 토글 함수
    const handleToggle = (id) => {
        handleToggleDex(
            id,
            () => toast.success("포켓몬이 덱에 추가되었습니다!"),
            () => toast.info("포켓몬이 덱에서 삭제되었습니다."),
            () => toast.error("포켓몬을 더 이상 선택할 수 없습니다.")
        );
    };

    return (
        <AppCont>
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />
            <Dashboard onToggleDex={handleToggle} />
            <PokemonList onToggleDex={handleToggle} />
        </AppCont>
    );
};
