const dataBase = require("./db");
const saveCadastro = require('./saveCadastro')

dataBase
  .then(async (db) => {    
 // TESTES GERAIS DE DB_ADMIN 
/*
    await saveCadastro(db, {
      lat: "25.489571",
      lng: "-49.250807",
      name: "teste",
      about: "indefinido",
      whatsapp: "4198429374",
      images: ["imagens-01","imagens-02","imagens-03","imagens-04"].toString(),
      instructions: "create data for base",
      opening_hours: "horario das 7h as 17h",
      open_on_weekends: "0",
    });
    const selecao = await db.all("SELECT * FROM cadastrados")
    console.log(selecao); */
   
    
        //>> FInal da Consulta e insert Aqui...

    // COnsultar somente um dado 
    //  const cadastro = await db.all('SELECT * FROM cadastrados WHERE id="2"')
    //console.log(cadastro)

        //Deletar dados especificos
  const res = await db.all('SELECT * FROM cadastrados')      
      // const res = await db.all('SELECT * FROM cadastrados WHERE id=""')
    // const res = await db.run('UPDATE cadastrados SET images= "https://source.unsplash.com/random,https://source.unsplash.com/random,https://source.unsplash.com/random,https://source.unsplash.com/random"  WHERE id="4" ')
   // const res = await db.run('DELETE FROM cadastrados where id >25')
     // console.log('dados exluidos com sucesso!')
     console.log(res)
  })