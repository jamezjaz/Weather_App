const gihpyApi = (() => {
  async function giphyJson(giphy) {
    const giphyDetails = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=MRYFk4PKhFJbLnOPOLl3eNWfWa9hrNtn&s=${giphy}`, { mode: 'cors' });
    const data = await giphyDetails.json();
    return data;
  }
  return {
    giphyJson,
  };
})();

export default gihpyApi;