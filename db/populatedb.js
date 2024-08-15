#! /usr/bin/env node
require('dotenv').config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  username VARCHAR ( 12 ),
  added DATE
);

INSERT INTO messages (text, username, added) 
VALUES ('Hi there!', 'Amando', '1999-01-08');

INSERT INTO messages (text, username, added) 
VALUES ('Hello World!', 'Charles', '1999-01-08');
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