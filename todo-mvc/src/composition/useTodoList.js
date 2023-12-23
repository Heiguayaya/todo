import {
    ref,
    watchEffect
} from "vue";
import * as todoStorage from "../util/todoStorage";

export function generateId() {
    return Date.now() + Math.random().toString(16).substring(2, 4)
}

export default function useTodoList() {
    const todosRef = ref(todoStorage.fetch());
    //数据变化自动调用
    watchEffect(() => {
        todoStorage.save(todosRef.value);
    });
    return {
        todosRef
    }
}