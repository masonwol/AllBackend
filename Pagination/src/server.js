const app = require('./index');

const connect = require('./configs/db');


app.listen(2900, async () => {
    await connect();
    console.log('Listening on port 2900');
})