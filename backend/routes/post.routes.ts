import express from 'express'
import MysqlRequest from '../function/mysql_request'
import Verifieur from '../function/verifieur'

const router = express.Router()
const mysqlRequest = new MysqlRequest()
const verifieur = new Verifieur()

router.post('/spells_with_class', async (req, res) => {
    if (await verifieur.data_is_valid(req.body['class_id'], 'dnd5_classes.class_id')) {
        mysqlRequest
            .spells_with_class(req.body['class_id'])
            .then((reponse: JSON) => {
                res.json(reponse)
            })
    }else{
        res.status(400).send("La requête n'est pas valide");
    }
})

module.exports = router
