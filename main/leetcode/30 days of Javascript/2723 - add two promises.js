/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    a = await promise1; //gets promise1 value
    b = await promise2; //gets promise2 value
    return a + b; //returns the promised values sum
};
