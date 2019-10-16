import { API_URL } from '../config/constants';

// Search Planets
export async function searchMusic(searchText) {
  return fetch(API_URL + "/?media=all&term=" + searchText)
    .then(res => res.json())
    .then(res => {
      if (res.resultCount > 0) {
        return res.results;
      } else {
        return [];
      }
    })
    .catch(err => {
      console.log(err);
    })
}