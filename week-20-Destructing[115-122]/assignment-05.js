const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

const {
  title: t,
  developer: d,
  releases: {
    "Oath In Felghana": [u, j],
    "Ark Of Napishtim": { US: u_price, JAP: j_price },
    Origin: or,
  },
} = game;

const [o, a] = Object.keys(game.releases);

console.log(`My Favourite Games Style Is ${t} Style`);
console.log(`And I Love ${d} Games`);
console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
console.log(`Although I Love ${a}`);
console.log(`${a} Price in USA Is ${u_price}`);
console.log(`${a} Price in Japan Is ${j_price}`);
console.log(`Origin Price Is ${or}`);
