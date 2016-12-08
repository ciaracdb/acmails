import {Component} from '@angular/core';

@Component({
    selector: 'mails',
    templateUrl: 'templates/mails.html'
})

export class MailsComponent {
    constructor() {
        let ImapClient = require('emailjs-imap-client');
        let client = new ImapClient(host, port, {
            auth: {user: username, pass: password}
        });

        client.onerror = function(error){
            console.log(error);
        };

        client.connect().then(() => {
            console.log('test');
        });
    }
}
