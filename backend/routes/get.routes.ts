import express from 'express';
import MysqlRequest from '../function/mysql_request';

const router = express.Router();
const mysqlRequest = new MysqlRequest();

router.get("/classes", (req, res) => {
    res.json(mysqlRequest.classes());
});

module.exports = router