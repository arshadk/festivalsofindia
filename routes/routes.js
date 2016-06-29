var appRouter= function (app) {

    app.get("/",function (req,res) {
        res.send("Hello World");
        
    })

    app.get("/festival",function(req,res){
        if(!req.query.festivalname){
          return res.send("You didnt talk of any festival")  
        }
        else{
            return res.send("Happy  "+req.query.festivalname)
        }
        //return res.send("Happy Diwali");
    })

    app.post("/festival",function (req,res) {
        if(!req.body.festivalname){
            return res.send("which festival are you adding")
        }
    


    })
}
module.exports= appRouter;