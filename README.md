## Examples of mocking Sequelize-Typescript models with Jest
[![Build Status](https://travis-ci.com/NielsSteensma/sequelize-typescript-mock-examples.svg?branch=master)](https://travis-ci.com/NielsSteensma/sequelize-typescript-mock-examples)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

Mocking your models is a great way to test your application without actually hitting the database. This repository shows how you can do this for sequelize-typescript package.

#### Some reasons why you want to mock your models:
 - You can check if all arguments where correctly passed to the ORM.
 - You can return own defined resultsets from a mocked database call.
 
 #### Guide
 To see how you can create mocks for your models check out the test folder inside this repository.
