console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { harvestPlants } from "./harvester.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { catalog } from "./catalog.js";


const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
const planted = usePlants()
const theHarvest = harvestPlants(planted)
const printedToDOM = catalog(theHarvest)

console.log(yearlyPlan)
console.log(planted)
console.log(theHarvest)