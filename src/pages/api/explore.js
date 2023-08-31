// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    // read users from a local JSON file
    let users = require('/data/users.json')
    // const numberOfRandomUsers = 12
    const shuffledUsers = shuffleArray(users);
    let randomUserSubset;
    
    if (req.query.count) {
        randomUserSubset = shuffledUsers.slice(0, parseInt(req.query.count));
        res.status(200).json(randomUserSubset)
      } else {
        res.status(200).json(shuffledUsers)
      }
    
}

function shuffleArray(array) {
    // Fisher-Yates (aka Knuth) Shuffle
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}
