import { Repository } from "../models/respository.interface";
import { USER_LIST } from "./user.mock";

const repositories: Repository[] = [
    {
        name: 'Ionic 3 Camera',
        description: 'This repository contains code for showing camera funtionality in Ionic 3',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 Geo-Location',
        description: 'This repository contains code for showing geo-location funtionality in Ionic 3',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 Push',
        description: 'This repository contains code for showing push funtionality in Ionic 3',
        owner: USER_LIST[1]
    },
    {
        name: 'Ionic 3 SMS',
        description: 'This repository contains code for showing sms funtionality in Ionic 3',
        owner: USER_LIST[1]
    }
]

export const REPOSITORY_LIST = repositories;