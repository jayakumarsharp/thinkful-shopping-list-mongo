Install MongoDB using apt-get:
sudo apt-get install -y mongodb-org

npm install

mkdir mongo_data

echo 'mongod --bind_ip=$IP --dbpath=/home/ubuntu/workspace/mongo_data --nojournal --rest "$@"' > run_mongod

chmod a+x run_mongod

./run_mongod


When you finish up for the day, before exiting your Cloud9 workspace you should stop Mongo by hitting Ctrl-c in the terminal where it is running. When you come back to work on your code you will need to restart Mongo by running ./run_mongod. If you forget to stop Mongo before exiting Cloud9 you may get an error when you next start Mongo which tells you that your database needs repairing. To fix this error you need to delete the mongod.lock file in the mongo_data directory, then restart the database.
