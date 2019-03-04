const expect = require('expect')

const {Users} = require('./users');


describe('Users', () => {

    var users;


    beforeEach(() => {
        users = new Users();
        users.users = [
        {
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        },
        {
            id: '2',
            name: 'Udgin',
            room: 'React course'
        },
        {
            id: '3',
            name: 'Bob',
            room: 'Node Course'
        }
    ]
    });


    it('should add new user', () => {
        var users = new Users;
        var user = {
            id: '123',
            name: 'Udgin',
            room: 'The Office Fans'
        };
        

        var resUser = users.addUser(user.id, user.name, user.room);
        console.log(resUser);
        expect(users.users).toMatchObject([user]);

    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = '100';
        var user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '11';
        var user = users.getUser(userId);

        expect(user).toBeFalsy();
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');
        console.log(userList);
        expect(userList).toMatchObject(['Mike', 'Bob']);
    });

    it('should return names for reacr course', () => {
        var userList = users.getUserList('React course');

        expect(userList).toMatchObject(['Udgin'])
    })
})