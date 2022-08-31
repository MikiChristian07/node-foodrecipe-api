import { User } from '../models/index.model.js';

class UserService{
    async create(data){
        const newUser = await User.create(data);
        return newUser;
    }
}

export default new UserService();