import { User } from "../models/user.interface";

const userList: User[] = [
    {
        name: 'hiteshtare',
        location: 'India',
        company: 'Diebold Nixdorf',
        email: 'hitesh.tare@diebold.com',
        bio: 'I love developing Web Apps!',
        avatar_url: 'http://avatars.jurko.net/uploads/avatar_25288.jpg'
    },
    {
        name: 'paulhalliday',
        location: 'India',
        company: 'Anglo',
        email: 'mukesh.solanki@diebold.com',
        bio: 'I am aquahobbist!',
        avatar_url: 'http://avatars.jurko.net/uploads/avatar_25288.jpg'
    }
];

export const USER_LIST = userList;