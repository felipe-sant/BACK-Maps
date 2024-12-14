import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/_index';

const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes());

const startServer = () => {
    app.listen(PORT, () => {
        console.clear()
        console.log(`🚀 Servidor rodando em: http://localhost:${PORT}/`);
        console.log('\nRotas disponíveis:');
        console.table([
            { Método: 'GET', Rota: 'coord/location', Query: 'lat, lon', Sobre: 'Retorna o estado com base em uma coordenada' },
            { Método: 'GET', Rota: 'coord/random', Query: 'state', Sobre: 'Retorna uma coordenada aleatória' }
        ]);
    });
};

startServer();