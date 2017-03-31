---
layout: post  
title:  "How to install WordPress (CMS) on Ubuntu 16.04 LTS"  
date:   2017-03-24 10:30:00 -0400  
categories: pages blog  
---

Welcome Aboard. In this blog post, I will be teaching you about [WordPress](https://wordpress.org/), why do you need it, and how to install it in your [Ubuntu 16.04](http://releases.ubuntu.com/16.04/) Server.

# What is WordPress

It is a popular [Content Management Systems (CMS)](https://en.wikipedia.org/wiki/Content_management_system), that is used by millions of people across the globe, such as writers, celebrities, and e-commerce sites.

## Why do you Need it

WordPress makes it specially easy to get started with a Website, with an interface that is designed for content creation, yet it is powerful and configurable enough to build wide-scale applications with it.

### Find a Server

The first thing you're going to want to do is get a server running a fresh copy of Ubuntu. There are multiple ways you can achieve this.

For example:
- Set up a Virtual Machine (VM), using a tool such as [Virtualbox](https://www.virtualbox.org/)
- Sign up for Web Hosting

I generally recommend [Bluehost](https://www.bluehost.com/) or [Amazon Web Services](https://aws.amazon.com/), but there are other options.

### Updating Ubuntu Server

```bash

sudo apt-get update

sudo apt-get upgrade

```

### Installing LAMP server on Ubuntu

I wrote a blog post on [How to install Linux, Apache 2, MySQL, and PHP 7.0 (LAMP) stack on Ubuntu 16.04 LTS](http://52.36.120.148/installing-linux-apache-mysql-php-lamp-stack-ubuntu-16-04-lts/).

Make sure you check that out, for reference.

### Logging into MySQL

```

mysql -u root --password=YOUR_DB_PASSWORD

```

### Creating the WordPress Database

```

CREATE DATABASE wordpressdb;

CREATE USER YOUR_USERNAME@localhost IDENTIFIED BY 'YOUR_PASSWORD'

GRANT ALL PRIVILEGES on wordpressdb.* TO YOUR_USERNAME@localhost;

FLUSH PRIVILEGES;

exit

```

### Installing WordPress

Navigate into the [temporary files](https://help.ubuntu.com/community/LinuxFilesystemTreeOverview) directory

```

cd /tmp

```

Download a fresh copy of [WordPress](http://wordpress.org/latest.zip)

```

sudo apt-get install wget

wget http://wordpress.org/latest.zip

```

Unzip the archive into the webserver root directory

```

sudo apt-get install unzip

unzip -q latest.zip -d /var/www/html/

```

Recursively assign (change the owner of) the WordPress installation directories to [**www-data**](http://askubuntu.com/questions/873839/what-is-the-www-data-user) user

This must be done as su (root)

```

chown -R www-data:www-data /var/www/html/wordpress

```

Change directory permissions to [**0755**](https://codex.wordpress.org/Changing_File_Permissions), this makes it readable, writable and executable for the **User**; readable and executable for the **Group**; readable and executable to the outside **World**:

```

chmod -R 755 /var/www/html/wordpress

```

Create the uploads directory for your assets, and make sure to pass in the -p flag. This tells it to produce no error if is already existing, and make parent directories as needed

```

mkdir -p /var/www/html/wordpress/wp-content/uploads

```

Recursively assign the uploads directory to **www-data** user

```

chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads

```

### Setting up .htaccess

[.htaccess](http://www.htaccess-guide.com/) is a configuration file used on web servers running the Apache, used to enable/disable additional functionality and features in the web page.

If you followed along up to this point, you will probably notice that you have WordPress installed as a sub-directory of your web root. See for yourself, try to access the IP Address at the moment... what you will get is the default Apache page, which is not ideal.

No need to worry, though. I have a plan.

Navigate into the sub directory and copy the index.php and .htaccess files into the web root directory.

```

cd /var/www/html/wordpress

cp index.php ../index.php

cp .htaccess ../.htaccess

```

Go up to the web root

```

cd /var/www/html

```

Edit the .htaccess file to tell the web server where to find your installation directory when the user sends a request to your IP Address.

```

sudo vim .htaccess

```

Replace the existing content with the following:

```

# BEGIN WordPress

RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]

# END WordPress

```

Change the file permissions so that WordPress can write to it, if necessary (required for changing permalinks structure)
```
sudo chmod 666 .htacess
```

Enable the rewrite module
```
sudo a2enmod rewrite
```

#### Update apache2.conf to AllowOverride All
```
cd /etc/apache2
sudo vim apache2.conf
```

By default it's set to AllowOverride **None**
```

Options Indexes FollowSymLinks
AllowOverride All
Require all granted

```

#### Update index.php to use your new config
Change

```php
require( dirname( __FILE__ ) . '/wp-blog-header.php' );
```

to

```php
require( dirname( __FILE__ ) . '/wordpress/wp-blog-header.php' );

```

Restart the Apache service

```

sudo systemctl restart apache2

```

### Test your setup

Refresh the webpage, and you should see the setup screen. Follow the steps to properly configure your preferences such as language, and database connection variables. If done correctly, you should be sent to your admin page.

And there you go, you have correctly installed and configured WordPress on your Ubuntu 16.04 LTS instance!

If you enjoyed this blog post or found it helpful in any way, make sure to follow me on Twitter to find out when a new one is available.

Twitter: [@giovanni0918](https://twitter.com/giovanni0918)

Github: [giovanni0918](https://github.com/giovanni0918)

Website: [giovanni-orlando.com](https://giovanni-orlando.com)