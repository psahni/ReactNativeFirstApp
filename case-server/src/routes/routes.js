'use strict';
const cases = require('../controllers/caseCtrl');
const authentication = require('../controllers/authenticationCtrl');

module.exports = (app) => {

    app.route('/cases').get(cases.getAll);
    //app.route('/cases/:id').get(cases.get);
    app.route('/login').post(authentication.authenticate);
    app.route('/logout').get(authentication.logout);
};