'use strict';
const _ = require('lodash');
const uuid = require('uuid');

const users = [
    { userName: "admin", password: "admin" },
    { userName: "logrhythmadmin", password: "logrhythm!1" }
]

const tokens = [];

const authenticate = (req, res) => {
    const { userName, password } = req;
    const token = req.headers.authentication;
    if (token) {
        const existingConnection = tokens.find(tokens, { token, userName });
        if (existingConnection) {
            return res.send(existingConnection);
        }
    }

    const isValid = _.findIndex(users, { userName, password }) >= 0;

    if (isValid) {
        const newToken = { token: uuid(), userName };

        tokens.push(newToken);

        return res.send(newToken);
    }

    res.status(401).send("Invalid credentials");
}

const logout = (req, res) => {
    const token = req.headers.authentication;
    tokens = _.omit(tokens, { token });
}

module.exports = {
    authenticate,
    logout
}