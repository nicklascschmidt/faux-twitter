/**

Comma-separated list of fields to expand. Expansions enable requests to expand an ID into a full object in the includes response object.

Allowed values: attachments.poll_ids,attachments.media_keys,author_id,geo.place_id,in_reply_to_user_id,referenced_tweets.id,entities.mentions.username,referenced_tweets.id.author_id

Default values: none

*/

export default [
  'attachments.poll_ids',
  'attachments.media_keys',
  'author_id',
  'geo.place_id',
  'in_reply_to_user_id',
  'referenced_tweets.id',
  'entities.mentions.username',
  'referenced_tweets.id.author_id',
];
