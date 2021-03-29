import { v4 as uuidv4 } from 'uuid';
import Operator from '../model/operator';
class OperatorController { 

    async index(request, response){
        try {
            const operator = await Operator.find({});
            return response.status(200).json(operator);
        }catch(err){
            return response.status(400).json({ message: 'Content not found' }) 
        }
    }

    async store(request, response){
        const { body } = request;
        body.id = uuidv4();
        try{
           const operator = await Operator.create(body);
           response.status(201).json(operator);
        }catch(err){
            response.status(400).json({ message: 'Error creating new operator' })
        }
    }

    async delete(request, response){
        const { id } = request.params;
        try {
            const operator = await Operator.deleteOne({ id });
            return response.status(200).json(operator);
        } catch (err) {
            return response.status(400).json({ message: 'Content error'})
        }
    }

    async update(request, response){
        const { id } = request.params;
        const { body } = request;
        try {
            const operator = await Operator.updateOne({ id }, body)
            response.status(200).json(operator)
        } catch (err) {
            response.status(204).json({ message: 'No content found '})
        }
    }
}

export default new OperatorController();