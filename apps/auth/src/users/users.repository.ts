import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import {Model} from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { UserDocument } from "./models/users.schema";


@Injectable()
export class UsersRepository extends AbstractRepository<UserDocument>{
    protected readonly logger = new Logger(UsersRepository.name);

    constructor(@InjectModel(UserDocument.name) userModel: Model<UserDocument>){
        super(userModel);
    }
}