export default defineNuxtPlugin(({ $pinia }) => {
    return {
        provide: {
            // store: useFiltersStore($pinia)
        }
    }
})