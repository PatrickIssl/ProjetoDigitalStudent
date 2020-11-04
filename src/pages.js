const Database = require('./database/db.js')
const saveSchool = require('./database/saveSchool');

module.exports = {

    index(req,res){
        return res.render('index')
    },
    async school(req,res){ 
        const id = req.query.id
        

        try{
            const db = await Database;
            const results = await db.all(`SELECT * FROM schools WHERE id = "${id}" `)
            const school = results[0]

            school.images = school.images.split(",")
            school.firstImage = school.images[0]
            
            if(school.open_on_weekends == "0"){  
                school.open_on_weekends = false
            }else{
                school.open_on_weekends = true
            }

            return res.render('school',{school: school})
        }catch{
            console.log(error)
            return res.send('Erro de banco de dados!')
        }
    },
    async schools(req,res){
        try{
            const db = await Database;
            const schools =await db.all("SELECT * FROM schools")
            return res.render('schools',{schools})
        }catch(error){
            console.log(error)
            return res.send('erro no banco de dados!')
        }
    },
    createschool(req,res){
        return res.render('create-school')
    },
    async saveSchool(req,res){
        const fields = req.body
        //valida se os campos estão preenchidos 
        if(Object.values(fields).includes('')){
            return res.send('Todos os campos devem ser preenchidos!')
        }

        try{
        //salvar um orfanato
        const db = await Database
        await saveSchool(db, {
            lat: fields.lat,
            lng: fields.lng,
            name:fields.name,
            about:fields.about,
            whatsapp:fields.whatsapp,
            images:fields.images.toString(),
        })

        return res.redirect('/schools')
        }catch(error){
            console.log(error)
            return res.send('erro no banco de dados!')
        }
    }
}