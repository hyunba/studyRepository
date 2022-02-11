import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging:boolean }>`
  background-color: ${(props) => props.isDragging ? "#74b9ff" : props.theme.cardColor};
  box-shadow: ${(props) => props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.5)" : "none"};
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

interface IDragabbleCardProps {
    toDoId: number;
    toDoText: string;
    index: number;
}

function DragabbleCard({toDoId, toDoText, index}: IDragabbleCardProps){
    return (
        <Draggable draggableId={toDoId+""} index={index}>
            {(element, snapshot) => (<Card isDragging={snapshot.isDragging} ref={element.innerRef} {...element.draggableProps} {...element.dragHandleProps}>
                            <span>❤️</span>
                            {toDoText}</Card>)}
        </Draggable>
    );
}
// React.memo는 기존의 React가 가지고 있는 rendering 기능을 무차별로 사용하면 기능이 저하되는 부분을 막기 위해
// 이 prop이 바뀌지 않는이상 rerendering을 하지 않도록 하는 기능이다.
export default React.memo(DragabbleCard);