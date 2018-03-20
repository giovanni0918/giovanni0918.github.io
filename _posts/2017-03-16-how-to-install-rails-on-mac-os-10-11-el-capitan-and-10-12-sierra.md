---
layout: post  
title:  "How to install Rails on Mac OS 10.11 El Capitan and 10.12 Sierra"  
date:   2017-03-16 17:27:00 -0400  
categories: pages blog  
---

# Rails

[Rails][Rails] is a server-side web application framework running on the [Ruby][Ruby] programming language. It specializes in [Convention Over Configuration (COC)](https://en.wikipedia.org/wiki/Convention_over_configuration "Convention Over Configuration") and [Don't repeat yourself (DRY)](https://en.wikipedia.org/wiki/Don't_repeat_yourself "Don't repeat yourself"). 

In order to get started with Rails, you must first install it on your computer. This tutorial will be focused on Mac OS, specifically in version 10.11 El Capitan and 10.12 Sierra. I will be sharing a blog post for Windows, as well as Linux.

Mac OS comes with Ruby pre-installed out-of-the-box (OOTB), but you'll likely want to update it to a more recent version. We will be using [Homebrew](https://brew.sh/ "Homebrew") for this. 


# Disclosure

I will **assume** you already have [Git](https://git-scm.com/ "Git version control system") installed and configured correctly. If you haven't done so, make sure to check out the official [documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git "Installing Git").

You can validate the install was succesful by running:

```
git config --list
```

> output: git config --global color.ui true  
> git config --global user.name "Jon Doe"  
> git config --global user.email "foo@bar.com"  
> ssh-keygen -t rsa -C "foo@bar.com"  


# Homebrew 

A package manager for Mac OS which makes it easier to install files on your computer.

To install, copy the following command and paste it into your terminal:

```ruby
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

That will install Homebrew and its corresponding documentation / dependencies.

You can confirm that it installed correctly by running:

```
brew help
```

**If you already had Homebrew installed, listen up:**

I had to run the following commands to get it to work.

```
brew link --overwrite autoconf 

brew link --overwrite pkg-config  

brew link --overwrite rbenv  

brew link --overwrite ruby-build  
```


The next thing we need to set up is [rbenv][rbenv].


# rbenv

A Ruby version management tool built by [Sam Stephenson][Sam Stephenson].

Installation: 
```
brew install rbenv ruby-build
```

Add rbenv to our .bash_profile so that it is available to us whenever we open a Terminal. 

```bash 
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile

source ~/.bash_profile
```

The next step will be to enable the [xcode command line developer](https://developer.apple.com/library/content/technotes/tn2339/_index.html) tools.

```
xcode-select --install
```
Having done so, we proceed to finding our new Ruby build.

# Ruby

To list available Ruby versions:

```
rbenv install --list
```

Select Ruby version (opt for the latest stable build, for me it is 2.3.0, **yours may vary**)

We will now run two commands:

1. `rbenv install 2.3.0`  

    Sets a local application-specific Ruby version by writing the version name to a .ruby-version file in the current directory. This version overrides the global version.

2. `rbnev global 2.3.0`  

    Sets the global version of Ruby to be used in all shells by writing the version name to the ~/.rbenv/version file.

Now, validate the install
```ruby
ruby -v
```

If everything went correctly, it should output the new [Ruby][Ruby] version.

You can also test this by running: 

```
rbenv version
```

# Installing Rails

To add [Rails][Rails] (or any other valid gem, as a matter of fact), to your [RubyGems][RubyGems] use the command **gem install**.

```ruby
gem install rails -v 5.0.2
```

In order to be able to execute it from the command line interface (CLI) or terminal, you will need to tell rbenv to see it:

```
rbenv rehash
```

This command installs shims for all Ruby executables known to [rbenv][rbenv] (i.e. ~/.rbenv/versions/bin/).

Another useful command is **rbenv which**; it displays the full path to the executable that rbenv will invoke when you run the given command.

For example: 

```
rbenv which rails
```

> output: /Users/giovanniorlando/.rbenv/versions/2.3.0/bin/rails

You can validate the installation using:

```ruby
rails -v
```

> output: Rails 5.0.2

[Rails][Rails] comes with [sqlite3][sqlite3] support built in, which is great for development and testing, but not my first choice for a production database (DB).

My relational database of choice is [MySQL][MySQL]. 

You can install it using [Homebrew][Homebrew]:
```
brew install mysql
```

This will setup a MySQL database without a root password. To secure it run:
```
mysql_secure_installation
```

**The following step is optional**

To launch MySQL on startup:
```bash
ln -sfv /usr/local/opt/mysql/*plist ~/Library/LaunchAgents
```

To launch now:
```bash
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
```

By default the database user is **root** with no password. You can test the connection by running: 

```
mysql --user=root mysql
```
If you have assigned a password to the root account, you must also supply a --password or -p option, e.g. `mysql --user=root mysql --password=foobar`  

After you have tested your connection, the next step would be to scaffold a sample project:

1. Navigate into your work dir

    ```bash
    cd ~/Sites
    ```

2. Choose a database engine:

    - To use [sqlite3][sqlite3] (default):
    
    ```ruby
    rails new myrailsapp
    ```

    - To use [MySQL][MySQL] (recommended):
    
    ```ruby
    rails new myrailsapp -d mysql
    ```

3. Navigate into the project dir:

    ```bash
    cd myrailsapp
    ```

4. Use [rake][rake] to spin up a database:

    ```
    rake db:create
    ```

5. Serve locally:
    ```ruby
    rails server
    ```

You can now access your app via <http://localhost:3000>

And there you have it, you have successfully install Rails, and created your first project.

If you enjoyed this blog post or found it helpful in any way, make sure to follow me on Twitter to find out when a new one is available.

Twitter: [@giovanni0918](https://twitter.com/giovanni0918 "@giovanni0918 on Twitter")  

Github: [giovanni0918](https://github.com/giovanni0918 "@giovanni0918 on GitHub")  

Website: [giovanni-orlando.com](https://giovanni-orlando.com/ "Giovanni Orlando on the Web")  


[Ruby]: https://en.wikipedia.org/wiki/Ruby_(programming_language) "Ruby Language"  
[RubyGems]: https://rubygems.org/ "RubyGems"  
[Rails]: https://github.com/rails/rails "Ruby on Rails GitHub repo"  
[Homebrew]: https://brew.sh/ "Homebrew site"  
[Sam Stephenson]: https://github.com/sstephenson "@sstephenson on GitHub"  
[rbenv]: https://github.com/rbenv/rbenv "rbenv GitHub repo"  
[ruby-build]:  https://github.com/rbenv/ruby-build "ruby-build GitHub repo"  
[sqlite3]: https://www.sqlite.org/  
[MySQL]: https://www.mysql.com/ "MySQL"  
[rake]: https://github.com/ruby/rake "rake GitHub repo"  