import axios from 'axios';

export async function getReddits(searchTerm, searchLimit, sortBy) {
  const data = await axios.get(`https://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`);
  const dataList = data.data.data.children;
  const reddits = dataList.map(item => item.data); //transform into array of objects
  return reddits;
}
