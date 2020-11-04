
function saveSchool(db, school){
    
    return db.run(` INSERT INTO schools(
        lat,
        lng,
        name,
        about,
        whatsapp,
        images
    ) VALUES (
        "${school.lat}",
        "${school.lng}",
        "${school.name}",
        "${school.about}",
        "${school.whatsapp}",
        "${school.images}"

    );
`);
}

module.exports= saveSchool;
