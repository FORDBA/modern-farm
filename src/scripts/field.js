
let plantsInField = []
export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)) {
        for (const seed of seedObj) {

            plantsInField.push(seed)
        }
    }
    else {
        plantsInField.push(seedObj)
    }

}
export const usePlants = () => {
    return plantsInField.slice()
}