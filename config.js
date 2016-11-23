'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN || 'GX5ARBI5VZE5Z7PUOVJBQYV2NMK5GRVV'
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAE30XK9QvIBALE70ZCgiMGTQegRvDVWjwPSs0AvqisoO8mBK0l1zqzNqm8AZBBdnXRdbrQAabFO4l6BRsienZCGeuaVL0WSiV2SZCVRFMZC2h4NvZB13C6ZBGSsSjj920qN1Bz5pJTjPapEylBwTxJ0rG9ZCCRgOdHhTbJBwjvbWgZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'just_do_it'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}
