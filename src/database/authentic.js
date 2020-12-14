async function authentic(db,user){
   return await db.all(`SELECT * FROM users WHERE CPF = "${user.cpf}" AND senha = "${user.senha}"`)
}

module.exports= authentic;