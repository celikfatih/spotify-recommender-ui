export const randomBetween = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
}

export const randomColor = () => {
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return `rgb(${r},${g},${b})`;
}