



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


}


module.exports = new HomeController()