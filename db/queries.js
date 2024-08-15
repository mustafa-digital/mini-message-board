const pool = require('./pool');

async function getMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function getSingleMessage(messageId) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [messageId]);
  return rows[0];
}

async function addMessage(text, username, added) {
  const result = await pool.query('INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)', [text, username, added]);
  return result;
}

module.exports = {
  getMessages,
  getSingleMessage,
  addMessage
}