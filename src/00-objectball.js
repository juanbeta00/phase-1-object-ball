function gameObject() {
  let obj = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["black", "white"],
      players: {
        "Alan Anderson": {
          number: "0",
          shoe: "16",
          points: "22",
          rebounds: "12",
          assists: "12",
          steals: "3",
          blocks: "1",
          slamDunks: "1",
        },
        "Reggie Evans": {
          number: "30",
          shoe: "14",
          points: "12",
          rebounds: "12",
          assists: "12",
          steals: "12",
          blocks: "12",
          slamDunks: "7",
        },
        "Brook Lopez": {
          number: "11",
          shoe: "17",
          points: "17",
          rebounds: "19",
          assists: "10",
          steals: "3",
          blocks: "1",
          slamDunks: "15",
        },
        "Mason Plumlee": {
          number: "0",
          shoe: "16",
          points: "22",
          rebounds: "12",
          assists: "12",
          steals: "3",
          blocks: "1",
          slamDunks: "1",
        },
        "Jason Terry": {
          number: "31",
          shoe: "15",
          points: "19",
          rebounds: "2",
          assists: "2",
          steals: "4",
          blocks: "11",
          slamDunks: "1",
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["turquoise", "purple"],
      players: {
        "Jeff Adrien": {
          number: "4",
          shoe: "18",
          points: "10",
          rebounds: "1",
          assists: "1",
          steals: "2",
          blocks: "7",
          slamDunks: "2",
        },
        "Bismak Biyombo": {
          number: "0",
          shoe: "16",
          points: "12",
          rebounds: "4",
          assists: "7",
          steals: "7",
          blocks: "15",
          slamDunks: "10",
        },
        "DeSanga Diop": {
          number: "2",
          shoe: "14",
          points: "24",
          rebounds: "12",
          assists: "12",
          steals: "4",
          blocks: "5",
          slamDunks: "5",
        },
        "Ben Gordon": {
          number: "8",
          shoe: "15",
          points: "33",
          rebounds: "3",
          assists: "2",
          steals: "1",
          blocks: "1",
          slamDunks: "0",
        },
        "Brendan Haywood": {
          number: "33",
          shoe: "15",
          points: "6",
          rebounds: "12",
          assists: "12",
          steals: "22",
          blocks: "5",
          slamDunks: "12",
        },
      },
    },
  };
  return obj;
}
const players = { ...game.home.players, ...game.home.players };
const numPointsScored = (playerName) => {
  for (team in game) {
    for (player in game[team].players) {
      if (player === playerName) {
        return game[team].players[player].points;
      }

    }

  }
}

function shoeSize(name) {
  let object = gameObject();
  return object["home"]["players"][name]["shoe"];
}
function teamColors(name) {
  let object = gameObject();
  if (object.teamName === "Brooklyn Nets") {
    return object["home"]["colors"];
  } else return object["away"]["colors"];
}
function teamNames() {
  let object = gameObject();
  let array = [];
  array.push(object.home.teamName);
  array.push(object.away.teamName);
  return array;
}
function playerNumbers(name) {
  let object = gameObject();
  let array = [];
  if (name === "Brooklyn Nets") {
    for (let i = 0; i < 5; i++) {
      array.push(object["home"]["players"]["number"]);
    }
    return array;
  }
}
function playerStats(name) {
  let object = gameObject();
  return object["home"]["players"][name];
}