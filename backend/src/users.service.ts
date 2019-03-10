import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUsers = () => ([{
        id: '1',
        firstName: 'Alex',
        lastName: 'K',
        password: '1111',
        email: 'alex@eddf.df'
    },{
        id: '2',
        firstName: 'Max',
        lastName: 'K',
        password: '1111',
        email: 'max@eddf.df'
    },{
        id: '3',
        firstName: 'Bob',
        lastName: 'F',
        password: '1111',
        email: 'bob@eddf.df'
    }
    ])
}
