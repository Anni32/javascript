/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    const timenow = Date.now(); //
    await new Promise(resolve => setTimeout(resolve, millis)); //creates promise that resolves after 'millis' ms.
    return timenow //return timenow after the 'millis' have elapsed
    }

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
