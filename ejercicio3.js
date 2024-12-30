const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const userFavoriteSounds = [];
let soundExist = false;

for (const user of users) {
	for (const userKeys in user) {
		if (userKeys === 'favoritesSounds') {
			for (const soundKey in user[userKeys]) {
				if (!userFavoriteSounds.length) {
					userFavoriteSounds.push({name: soundKey, chosenTimes: 1});
				} else {
					userFavoriteSounds.forEach((sound) => {
						if (sound.name === soundKey) {
							sound.chosenTimes++;
							soundExist = true;
						}
					});
					if (!soundExist) {
						userFavoriteSounds.push({name: soundKey, chosenTimes: 1});
					}
					soundExist = false;
				}
			}
		}
	}
}

console.log(userFavoriteSounds);