# LaundryHelp
Support app for laundries

![Screenshot](http://i.imgur.com/zYW3L5d.png)

Using meteor and angularJS 2 thanks to http://www.angular-meteor.com/


[![license](https://img.shields.io/github/license/BdEINSALyon/LaundryHelp.svg)](https://opensource.org/licenses/lgpl-3.0.html)
[![Dependency Status](https://david-dm.org/BdEINSALyon/LaundryHelp.svg)](https://david-dm.org/BdEINSALyon/LaundryHelp)
STATUS : IN DEVELOPMENT
## Getting started

Install meteor (https://www.meteor.com/install)

`git clone https://github.com/BdEINSALyon/LaundryHelp.git`  
`cd LaundryHelp`  
`meteor npm install`  
`meteor` to launch the app ( http://localhost:3000/ )

To reset the db : `meteor reset`  
The db will be populated with the data in **server/load-laundries.ts**

To see saved tickets (for the moment) :  
`meteor mongo`  
`db.tickets.find({});`

## Use with Dokku :

Install dokku-mongo plugin : https://github.com/dokku/dokku-mongo

`dokku plugin:install https://github.com/dokku/dokku-mongo.git mongo`  
`dokku apps:create <appName>`  
`dokku mongo:create LaundryHelp`  
`dokku mongo:link LaundryHelp <appName>`  
`dokku config:set <app> ROOT_URL=<url>`  
`git remote add dokku dokku@yourHost:<app>`  
`git push dokku master`  

## TODO :

1. Add all laundries to **server/load-laundries.ts**
2. Add user accounts
3. Manager interface
4. Send a mail when a ticket is received with a link to edit the ticket
5. Configure Angular2 in Production Mode
6. Improve CSS/UI
