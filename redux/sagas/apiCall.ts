export const getTasks = async (signal: AbortSignal) =>
	fetch('https://jsonplaceholder.typicode.com/todos',
		{
			method: 'GET',
			signal,
		}
	).then(res => res.json());

export const getComments = async (signal: AbortSignal) =>
	fetch('https://jsonplaceholder.typicode.com/comments',
		{
			method: 'GET',
			signal,
		}
	).then(res => res.json());
