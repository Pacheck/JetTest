import Operator from '../model/operator';

class OperatorController { 

    async store(req, res){
        const data = await Operator.create(req.body);
        return res.json(data);
    }

    async index(req, res){
        const data = await Operator.find({});
        return res.json(data);
    }
}

export default new OperatorController();