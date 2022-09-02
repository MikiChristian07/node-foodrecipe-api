import { User } from '../models/index.model.js';

class UserService{
    async create(data){
        const newUser = await User.create(data);
        return newUser;
    }

    async findByemail(email){
        const user = await User.findOne({ email });
        return user;
    }
}

export default new UserService();