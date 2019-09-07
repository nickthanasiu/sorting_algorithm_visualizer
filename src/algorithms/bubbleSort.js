export const bubbleSort = (array, dispatch) => {
    let array = [...array];
    toDispatch = [];
    sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = array.length; i > 0; i--) {
            for (let j = 0; j < i - 1; j++) {
                toDispatch.push([j, j + 1]);

                if (array[j] > array[j + 1]) {
                    sorted = false;
                    toDispatch.push([j, j + 1, true]);
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    toDispatch.push([...array]);
                    toDispatch.push([]);
                }
            }
            toDispatch([true, i]);
        }       
    }

    handleDispatch(toDispatch, dispatch, array);
    return array;
};


// Helper
function handleDispatch(toDispatch, dispatch, array) {
    
}