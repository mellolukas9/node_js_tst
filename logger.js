const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

const emitter = new EventEmitter();

emitter.on('log', (message) => {
  fs.appendFile(path.join(__dirname, 'log.txt'), message, (err) => {
    if (err) throw err;
  });
});

emitter.on('JSON', (message) => {
  console.log(`JSON: ${message}`);
});

function log(eventName, message) {
  emitter.emit(eventName, message); //emitter.emit('tst', message); Aguardando o evento log ser chamado para executar a funcao
}

module.exports = log;
