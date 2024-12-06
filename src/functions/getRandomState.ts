function getRandomState(states: any): any {
    return states.features[Math.floor(Math.random() * states.features.length)];
}

export default getRandomState;