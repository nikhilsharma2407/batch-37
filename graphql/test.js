const e = require("express");

const friendsData = [
    {
        "id": "1",
        "title": "ms",
        "firstName": "Sara",
        "lastName": "Andersen",
        "picture": "https://randomuser.me/api/portraits/women/58.jpg"
    },
    {
        "id": "2",
        "title": "miss",
        "firstName": "Edita",
        "lastName": "Vestering",
        "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
    },
    {
        "id": "3",
        "title": "ms",
        "firstName": "Adina",
        "lastName": "Barbosa",
        "picture": "https://randomuser.me/api/portraits/med/women/28.jpg"
    },
    {
        "id": "4",
        "title": "mr",
        "firstName": "Roberto",
        "lastName": "Vega",
        "picture": "https://randomuser.me/api/portraits/med/men/25.jpg"
    },
    {
        "id": "5",
        "title": "mr",
        "firstName": "Rudi",
        "lastName": "Droste",
        "picture": "https://randomuser.me/api/portraits/med/men/83.jpg"
    },
    {
        "id": "6",
        "title": "mrs",
        "firstName": "Carolina",
        "lastName": "Lima",
        "picture": "https://randomuser.me/api/portraits/med/women/5.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d0",
        "title": "mr",
        "firstName": "Emre",
        "lastName": "Asikoglu",
        "picture": "https://randomuser.me/api/portraits/med/men/23.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d1",
        "title": "mr",
        "firstName": "Kent",
        "lastName": "Brewer",
        "picture": "https://randomuser.me/api/portraits/med/men/52.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d2",
        "title": "mr",
        "firstName": "Evan",
        "lastName": "Carlson",
        "picture": "https://randomuser.me/api/portraits/med/men/80.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d3",
        "title": "mr",
        "firstName": "Friedrich-Karl",
        "lastName": "Brand",
        "picture": "https://randomuser.me/api/portraits/med/men/7.jpg"
    }
];


const userData = {
    username: 'nikhil101',
    name: "Nikhil",
    friendList: ['1', '2','3']
};

const id = '3';
userData.friendList = userData.friendList.filter(friendID=>friendID !== id);
console.log(userData);