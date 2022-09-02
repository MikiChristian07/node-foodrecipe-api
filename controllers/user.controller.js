/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import _ from 'lodash';
import bcrypt from 'bcrypt';
import { UserService } from '../../services/index.services.js';

class UserController {
    async createUser(req, res) {
        // Check if user exists in db
        const existUser = await UserService.findByemail(req.body.email);

        if (!_.isEmpty(existUser)) {
            res.status(404).send({
                success: false,
                body: 'This user account already exists'
            });
        }

        // First hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        /*
        *   Take in the email and password from the body
        *   User data request
        */
        const data = {
            email: req.body.email,
            password: hashedPassword,
            name: req.body.name
        };

        // If user profile does not exist
        const user = await UserService.create(data);
        return res.status(201).send({
            success: true,
            body: 'Your account has beeen successfully created',
            user
        });
    }

    async loginUser(req, res) {

    }
}

export default new UserController();
