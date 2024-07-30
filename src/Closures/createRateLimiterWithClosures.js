console.log("-------------createRateLimiterWithClosures-----------------");
// create a rate limit using closures

function createRateLimiter(maxReq, intervel) {
    console.log('createRateLimiter');
    let callCount = 0;
    resetIntervel = setInterval(() => callCount = 0, intervel)
    return function (fn) {
        if (callCount < maxReq) {
            callCount++
            return fn()
        } else {
            console.log("Rate limit exceeded. Please try again later.");
        }
    }
}

const rateLimiter = createRateLimiter(5, 10000)
function makeAPICall() {
    console.log('--------------------');
    console.log("API request made at " + new Date().toLocaleTimeString());
}
setInterval(() => rateLimiter(makeAPICall), 1000)