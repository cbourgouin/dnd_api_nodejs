import express from 'express';
import MysqlRequest from '../function/mysql_request';

const router = express.Router();
const mysqlRequest = new MysqlRequest();

router.post("/spells_with_class", (req, res) => {
    res.json(mysqlRequest.spells_with_class(req.body['class_id']));
});

module.exports = router