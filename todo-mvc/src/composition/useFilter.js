import {
    ref,
    onMounted,
    onUnmounted,
    computed
} from "vue";
import {
    filter
} from "../util/todoStorage"

const validHash = ["all", "active", "completed"]

export default function useFilter(todoRef) {
    let visibilityRef = ref("all");
    const onHashChange = () => {
        const hash = location.hash.replace(/#\/?/, "");
        if (validHash.includes(hash)) {
            //有效hash
            visibilityRef.value = hash
        } else {
            location.hash = "";
            visibilityRef = "all";
        }
    };

    onMounted(() => {
        window.addEventListener("hashchange", onHashChange);
    })

    onUnmounted(() => {
        window.removeEventListener("hashchange", onHashChange);
    });

    const filteredTodoRef = computed(() => {
        return filter(todoRef.value, visibilityRef.value)
    })
    return {
        visibilityRef,
        filteredTodoRef
    }
}