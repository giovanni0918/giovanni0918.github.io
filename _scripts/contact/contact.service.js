import firebase from 'firebase/app';
import 'firebase/database';

/**
 * @typedef {{ name: name, email: email, subject: subject, body: body }} Message
 * @typedef {Promise<{success: boolean, error: Error>} SendMessageResult
 */

const config = {
    authDomain: "giovanniorlandorivera.firebaseapp.com",
    databaseURL: "https://giovanniorlandorivera.firebaseio.com",
};

class ContactService {


    constructor() {
        firebase.initializeApp(config);
        this.version = '/v0';
        this.api = firebase.database().ref(this.version);
    }

    /**
     * @param {Message} message The message that will be sent
     * @returns {SendMessageResult} A promise that the message has been sent
     */
    async sendMessage(message) {
        const messageKey = this._generateMessageKey();

        const name = message.name.replace(/ /g, '').toLowerCase();

        try {
            await this.api.child('/messages/' + messageKey + '/').set(message);

            await this.api.child('/user-messages/' + name + '/' + messageKey + '/').set(message);
            
            return { success: true, error: null};
        } 
        catch (error) {
            return { success: false, error };
        }
    }

    /**
     * @returns {string} Message key reference generated
     */
    _generateMessageKey() {
        var messageKey = this.api.child('messages').push().key;
        return messageKey;
    }

}

export { ContactService }