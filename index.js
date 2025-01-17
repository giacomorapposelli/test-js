// We import the object from the data file. Inside that object there is a function to get players data
const data = require('./data');
const players = data.getPlayers();
/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

// Your code
const logPlayersData = () => {
    const capFirstChar = (str) =>
        `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
    for (const [index, player] of players.entries()) {
        console.log(
            `PLAYER ${index + 1}\nNAME: ${capFirstChar(
                player.name
            )}\nLASTNAME: ${capFirstChar(
                player.lastname
            )}\nPOSITION: ${capFirstChar(player.position)}`
        );
    }
};

logPlayersData();

/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */

// Your code
const logPlayersNamesList = () => {
    const playerNames = players.map((player) => player.name);
    const descendingOrder = playerNames.sort((a, b) => b.length - a.length);
    console.log(descendingOrder);
};

logPlayersNamesList();

/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, all of them has 0.11 scoringChance, the result will be 1.1 average goals
 * Output example -> Goals per match: 2.19
 */

// Your code
const logAverageGoals = () => {
    const scoringChances = players.map((player) => player.scoringChance);
    const averageGoals = scoringChances.reduce((a, b) => a + +b) / 100;
    console.log(`Goals per match: ${averageGoals}`);
};

logAverageGoals();

/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name (by position it means striker, goalkeeper...)
 */
// Your code
const logPlayerPosition = (name) => {
    const playerFound = players.find(
        (player) => player.name.toLowerCase() === name.toLowerCase()
    );
    playerFound
        ? console.log(playerFound.position)
        : console.log('player not found');
};

logPlayerPosition('Timo');

/**
 * Test 5
 * Write a function that splits all the players randomly into 2 teams, Team A and Team B. Both teams should have same number of players.
 * The function should log the match score, using the average number of goals like the Test 3 and rounding to the closest integer
 * Example:
 *      Team A has 4 players, 2 with 50 scoringChance and 2 with 70 scoringChance.
 *      The average score for the team would be 2.4 (50+50+70+70 / 100), and the closest integer is 2, so the Team A score is 2
 */

// Your code
const logMatchScore = () => {
    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
    const randomOrderPlayers = shuffleArray(players);
    const teamA = randomOrderPlayers.slice(0, randomOrderPlayers.length / 2);
    const teamB = randomOrderPlayers.slice(randomOrderPlayers.length / 2);
    const teams = [teamA, teamB];
    const result = [];
    for (const team of teams) {
        const scoringChances = team.map((player) => player.scoringChance);
        const teamScore = Math.round(
            scoringChances.reduce((a, b) => +a + +b) / 100
        );
        result.push(teamScore);
    }
    console.log(result.join('-'));
};

logMatchScore();
