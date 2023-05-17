import MysqlRequest from '../function/mysql_request'

const mysqlRequest = new MysqlRequest()

export default class Verifieur {
    async data_is_valid(_data: string, _dataBaseName: string): Promise<boolean | void> {
        return await mysqlRequest.verifieur_data(_dataBaseName).then((reponse: any) => {
            let var_data_is_valid: boolean = false;
            reponse.forEach((element: any) => {
                if(_data === element.class_id.toString()){
                    var_data_is_valid = true;
                }
            });
            return var_data_is_valid;
        })
    }
}