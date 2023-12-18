import axios from 'axios';

export const fetchPosts = () => async (dispatch: any, getState: any) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  dispatch({ type: 'FETCH_POSTS', text: response.data });
};
