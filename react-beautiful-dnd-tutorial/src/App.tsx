import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd"
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./Components/Board";


const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

// const Board = styled.div`
//   padding: 20px 10px;
//   padding-top: 30px;
//   background-color: ${(props) => props.theme.boardColor};
//   border-radius: 5px;
//   min-height: 300px;
// `;

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const toDos = ["a", "b", "c", "d", "e", "f"];

// dragHandleProps는 해당 지정영역을 눌러야 이동할수있게함
// dragableProps는 해당 영역의 내용들이 옮겨짐
// atom의 값을 가져오려면 useRecoilValue를 사용하면되지만 atom의 값 뿐만 아니라 atom을 수정하는 함수까지 부르고 싶다면 useRecoilState를 사용.
function App() {
  const [toDos, setToDos] = useRecoilState(toDoState)
  const onDragEnd = (info: DropResult) => {
    const { destination, draggableId, source } = info;
    // same board movement
    if(!destination) return;
    if(destination?.droppableId === source.droppableId){
      setToDos((oldToDos) =>{
      const boardCopy = [...oldToDos[source.droppableId]];
      const taskObj = boardCopy[source.index]
      // 1) Delete item
      boardCopy.splice(source.index, 1)
      // 2) Put back item
      boardCopy.splice(destination?.index, 0, taskObj)

      return {
        ...oldToDos,
        [source.droppableId]: boardCopy
      };
      });
    }
    if(destination.droppableId !== source.droppableId){
      setToDos((oldToDos) => {
        const sourceBoard = [...oldToDos[source.droppableId]];
        const taskObj = sourceBoard[source.index]
        const destinationBoard = [...oldToDos[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, taskObj);
        return {
          ...oldToDos,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard
        }
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (<Board boardId={boardId} key={boardId} toDos={toDos[boardId]}></Board>))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
