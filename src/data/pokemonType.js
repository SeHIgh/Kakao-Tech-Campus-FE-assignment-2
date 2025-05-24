// 타입 별 맞는 색상을 반환해주는 함수
export const getTypeColor = (type) => {
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
            return "#888";
    }
};