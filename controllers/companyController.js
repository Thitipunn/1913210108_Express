exports.company = exports.bio = (req, res, next) => {
    res.status(200).json({
        data:[{
            id:1,
            name:"Hoyoverse",
            address:{
                province:"Shanghai",
                postcode:"unknown"
            }
        },{
            id:2,
            name:"Riot Games",
            address:{
                province:"California",
                postcode:90064
            }
        },{
            id:3,
            name:"LINE Corporation",
            address:{
                province:"Bangkok",
                postcode:10330
            }
        }]
    })
  };