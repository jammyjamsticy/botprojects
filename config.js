'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN || 'GX5ARBI5VZE5Z7PUOVJBQYV2NMK5GRVV'
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAFR1gPfYqIBAHChkmgw9TOwR2TLUV8hZCq4TUZBuwO7xvJpTD8LJvyf7xYQ6fAZA0JlSVKu5Q8T4ie5hhAo53SuSIwza4Tjqpd30nDx5IB79Pr4Cigz5X6q4FDOqukvSkWaeSqAO2eTpTNm88pop3ffZATXehLZCPZBy02yYguAZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'just_do_it'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}
