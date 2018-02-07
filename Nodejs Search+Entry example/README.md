# Nodejs Search+Entry example

This is an example code demonstrating the asynchronous fetch of OUP API. Using Promises we fetch a list of words and then lookup details on the first from the list.


## Installation
#### API keys Authentication
To run project you'll need to get your own copy of [Oxford Dictionary API](https://developer.oxforddictionaries.com/documentation/getting_started) keys. 
[Register](https://developer.oxforddictionaries.com/?tag=#plans) an account and go to [API Credentials](https://developer.oxforddictionaries.com/admin/applications) to get app_id and app_key. Alternatively you can find your API keys in [Swagger interface](https://developer.oxforddictionaries.com/documentation) after you login in your account.

#### Clone the project
Keys need to be placed in `config.js`
```javascript
3| app_id: '',
4| app_key: ''
```
Open cli and configure dependencies
```
~ cd /<path to derictory>/OxfordDictionariesAPI/Nodejs\ Search+Entry\ example 
~ npm install
```

## Run 

~ node app.js
