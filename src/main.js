// Arrow function
const func = (a, b) => a + b;

// Array method
const a = Array.from(...[1, 2, 3])

// Promise
function timeout(duration = 0) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, duration);
	})
}

// Chain
const p = timeout(1000).then(() => {
	return timeout(2000);
}).then(() => {
	throw new Error("hmm");
}).catch(err => {
	return Promise.all([timeout(100), timeout(200)]);
})

// Destructurization
const c = [1, 2, 3];
const d = [...c, 4];
