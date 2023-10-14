import { useContext, createContext } from "react";

export const TodoContext= createContext({
    Todos:{
        id:1,
        completed: false,
        todo:"Some msg"
    },
    addTodo:(todo)=>{},
    updateTodo:(id, todo)=>{},
    deleteTodo:(id)=>{},
    ToggleTodocomp:(id)=>{}
})

export const TodoProvider= TodoContext.Provider

export const useTodo = () =>{
    return useContext(TodoContext);
}