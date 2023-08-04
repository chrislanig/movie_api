const express = require('express'),
    morgan = require('morgan'),
    app = express(),
    port = 3000
;

// Log all reqest to terminal window
app.use(morgan('common'));

// This makes the public directory accessible
app.use(express.static('public'))

// Routes --------------------------------

// Index response
// -res = RESPONSE (outgoing)
// -req = REQUEST (incoming)
app.get('/', (req, res) => {
    try{
        res.send('Movie API - Express Server');
    } catch(err){
        next(err);
    }
})
  
// Return top 10 movies
app.get('/movies', (req, res) => {
    try{
        res.json(top10Movies())
    } catch(err){
        next(err);
    }
})

// End Routes -----------------------------


// Error handling middleware
// Annonymous function (no name) is being used as a middleware function by express
app.use((error, req, res, next) => {
    console.error('Path: ', req.path);
    console.error('Error: ', error);
})

// Display log in terminal to indicate api is running
app.listen(port, () => {
    console.log(`Movie API listening on port ${port}`)
})


/**
 * Returns a top ten movies list
 * @returns array
 */
const top10Movies = () => {
    return [
        {
            title: 'Gone with the Node',
            year: '5/12/1967',
        },
        {
            title: 'Independence Daze',
            year: '7/4/1996',
        },
        {
            title: 'Dungeons & Puzzles',
            year: '5/10/2023',
        },
        {
            title: 'Generic Marvel Movie',
            year: '8/16/2021',
        },
        {
            title: 'Back to the Past II',
            year: '2/10/1985',
        },
        {
            title: 'Ready Player 100',
            year: '7/10/2018',
        },
        {
            title: 'Jongo',
            year: '9/3/1992',
        },
        {
            title: '505 Dalmations',
            year: '5/5/1992',
        },
        {
            title: 'Field of Jobs',
            year: '11/4/1989',
        }
    ];
}