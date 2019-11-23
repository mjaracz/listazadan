export const getTasks = (url: string) => ({
  type: 'GET_TASKS',
  url: url
});

export const getComments = (url: string) => ({
  type: 'GET_COMMENTS',
  url: url
});
