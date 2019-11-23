export interface Store {
	loading: boolean;
	tasks: task[];
	comments: comment[];
	error: {}
}

export interface task {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export interface comment {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}
