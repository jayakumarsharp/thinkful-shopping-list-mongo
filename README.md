1. Install MongoDB at the global level, using apt-get, by running the following command in command line:

```
sudo apt-get install -y mongodb-org
```

2. Install Mongo and Mongoose at the project level by adding the following 2 lines in your packaje.json

```
"mongodb": "^2.2.11",
"mongoose": "^4.5.9"
```

... and then by running the installation in the command line:

```
npm install
```

3. Create a folder where the database files are going to live by running this in the command line:

```
mkdir mongo_data
```

4. Create a file (called "run_mongod") containing the basic run code for the Mongo DB by running this in the command line:

```
echo 'mongod --bind_ip=$IP --dbpath=/home/ubuntu/workspace/mongo_data --nojournal --rest "$@"' > run_mongod
```

5. Activate the right privileges for the new created file "run_mongod" so it would be able to run it from command line by running this in the command line:

```
chmod a+x run_mongod
```

6. Start the Mongo DB server by running this in the command line:

```
./run_mongod
```

7. And lastly, make sure that in your root folder there is a config.js similar with the one in this repository


When you finish up for the day, before exiting your Cloud9 workspace you should stop Mongo by hitting Ctrl-c in the terminal where it is running. When you come back to work on your code you will need to restart Mongo by running ./run_mongod. If you forget to stop Mongo before exiting Cloud9 you may get an error when you next start Mongo which tells you that your database needs repairing. To fix this error you need to delete the mongod.lock file in the mongo_data directory, then restart the data-base.
