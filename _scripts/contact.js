/*
 * Copyright 2020 Giovanni Orlando Rivera
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import firebase from '../node_modules/firebase/app';
import '../node_modules/firebase/database';

const config = {
    authDomain: "giovanniorlandorivera.firebaseapp.com",
    databaseURL: "https://giovanniorlandorivera.firebaseio.com",
};

firebase.initializeApp(config);
const version = '/v0';
const api = firebase.database().ref(version);

const HYDRATE_CONTACT_FORM = () => {
    const form = document.querySelector('.contact-form');

    function onSubmit(event) {
        event.preventDefault();
        console.log(event);
        const button = document.querySelector('#contact-form__button');
        const name = document.querySelector('input[name="name"]').value.replace(/[^A-z ]/g, '');
        const email = document.querySelector('input[name="email"]').value.toLowerCase();
        const subject = document.querySelector('input[name="subject"]').value.replace(/[^\w .+]/g, '');
        const body = document.querySelector('textarea[name="body"]').value.replace(/[^\w .+]/g, '');

        const message = { name: name, email: email, subject: subject, body: body };
        var messageKey = api.child('messages').push().key;

        button.disabled = true;

        api.child('/messages/' + messageKey + '/').set(message)
            .then(function () {
                alert('Message sent successfully.');
                form.reset();
            })
            .catch(function (error) {
                alert('Your message could not be sent at the moment.')
                console.warn(error);
            })
            .then(function () {
                button.disabled = false;
            });

        api.child('/user-messages/' + name.replace(/ /g, '').toLowerCase()
            + '/' + messageKey + '/').set(message);
    };

    form.addEventListener('submit', onSubmit);
};
export default HYDRATE_CONTACT_FORM;