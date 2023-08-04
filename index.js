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
            title: 'Gone with the Wind',
            year: '6/3/1954',
        },
        {
            title: 'Independence Day',
            year: '7/3/1996',
        },
        {
            title: 'Dungeons & Dragons',
            year: '3/31/2023',
        },
        {
            title: 'Spider-Man: No Way Home',
            year: '12/17/2021',
        },
        {
            title: 'Back to the Future II',
            year: '11/22/1989',
        },
        {
            title: 'Ready Player 1',
            year: '3/29/2018',
        },
        {
            title: 'Honey, I Shrunk The Kids',
            year: '6/23/1989',
        },
        {
            title: '101 Dalmations',
            year: '11/27/1996',
        },
        {
            title: 'Field of Dreams',
            year: '4/21/1989',
        }
    ];
}