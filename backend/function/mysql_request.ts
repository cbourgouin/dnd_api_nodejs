import mysql from 'mysql';

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

db.connect((err, result) => {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL! \n"); 
});

export default class MysqlRequest {
    //récuperer toutes les classes de la table dnd5_classes
    classes(): any {
        db.query("SELECT * FROM dnd5_classes",
            (err, result) => {
                if (err) throw err;
                return result;
            }
        )
    }

    //récuperer toutes les classes de la table dnd5_classes
    spells_with_class(_class_id: string): any {
        db.query("SELECT `dnd5_spells`.* FROM `dnd5_spells`, `dnd5_classes`, `dnd5_class_spells` WHERE `dnd5_classes`.`class_id` = "+ _class_id +" AND `dnd5_classes`.`class_id` = `dnd5_class_spells`.`class_id` AND `dnd5_class_spells`.`spell_id` = `dnd5_spells`.`spell_id` ORDER BY `dnd5_spells`.`spell_id`",
            (err, result) => {
                if (err) throw err;
                return result;
            }
        )
    }
}