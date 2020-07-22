import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"


export const plantSeeds = (plan) => {
    let planted = []

    for (const row of plan) {
        for (const seed of row) {
            if (seed === "Asparagus") {
                planted = createAsparagus()
            }
            else if (seed === "Corn") {
                planted = createCorn()
            }
            else if (seed === "Potato") {
                planted = createPotato()
            }
            else if (seed === "Soybean") {
                planted = createSoybean()
            }
            else if (seed === "Sunflower") {
                planted = createSunflower()
            }
            else if (seed === "Wheat") {
                planted = createWheat()
            }
            addPlant(planted)
        }
    }

}
