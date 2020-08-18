import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import path from 'path'

const AppMiddleware = new express();

//body parser middleware
AppMiddleware.use(bodyParser.json());
//cors middleware
// AppMiddleware.use(cors());
//helmet middleware
AppMiddleware.use(helmet());
//body parser
AppMiddleware.use(bodyParser.urlencoded({ extended: false }));
//static files
AppMiddleware.use(express.static( 'public'));

export default AppMiddleware;

