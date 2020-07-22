export const harvestPlants = (plantArray) => {
    let harvestArray = []
    for (const plant of plantArray) {
        let output = plant.output

        if (plant.type === "Corn") {
            output /= 2
        } 
       for (let i=0; i < output; i++) {
           harvestArray.push(plant)
       }
    }
    return harvestArray

}