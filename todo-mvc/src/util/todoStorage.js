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