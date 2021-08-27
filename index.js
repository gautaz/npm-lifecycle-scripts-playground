console.log(`_________________${process.env.npm_lifecycle_event}_________________`);
Object.entries(process.env)
	.sort(([l], [r]) => l < r ? -1 : l > r ? 1 : 0)
	.forEach(([key, value]) => console.log(`${key} = ${value}`));
console.log('___________________________________________________');
