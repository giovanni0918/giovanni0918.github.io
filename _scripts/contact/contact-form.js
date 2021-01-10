/*
 * Copyright 2021 Giovanni Orlando Rivera
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
import { ContactService } from './contact.service';

const HYDRATE_CONTACT_FORM = () => {
    const form = document.querySelector('.contact-form');
    const contactService = new ContactService();

    function onSubmit(event) {
        event.preventDefault();

        const button = document.querySelector('#contact-form__button');
        const name = document.querySelector('input[name="name"]').value.replace(/[^A-z ]/g, '');
        const email = document.querySelector('input[name="email"]').value.toLowerCase();
        const subject = document.querySelector('input[name="subject"]').value.replace(/[^\w .+]/g, '');
        const body = document.querySelector('textarea[name="body"]').value.replace(/[^\w .+]/g, '');

        const message = { name: name, email: email, subject: subject, body: body };

        button.disabled = true;

        contactService.sendMessage(message)
            .then(function (result) {

                const { success, error } = result;

                if (success === true) {
                    alert('Message sent successfully.');
                    form.reset();
                } else {
                    alert('Your message could not be sent at the moment.')
                    console.warn(error);
                }
            })
            .then(function () {
                button.disabled = false;
            });
    };

    form.addEventListener('submit', onSubmit);
};
export default HYDRATE_CONTACT_FORM;