export const tilesMap = []

export function initMap () {
    tilesMap.length = 0
    for (let i = 0; i < 42; i++) {
        tilesMap.push({
            id: i,
            melted: false,
            isSpecial: i <= 10,
            connectedMaps: [],
        })
    }

}

export const getActiveTiles = () => {
    return tilesMap.filter(t => !t.melted)
}

initMap()

export const floodTile = () => {
    const activeTiles = getActiveTiles()
    const tile_to_flood = Math.floor(Math.random() * activeTiles.length)
    activeTiles[tile_to_flood].melted = true
    return activeTiles[tile_to_flood].id
}
