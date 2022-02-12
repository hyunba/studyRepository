import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
    border: 10px solid ${(props) => props.borderColor}; 
`;

function Circle({bgColor, borderColor}: CircleProps) {
    const [counter, setCounter] = useState(1); // state 값은 number이거나 string이거나 boolean 등 하나만 쓰겠지만
    // useState<number|string>(0) 을 넣게되면 number와 string 값을 사용할 수 있게된다.
    // 하지만 보통 state를 만들면 같은 타입으로 쭉 가게되니 이런게 있단 것만 알자.

    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />
    );
}

export default Circle;
