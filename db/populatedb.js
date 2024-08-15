#! /usr/bin/env node
require('dotenv').config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  username VARCHAR ( 12 ),
  added TIMESTAMP WITH TIME ZONE 
);

INSERT INTO messages (text, username, added) 
VALUES ('Hi there!', 'Amando', CURRENT_TIMESTAMP);

INSERT INTO messages (text, username, added) 
VALUES ('Hello World!', 'Charles', CURRENT_TIMESTAMP);
`;

const DELETE_TABLE = `
DROP TABLE messages;
`

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.RAILWAY_DB,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();