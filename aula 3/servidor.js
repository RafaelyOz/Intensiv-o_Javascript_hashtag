const http = require('http');
const express = require('express');
const aplicacao = express();
const servidorHttp = http.createServer(aplicacao);

const io = require('socket.io')(servidorHttp);

aplicacao.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('um usuario conectou');

    socket.on('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    });
});

servidorHttp.listen(1000, () => {
    console.log('Servidor rodando na porta 1000');
});
