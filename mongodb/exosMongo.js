//EXO 1
db.getCollection('Sakila_films').find({
    "Actors": {
        $elemMatch: {
            "First name": "ED",
            "Last name": "CHASE"
        }
    }
});

//EXO 2
db.getCollection('Sakila_films').find({
    Category: "Horror",
    Description: /Documentary/g
});

//EXO 3
db.getCollection('Sakila_films').count({
    Rating: "G"
});

//EXO 4
db.getCollection('video_movieDetails').find({
    $and: [{
            $or: [{
                year: 2013
            }, {
                year: 2012
            }]
        },
        {
            $and: [{
                runtime: {
                    $lte: 150
                },
                runtime: {
                    $gte: 60
                }
            }]
        }
    ]
});

db.video_movieDetails.find({
    year: {
        $in: [2012, 2013]
    },
    runtime: {
        $gte: 60,
        $lte: 150
    }
})

//EXO 5 
db.getCollection('video_movieDetails').find({
    "tomato.image": "certified"
})