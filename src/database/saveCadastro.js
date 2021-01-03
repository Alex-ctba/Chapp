
function saveCadastro(db, cadastro) {
  return db.run(`
    INSERT INTO cadastrados (
        lat ,
        lng ,
        name ,
        about ,
        whatsapp,
        images ,
        instructions ,
        opening_hours ,
        open_on_weekends
    

    ) VALUES (
               "${cadastro.lat}", 
                "${cadastro.lng}",
                "${cadastro.name}",
                "${cadastro.about}",
                "${cadastro.whatsapp}",
                "${cadastro.images}",
                "${cadastro.instructions}",
                "${cadastro.opening_hours}",
                "${cadastro.open_on_weekends}"
               
               );
        `); 
}
module.exports = saveCadastro;
