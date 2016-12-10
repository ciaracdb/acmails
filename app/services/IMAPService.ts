import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

let ImapClient = require('emailjs-imap-client');

@Injectable()
export class IMAPService {
    clients: Array<any>;

    connect(host, port, user, password) {
        this.clients.push(new ImapClient(host, port, {
            auth: {user: user, pass: password}
        }));
    }
}