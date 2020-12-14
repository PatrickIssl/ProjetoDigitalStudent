const Database = require('./database/db.js');
const saveSchool = require('./database/saveSchool');
const saveUser = require('./database/saveUser');
const authentic = require('./database/authentic');

module.exports = {

    index(req,res){
        return res.render('index')
    },
    async login(req,res){
        return res.render('login')
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
    createuser(req,res){
        return res.render('create-user')
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
    },

    //autentica usuario
     async authentic(req,res){
        const fields = req.body
        //valida se os campos estão preenchidos 
        if(Object.values(fields).includes('')){
            return res.send('Todos os campos devem ser preenchidos!')
        }

        try{
        //salvar um orfanato
        const db = await Database
        const user = await authentic(db, {
            cpf:fields.cpf,
            senha:fields.senha,
        })


        if(user == ""){
            
            return res.send('Login ou Senha Incorretos')

        }else{
            
            return res.redirect('/principal') 

        }
        }catch(error){
            console.log(error)
            return res.send('erro no Login!')
        }
    },


    async saveUser(req,res){
        const fields = req.body
        //valida se os campos estão preenchidos 
        if(Object.values(fields).includes('')){
            return res.send('Todos os campos devem ser preenchidos!')
        }

        try{
        //salvar um orfanato
        const db = await Database
        await saveUser(db, {
            images:fields.images.toString(),
            nome:fields.name,
            CPF:fields.cpf,
            email:fields.email,
            telefone:fields.telefone,
            nacimento:fields.date,
            cargo:fields.cargo,
            endereco:fields.endereco,
            uf:fields.uf,
            senha:fields.senha,
        })

        return res.redirect('/schools')
        }catch(error){
            console.log(error)
            return res.send('erro no banco de dados!')
        }
    }

}