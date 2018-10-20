import { randomElement, randomIndex, coinFlip, rollDie } from './math'
const challanges = []

export const tools = [
    'dog sledge',
    'tent',
    'meteorite collection kits',
    'snowmobile',
    'laser',
    'digital camera',
    'binoculars',
    'boat',
    'navigation equipment',
]

const expertise_list = [ 'climate', 'geology', 'biology', 'adventure' ]

const difficulties = [ 'easy', 'medium', 'medium', 'hard' ]


export const generateChallanges = () => {
    challanges.length = 0
    for (let i = 0; i < 36; i++) {
        challanges.push({
            id: i,
            difficulty: randomElement(difficulties),
            tool: rollDie(3, 1) !== 1 ? null : randomElement(tools),
            expertise: randomElement(expertise_list),
        })
    }
}

export function availibleChallanges () {
    return challanges
}

export const getChallange = () => {
    if (challanges.length === 0) {
        generateChallanges()
        console.log('out of challanges')
    }
    const i = randomIndex(challanges)
    const challange = { ...challanges[i] }
    delete challanges[challange]
    return challange

}
