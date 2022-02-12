import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "./atoms";

function ToDo({text, category, id}:IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: {name},
        } = event;
        setToDos(oldToDos => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
            const newToDo = {text, id, category: name as any};
            return [
                ...oldToDos.slice(0, targetIndex), 
                newToDo, 
                ...oldToDos.slice(targetIndex + 1),
            ];
        });
    };
    const handleDeleteToDo = (event:React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { parentElement },
        } = event;
        
        setToDos((todoArray) => {
            const newTodoArray = todoArray.filter((todo) => todo.id !== Number(parentElement?.id));
            const stringifiedNewToDos = JSON.stringify(newTodoArray);
            localStorage.setItem("ToDos", stringifiedNewToDos);
            return newTodoArray;
            });
    };
    return (
        <li id={id as any}>
            <span>{text}</span>
            {category !== Categories.TO_DO && <button name={Categories.DOING} onClick={onClick}>Doing</button>}
            {category !== Categories.DOING && <button name={Categories.TO_DO} onClick={onClick}>To Do</button>}
            {category !== Categories.DONE && <button name={Categories.DONE} onClick={onClick}>Done</button>}
            <button onClick={handleDeleteToDo}>delete</button>
        </li>);
}

export default ToDo;