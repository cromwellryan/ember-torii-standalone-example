Dead simple ember app using torii without ember-simple-auth against a stubbed out
Rails backend.

### Running the ember client:
1. `cd my_client`
1. `npm install`
1. `ember s --proxy http://0.0.0.0:3000`

### Running the rails server
1. `cd my_server`
1. `bundle install`
1. `rails s`

### Unprotected Routes
* [/a](http://0.0.0.0:4200/a)
* [/b](http://0.0.0.0:4200/b)
* [/protected/c](http://0.0.0.0:4200/protected/c)
* [/protected/d](http://0.0.0.0:4200/protected/d)

**Login:** cromwell/password

