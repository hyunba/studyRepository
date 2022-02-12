import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

interface CircleProps {
    bgColor: string; // 현재 bgcolor는 require 상태로 무조건 값이 있어야한다.
    borderColor?: string; // ?를 추가해주어서 bordeColor를 optional 값으로 만들 수도있게 되었다.
    text?: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
    border: 10px solid ${(props) => props.borderColor}; 
`; // css에서는 무조건 require 상태이다.

// 기존과 다르게 typescript는 proptypes과 비슷한 기능이 있어서 임의로 prop을 만들면
// 그것이 무엇인지 정해주어야한다. ex) const x= (a:number, b:number) => a+b

function Circle({bgColor, borderColor, text = "default text" }: CircleProps) {
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
            {text}
        </Container>
    );
} // {borderColor ?? bgColor} 만약 borderColor가 있다면 borderColor를 없다면 bgColor를
    // text = "default text" text가 존재하지 않는다면 저 문장이 나온다.
export default Circle;

// interface PlayerShape{
//     name: string;
//     age: number;
// }

// const sayHello = (playerObj:PlayerShape) => 
//     `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

// sayHello({name:"Jenny", age:10})