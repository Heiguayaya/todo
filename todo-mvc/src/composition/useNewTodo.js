import {
    ref
} from "vue";
import {
    generateId
} from "./useTodoList"
export default function useNewTodo(todosRef) {
    const newTodoRef = ref("");
    const addTodo = () => {
        //新增任务
        const value = newTodoRef.value && newTodoRef.value.trim();
        if (!value) {
            return
        }
        // 生成一个任务对象并加入到任务列表中
        const todo = {
            id: generateId(), //随机id
            title: value,
            completed: false // 是否完成
        }
        todosRef.value.push(todo);
        newTodoRef.value = ""
    }
    return {
        newTodoRef,
        addTodo
    }
}