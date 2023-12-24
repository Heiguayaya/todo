const LOCAL_KEY = "todomvc"

/**
 * 获取目前所有的任务
 */
export function fetch() {
    const result = localStorage.getItem(LOCAL_KEY)
    if (result) {
        return JSON.parse(result)
    }
    return []
}

/**
 * 
 * @param {*} arr 任务列表 
 */
export function save(arr) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(arr))
}

/**
 * 
 * @param {*} todos 任务列表 
 * @param {*} visibility 筛选状态
 * @returns 
 */
export function filter(todos, visibility = "all") {
    if (visibility === "all") {
        return todos
    } else if (visibility === "active") {
        //筛选出未完成的任务
        return todos.filter((it) => !it.completed);
    } else if (visibility === "completed") {
        return todos.filter((it) => it.completed);
    }
    throw new Error("属性值无效")

}