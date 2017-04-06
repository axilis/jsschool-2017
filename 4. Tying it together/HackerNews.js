const axios = require('axios');
const Promise = require('bluebird');


const URL_TOP_ENTRIES = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';


function fetchEntryForId(id) {
  const entryURL = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
  return axios.get(entryURL).then(res => res.data);
}

function fetchEntriesByIds(ids) {
  return Promise.map(ids, fetchEntryForId);
}

function mapEntriesToData(entries) {
  return Promise.map(entries, entry => (
    {
      title: entry.title,
      link: entry.url,
      source: 'HackerNews',
      metadata: {
        upvotes: entry.score,
      },
    }
  ));
}

function fetchTopIds(maxEntries) {
  return axios.get(URL_TOP_ENTRIES).then(res => res.data.slice(0, maxEntries));
}


function fetchTopEntries(limit) {
  return fetchTopIds(limit).then(fetchEntriesByIds).then(mapEntriesToData);
}


module.exports = {
  fetchTopEntries,
};
