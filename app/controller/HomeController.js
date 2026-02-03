



class HomeController{

    async home(req,res){

        try{

            const user={
                name:"sagnik",
                age:22
            }
           res.render('home',{
            title:"home",
            data:user

           })

        }catch(err){
            console.log(err)
        }

    }

    async about(req,res){
        res.render('about',{
            title:"about"
        })
    }


}


module.exports = new HomeController()