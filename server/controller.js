module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["People wish they were you", "Big brain", "You're gonna work at google soon! :)"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [
            "You're going to die at 50",
        "You'll win the lottery tomorrow",
        "Watch your back on September 23rd",
        "You'll see a color you've never seen before, tonight",
        "You'll assist the president with a problem in the near future",
        ]

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },
    createUser: (req, res) => {
        database.push(req.body)
        res.status(200).send({success: true, info: database})
    },
    incUser: (req, res) => {
        const name = req.params.name
        for (let i=0; i<database.length; i++) {
            if (database[i].name === name) {
                database[i].power_level++
            }
        }
        res.status(200).send({success: true, info: database})
    },
    delUser: (req, res) => {
        const name = req.params.name
        for (let i=0; i<database.length; i++) {
            if (database[i].name === name) {
                database.splice(i, 1);
            }
        }
        res.status(200).send({success: true, info: database})
    }

}

const database = [
    {
        name:'Danish',
        power_level:55
    },
]