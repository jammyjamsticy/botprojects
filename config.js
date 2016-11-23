'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN || 'GX5ARBI5VZE5Z7PUOVJBQYV2NMK5GRVV'
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAFR1gPfYqIBAP7e9YKGZCLB2fmr95QMhQKAOohTeYsNMvOEKZA95sa2ZAD422n1ZAnjUsOKBML32kgZC9CryKXm5ZC2MaZBi72IorZCI4SziPBrx2wHs6SnsIomosYANcQh1OjADvalfW2g4tN2ikZAeDxZAoT2PzyDkYLmLEJd1JIwZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'just_do_it'

module.exports = {
  WIT_TOKEN: 'GX5ARBI5VZE5Z7PUOVJBQYV2NMK5GRVV',
  FB_PAGE_TOKEN: 'EAAFR1gPfYqIBAP7e9YKGZCLB2fmr95QMhQKAOohTeYsNMvOEKZA95sa2ZAD422n1ZAnjUsOKBML32kgZC9CryKXm5ZC2MaZBi72IorZCI4SziPBrx2wHs6SnsIomosYANcQh1OjADvalfW2g4tN2ikZAeDxZAoT2PzyDkYLmLEJd1JIwZDZD',
  FB_VERIFY_TOKEN: 'just_do_it',
}
