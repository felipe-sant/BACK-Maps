import cors from 'cors';
import express from 'express';
import routes from './routes/_index';

const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes());

const startServer = () => {
    app.listen(PORT, '0.0.0.0',  () => {
        console.clear()
        console.log(`🚀 Servidor rodando na porta: ${PORT}`);
        console.log('\nRotas disponíveis:');
        console.table([
            { Método: 'GET', Rota: 'coord/location', Query: 'lat, lon', Sobre: 'Retorna o informações com base em uma coordenada' },
            { Método: 'GET', Rota: 'coord/randomCoord', Query: 'state?', Sobre: 'Retorna uma coordenada aleatória' }
        ]);
    });
};

startServer();