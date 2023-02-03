const requests = {
  fetchTopCoins: `https://api.coingecko.com/api/v3/search/trending`,
  fetchTrendCoins: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false`,

  fetchAllCoins2: `https://lunarcrush.com/api3/coins?sort=market_cap&limit=100`,
  fetchFeeds2: `https://lunarcrush.com/api3/feeds?since=1w`,
  fetchInfluencer2: `https://lunarcrush.com/api3/coins/influencers?limit=20`,
};
export default requests;
