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
import SUPPORTS_STANDALONE from './_scripts/standalone';
import FETCH_BLOG_POSTS from './_scripts/blog/blog';
import FETCH_REPOS from './_scripts/repositories/repositories';
import HYDRATE_CONTACT_FORM from './_scripts/contact/contact-form';

SUPPORTS_STANDALONE();
FETCH_BLOG_POSTS();
FETCH_REPOS();
HYDRATE_CONTACT_FORM();
console.log('imports', [SUPPORTS_STANDALONE, FETCH_BLOG_POSTS, HYDRATE_CONTACT_FORM, FETCH_REPOS]);