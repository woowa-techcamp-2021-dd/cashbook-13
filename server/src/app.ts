import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { sequelize } from './models';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
app.use(cors());
app.use(
	session({ secret: 'SECET_CODE', resave: true, saveUninitialized: false })
);

app.use(passport.initialize());
app.use(passport.session());
app.get('/', (req, res) => {
	console.log(123, req.session);
});

app.use('/api', apiRouter);

app.use(cors());

app.get('/', (_, res) => {
	res.send('<h1>우아한 가계부 13팀 서버입니다.</h1>');
});

app.listen(PORT, async () => {
	console.log(`server on ${PORT}`);

	await sequelize
		.authenticate()
		.then(async () => {
			console.log('connection success');
		})
		.catch((e) => {
			console.log('not connection');
		});
});
