export const randomElement = a => a[Math.floor(Math.random() * a.length)]
export const randomIndex = a => Math.floor(Math.random() * a.length)

export const rollDie = (sides, rolls) => {
    let result = 0
    for (let roll = 0; roll < rolls;roll++) {
        result += Math.floor(Math.random() * sides) + 1
    }
    return result
}

export const coinFlip = () => rollDie(2, 1) === 1 ? true : false
