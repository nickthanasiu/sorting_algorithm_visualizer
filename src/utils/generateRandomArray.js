export const generateRandomArray = (size = 50) => {
    let randomArray = [];

    for (let i = 1; i < size; i++) {
        const randomNum = Math.ceil(Math.random() * 100);
        randomArray.push(randomNum);
    }

    return randomArray;
};