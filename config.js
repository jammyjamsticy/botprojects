'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN || 'GX5ARBI5VZE5Z7PUOVJBQYV2NMK5GRVV'
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAE30XK9QvIBAFj4u0WsdGtH9folUSTto77Hg3TAg9zdX7G3DecKTGXmnYAs5yPheWaDhZChBlmhFjv9CG1wXkKWcJZBiq9BoKs52XWZAa2rMkOPLNvexM5xZAW3MZCZBa0AV7qHc0YyYHBXpxuZCQTnzz7wtR8l6QIt43C525XhgZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'just_do_it'

module.exports = {
  WIT_TOKEN: 'GX5ARBI5VZE5Z7PUOVJBQYV2NMK5GRVV',
  FB_PAGE_TOKEN: 'EAAE30XK9QvIBAFj4u0WsdGtH9folUSTto77Hg3TAg9zdX7G3DecKTGXmnYAs5yPheWaDhZChBlmhFjv9CG1wXkKWcJZBiq9BoKs52XWZAa2rMkOPLNvexM5xZAW3MZCZBa0AV7qHc0YyYHBXpxuZCQTnzz7wtR8l6QIt43C525XhgZDZD',
  FB_VERIFY_TOKEN: 'just_do_it',
}
