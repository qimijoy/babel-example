// Arrow function
const func = (a, b) => a + b;

func(1, 2);

// Array method
const a = Array.from(...[1, 2, 3]);

console.log(a);

// Promise
function timeout(duration = 0) {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
}

// Chain
timeout(1000)
	.then(() => {
		return timeout(2000);
	})
	.then(() => {
		throw new Error('hmm');
	})
	.catch((error) => {
		console.log(error);
		return Promise.all([timeout(100), timeout(200)]);
	});

// Destructurization
const c = [1, 2, 3];
const d = [...c, 4];

console.log(d);
