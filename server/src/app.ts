import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use(cors());

app.get('/', (_, res) => {
	res.send('<h1>우아한 가계부 13팀 서버입니다.</h1>');
});

app.listen(PORT, () => {
	console.log(`server on ${PORT}`);
});
