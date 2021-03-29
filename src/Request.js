const requests = {
	fetchTopCoins: `https://api.coingecko.com/api/v3/search/trending`,
	fetchTrendCoins: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false`,
	fetchFeeds: `https://api.lunarcrush.com/v2?data=feeds&key=y9ys125xujn060r5hn77p0r&symbol=BTC&limit=20&sources=news,urls`,
	fetchInfluencer: `https://api.lunarcrush.com/v2?data=influencers&key=y9ys125xujn060r5hn77p0r&symbol=BTC&days=30&order_by=volume`,
	fetchAllCoins: `https://api.lunarcrush.com/v2?data=meta&key=y9ys125xujn060r5hn77p0r`,
};
export default requests;
