const mongoose=require('mongoose');
const url=process.env.URL;
const connection = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Database is connected`);
}).catch((err) => {
    console.log(`Error in connecting the database`, err);
});

module.exports = connection;
