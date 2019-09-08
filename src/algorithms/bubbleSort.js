// Actions to dispatch
import { setArray } from '../actions/array';
import { setPairToCheck, setPairToSwap, setIsIterating } from '../actions/swapCheck';
import { setSorted } from '../actions/sorted';

export const bubbleSort = (stateArray, dispatch) => {
    let array = [...stateArray];
    let toDispatch = [];
    let sorted = false;

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
            toDispatch.push([true, i]);
        }       
    }

    handleDispatch(toDispatch, dispatch, array);
    return array;
};


// Recursive helper function
function handleDispatch(toDispatch, dispatch, array) {
    if (!toDispatch.length) {
        dispatch(setPairToCheck(array.map((num, index) => index)));
        setTimeout(() => {
            dispatch(setPairToCheck([]));
            dispatch(setSorted(array.map((num, index) => index)));
            dispatch(setIsIterating(false));
        }, 1000);
        return;
    }

    let isSwapComplete = toDispatch[0].length > 3;
    let isTimeToSwap = toDispatch[0].length === 3 || toDispatch[0].length === 0;
    let isTimeToMakeAnotherPass =
        toDispatch[0].length === 2 && typeof toDispatch[0][0] === "boolean";

    let dispatchFunction =
        isSwapComplete ? setArray :
        isTimeToSwap ? setPairToSwap :
        isTimeToMakeAnotherPass ? setSorted : setPairToCheck;

    // Remove first array inside toDispatch so:
    //      - first array is stored for use as dispatchFunction argument
    //      - new, shortened toDispatch array can be passed into handleDispatch recursively
    let firstArrayToDispatch = toDispatch.shift();
    dispatch(dispatchFunction(firstArrayToDispatch));

    // Call handleDispatch function recursively
    setTimeout(() => {
        handleDispatch(toDispatch, dispatch, array);
    }, 10);
}