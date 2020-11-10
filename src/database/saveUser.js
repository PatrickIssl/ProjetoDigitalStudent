
function saveUser(db, user){
    
    return db.run(` INSERT INTO users(
        images,
        nome,
        CPF,
        email,
        telefone,
        nacimento,
        cargo,
        endereco,
        uf
    ) VALUES (
        "${user.images}",
        "${user.nome}",
        "${user.CPF}",
        "${user.email}",
        "${user.telefone}",
        "${user.nacimento}",
        "${user.cargo}",
        "${user.endereco}",
        "${user.uf}"

    );
`);
}

module.exports= saveUser;