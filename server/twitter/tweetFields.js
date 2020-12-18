/**

Comma-separated list of fields for the Tweet object.

Allowed values:
attachments,author_id,context_annotations,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,lang,non_public_metrics,organic_metrics,possibly_sensitive,promoted_metrics,public_metrics,referenced_tweets,source,text,withheld

Default values:
id,text

OAuth1.0a User Context authorization required if any of the following fields are included in the request:
non_public_metrics,organic_metrics,promoted_metrics

*/

export default [
  // default
  "id",
  "text",
  // allowed & public
  "attachments",
  "author_id",
  "context_annotations",
  "conversation_id",
  "created_at",
  "entities",
  "geo",
  "in_reply_to_user_id",
  "lang",
  "possibly_sensitive",
  "public_metrics",
  "referenced_tweets",
  "source",
  "withheld",
  // non-public
  "non_public_metrics",
  "organic_metrics",
  "promoted_metrics",
];
