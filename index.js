const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const detectTone = require('./toneClassifier');
const responses = require('./responses');
require('dotenv').config();

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('✅ Bot is ready!');
});

client.on('message', async message => {
  const userMsg = message.body;
  const tone = await detectTone(userMsg);
  const replyOptions = responses[tone];
  const reply = replyOptions[Math.floor(Math.random() * replyOptions.length)];

  console.log(`[${tone.toUpperCase()}] ${userMsg} => ${reply}`);
  message.reply(reply);
});

client.initialize();
