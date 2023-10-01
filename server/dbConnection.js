const mongoose = require('mongoose');
const DB_URL = "mongodb+srv://admin:admin@cluster0.68wuypr.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB_URL).then(()=>console.log('Connected to DB successfully')).catch(err=>console.log(err));
