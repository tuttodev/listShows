const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/listShows', 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(res => {
    console.log('db is connected');
})
.catch(err => {
    console.log(err);
});

module.exports = mongoose;