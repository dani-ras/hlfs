export function pick(src = {}, keys = []) {
    return keys.reduce((prev, curr) => {
        prev[curr] = src[curr]
        return prev
    }, {})
}

export function getNextId(dataSet) {
    try {
        const mapped = dataSet.map(x => x.id)
        const maxId = mapped.sort((a, b) => b - a)[0] ?? 0
        const nextId = parseInt(maxId, 10) + 1
        return nextId
    } catch (error) {
        console.log('failed to get with Next Id');
    }
}