# Server notifications with Twilio, Node.js, and Express

[![Build Status](https://travis-ci.org/TwilioDevEd/call-tracking-node.svg?branch=master)](https://travis-ci.org/TwilioDevEd/server-notifications-node)

This application demostrates how to use Twilio to send alerts when
your errors happen in your application

## Running the Project on Your Machine

To run this project on your computer, download or clone the source. You will 
also need to download and install either [Node.js](http://nodejs.org/) 
or [io.js](https://iojs.org/en/index.html), both of which should also install 
[npm](https://www.npmjs.com/). 

You will also need to [sign up for a Twilio account](https://www.twilio.com/try-twilio) 
if you don't have one already.

### Install Dependencies

Navigate to the project directory in your terminal and run:

```bash
npm install
```

This should install all of our project dependencies from npm into a local 
`node_modules` folder.

### Configuration

Next, open `.env.sample` at the root of the project and update it with
values from your
[Twilio account](https://www.twilio.com/user/account/voice-messaging)
and local configuration. Save the file as `.env`.  You'll need to set
`TWILIO_AUTH_TOKEN`, `TWILIO_ACCOUNT_SID`.

### Running the Project

To launch the application, you can use `node .` in the project's root directory. 
You might also consider using [nodemon](https://github.com/remy/nodemon) for 
this. It works just like the node command, but automatically restarts your 
application when you change any source code files.

```bash
npm install -g nodemon
nodemon .
```

### Running Tests

Basic functional tests can be run with:

```bash
npm test
```

## License

MIT
