import styled from "styled-components";
import PokemonList from "../components/Dex/PokemonList";
import Dashboard from "../components/Dex/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    return (
        <AppCont>
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />
            <Dashboard />
            <PokemonList />
        </AppCont>
    );
};
