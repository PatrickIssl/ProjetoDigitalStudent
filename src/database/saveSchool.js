function saveSchool(db, orphanage){
    
    return db.run(` INSERT INTO orphanages(
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,

    ) VALUES (
        "${orphanage.lat}",
        "${orphanage.lng}",
        "${orphanage.name}",
        "${orphanage.about}",
        "${orphanage.whatsapp}",
        "${orphanage.images}",
 
    );
`);
}

module.exports= saveSchool;
