const express = require('express');
const db = require('./db');
const jwt = require('jsonwebtoken');
const UserModel = require('./models/User');
const app = express();

const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post('/api/signup', async (req, res) => {
    const { userName, password } = req.body;

    const user = UserModel({
        userName,
        password
    });
    user.password = await user.encryptPassword(user.password);

    try {

        await user.save();
        res.json({success: true});

    }catch{
        res.json({success: false});
    }
});

app.post('/api/signin', async (req, res) => {
    const { userName, password } = req.body;

    const user = await UserModel.findOne({ userName });
    console.log(user);
    if(!user){
        return res.status(401).json({success: false});
    }

    const validateUser = await user.validatePassword(password);

    if(!validateUser){
        return res.status(4001).json({success: false});
    }

    const token = jwt.sign({user}, 'listShowsSecret');

    res.status(200).json({success: true, token});
});

app.listen(PORT, () => {
    console.log(`server on port ${PORT}`)
});