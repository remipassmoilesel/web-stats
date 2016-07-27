
/**

STORE SESSIONS

... at beginning of use

 */

CREATE TABLE IF NOT EXISTS data_sessions (
  id  SERIAL PRIMARY KEY,
  datetime    TIMESTAMP DEFAULT now(),

  request_from    VARCHAR(25),
  navigator_language    VARCHAR(15),
  user_agent    VARCHAR(130)

);

/**

And store all requests after

 */

CREATE TABLE IF NOT EXISTS data_requests (
  id  SERIAL PRIMARY KEY,
  datetime    TIMESTAMP DEFAULT now(),

  request_from    VARCHAR(25),
  event_name    TEXT,
  event_data    TEXT
);
