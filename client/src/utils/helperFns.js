const baseUrl = 'http://localhost:8000'
const getNewGoal = (position) => {
    post(`${baseUrl}/goalLocation`, { ballPos: position, radius: 1 })
}

const getIsCloseToGoal = (position) => {
    post(`${baseUrl}/isCloseToGoal`, { ballPos: position, radius: 1 })
}


function post(_url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetch(_url, requestOptions);
}
