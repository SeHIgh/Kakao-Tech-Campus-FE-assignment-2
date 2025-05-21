import { useSearchParams } from "react-router-dom";

export const Detail = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    return (
        <div>
            <h1>포켓몬 상세 페이지</h1>
            <p>포켓몬 ID: {id}</p>
        </div>
    );
};
