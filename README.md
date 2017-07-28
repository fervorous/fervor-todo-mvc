Fervor Demo App
----

## Manual setup for heroku

1. Init - `heroku create`
2. Add Postgres - `heroku addons:create heroku-postgresql`
3. Disable .env - `heroku config:set DISABLE_DOT_ENV=true`
4. Set HOST - `heroku config:set HOST=https://goalboard-fervor-test.herouapp.com`
4. Push `git push heroku master`
