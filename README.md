# LaundryHelp
Support app for laundries

![Screenshot](http://i.imgur.com/zYW3L5d.png)

Using meteor and angularJS 2 thanks to http://www.angular-meteor.com/

STATUS : IN DEVELOPMENT


## Getting started

Install meteor (https://www.meteor.com/install)

`git clone https://github.com/BdEINSALyon/LaundryHelp.git`  
`meteor npm install`  
`meteor` to launch the app ( http://localhost:3000/ )

To reset the db : `meteor reset`  
The db will be populated with the data in **server/load-laundries.ts**

To see saved tickets (for the moment) :  
`meteor mongo`  
`db.tickets.find({});`

## Use with Dokku :

Install dokku-mongo plugin : https://github.com/dokku/dokku-mongo

`dokku mongodb:restart`  
`dokku mongodb:create LaundryHelp`  
`dokku mongodb:link LaundryHelp <app>`

## TODO :

1. Check mail adresss
2. Add all laundries to **server/load-laundries.ts**
3. User accounts, authentication and permissions (meteor remove insecure)
4. Privacy (meteor remove autopublish)
5. Manager interface
6. Send a mail when a ticket is received with a link to edit the ticket
7. Configure Angular2 in Production Mode
8. Improve CSS/UI


## License
GNU General Public License (see LICENSE)
