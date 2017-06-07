<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt="Twilio" width="250" />
</a>

# Server notifications with Twilio, Node.js, and Express

[![Build Status](https://travis-ci.org/TwilioDevEd/call-tracking-node.svg?branch=master)](https://travis-ci.org/TwilioDevEd/server-notifications-node)

Use Twilio to send SMS alerts so that you never miss a critical issue.

[Read the full tutorial here](https://www.twilio.com/docs/tutorials/walkthrough/server-notifications/node/express)!

## Local development

To run this project on your computer you will
 need to download and install either [Node.js](http://nodejs.org/)
or [io.js](https://iojs.org/en/index.html), both of which should also install
[npm](https://www.npmjs.com/).

You will also need to [sign up for a Twilio account](https://www.twilio.com/try-twilio)
if you don't have one already.

1. First clone this repository and `cd` into it.

   ```bash
   $ git clone git@github.com:TwilioDevEd/server-notifications-node.git
   $ cd server-notifications-node
   ```

1. Next, open `.env.example` at the root of the project and update it with
   values from your
   [Twilio account](https://www.twilio.com/console)
   and local configuration. Save the file as `.env`.  You'll need to set
   `TWILIO_AUTH_TOKEN`, `TWILIO_ACCOUNT_SID`, and `TWILIO_NUMBER`.

   For the `TWILIO_NUMBER` variable you'll need to provision a new number
   in the
   [Manage Numbers page](https://www.twilio.com/user/account/phone-numbers/incoming)
   under your account. The phone number should be in
   [E.164 format](https://support.twilio.com/hc/en-us/articles/223183008-Formatting-International-Phone-Numbers)

    Run `source .env` to export the environment variables.

1. Navigate to the project directory in your terminal and run:

  ```bash
  $ npm install
  ```

    This should install all of our project dependencies from npm into a local
    `node_modules` folder.

1. Make sure the tests succeed.

   ```bash
   $ npm test
   ```

1.  To launch the application, you can use `node .` in the project's root directory.
    You might also consider using [nodemon](https://github.com/remy/nodemon) for
    this. It works just like the node command, but automatically restarts your
    application when you change any source code files.

    Make sure you have customized the `config/administrators.json` file
    with your phone number and then open
    [http://localhost:3000/error](http://localhost:3000/error). You'll get a text message shortly
    informing you of an exception.

    ```bash
    $ npm install -g nodemon
    $ nodemon .
    ```


## Meta

* No warranty expressed or implied. Software is as is. Diggity.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Lovingly crafted by Twilio Developer Education.
