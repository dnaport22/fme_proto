export function get(url) {
  return fetch(url)
      .then((response) => response.json());
}

export function getNews(url) {
  return get(url)
    .then((res) => {
      return res;
    });
}
