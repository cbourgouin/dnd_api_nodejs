import express from 'express';
import MysqlRequest from '../function/mysql_request';

const router = express.Router();
const mysqlRequest = new MysqlRequest();

router.get("/classes", async (req, res) => {
    mysqlRequest.classes().then((reponse: JSON) => {
        res.json(reponse);
    });
});

module.exports = router