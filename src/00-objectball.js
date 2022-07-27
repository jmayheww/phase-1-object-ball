function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

function homeTeamName() {
  let teamInfo = gameObject();
  return teamInfo["home"]["teamName"];
}

function numPointsScored(playerName) {
  //takes player name and returns number of points scored for that player
  let game = gameObject();

  let gameKeys = Object.keys(game);

  for (let key of gameKeys) {
    let players = Object.keys(game[key]["players"]);
    for (let p of players) {
      if (p === playerName) {
        return game[key]["players"][p]["points"];
      }
    }
  }
}
function shoeSize(playerName) {
  //takes player name and returns number of points scored for that player
  let game = gameObject();

  let gameKeys = Object.keys(game);

  for (let key of gameKeys) {
    let players = Object.keys(game[key]["players"]);
    for (let p of players) {
      if (p === playerName) {
        return game[key]["players"][p]["shoe"];
      }
    }
  }
}

shoeSize("Alan Anderson");

function teamColors(name) {
  let game = gameObject();
  let gameKeys = Object.keys(game);

  for (key of gameKeys) {
    let teamData = game[key];

    for (let teamKey in teamData) {
      if (teamData[teamKey] === name) {
        return teamData.colors;
      }
    }
  }
}

const teamNames = () => {
  return Object.values(gameObject()).map((gameObject) => gameObject.teamName);
};

function playerNumbers(teamName) {
  let game = gameObject();
  let gameKeys = Object.keys(game);

  for (key of gameKeys) {
    let teamData = game[key];

    for (let teamKey in teamData) {
      if (teamData[teamKey] === teamName) {
        let players = teamData["players"];

        return Object.values(players).map((players) => players.number);
      }
    }
  }
}

function playerStats(playerName) {
  let playerObj = {};

  let game = gameObject();

  let gameKeys = Object.keys(game);

  for (let key of gameKeys) {
    let players = Object.keys(game[key]["players"]);
    for (let p of players) {
      return Object.assign(game[key]["players"][p], playerObj);
    }
  }
}

function playersObj() {
    let game = gameObject();

    return { ...game.home.players, ...game.away.players };

}

const players = playersObj();

function bigShoeRebounds() {


    /* since Math.max only works with an array of numbers, not objects, we need another approach
    We can sort an array of objects based on comparing one of the object properties
    Then the object with the highest property will be at the beginning or end of sorted array
    (depending on how the sort is written) */
  const biggest = Object.values(players).sort((a, b) => {
    if (a.shoe > b.shoe) return -1; // shorthand syntax for an if-block omitting {}
    if (a.shoe < b.shoe) return 1;
    if (a.shoe == b.shoe) return 0;
  })[0];

  return biggest.rebounds;

  // credit to betalantz @ phase-1 Object-ball github repo
}

