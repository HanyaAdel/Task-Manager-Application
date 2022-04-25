import React from "react";

const Todo = (props) =>{

    const deleteHandler = () =>{

        props.setTodos(props.todos.filter((e1) => e1.id != props.todo.id));

    }
    const completeHandler = () =>{
        props.setTodos (
            props.todos.map((item) =>{
            if (item.id === props.todo.id){
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
            })
        );
    }
    return (
        <div className="todo">
            <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>
                {props.todo.text}
            </li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button  onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;