if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const path = require('path')

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.set('layout',  'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

const mongoose = require('mongoose')
if (!process.env.DATABASE_URL) {
    console.error("Error: DATABASE_URL is not defined in the environment variables.");
    process.exit(1); // Exit the process with an error code
}
console.log('Database URL:', process.env.DATABASE_URL);

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Connected to Mongoose');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the connection function
connectToDatabase();

// mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', error => console.error('Error connecting to MongoDB:',error))
// db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)
app.use('/authors', authorRouter)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})