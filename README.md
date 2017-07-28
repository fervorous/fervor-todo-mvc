Fervor TodoMVC Demo
----

## TODO
1. Filtering
2. Counts
3. Renaming/Clean-up

## Manual setup for heroku

1. Init - `heroku create`
2. Add Postgres - `heroku addons:create heroku-postgresql`
3. Disable .env - `heroku config:set DISABLE_DOT_ENV=true`
4. Push `git push heroku master`
