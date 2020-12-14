const Database = require('./db')
const saveUser = require('./saveUser')

Database.then(async db => {
   /*
    //inserir dados na tabela 
      await saveUser(db , {
        nome:"patrick",
        CPF:"10157283917",
        email:"patrickissler1234@gmail.com",
        telefone:"45999702182",
        nacimento:"24/12/2001",
        cargo:"1",
        endereco:"Onix" ,
        cidade:"Cascavel",
        uf:"PR"
    });

  
    
    //consultar somente 1 orfanato pelo id
    const school = await db.all('SELECT * FROM schools WHERE id = "3"')
    console.log( orphanage)
    
    //deletar dado da tabela
    console.log(await db.run('DELETE FROM schools WHERE id = "4"'))
*/


  const selectedSchools =await db.all('SELECT * FROM users WHERE CPF = "10157283917" AND senha = "douglasd"')
  console.log(selectedSchools) 
  
})