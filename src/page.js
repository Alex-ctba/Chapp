 const Database = require('./database/db');
const saveCadastro = require('./database/saveCadastro');

module.exports = {
  index(req, res) {
    return res.render("index");
  },

 async cadastro(req, res) { 
    const id = req.query.id
    try {
        const db = await Database;//>>OK
        const results = await db.all(`SELECT * FROM cadastrados WHERE id="${id}"`)
         const cadastro = results[0]

        
        cadastro.images = cadastro.images.split(",")
        cadastro.firstImage = cadastro.images[0]

        if(cadastro.open_on_weekends == "0"){
          cadastro.open_on_weekends = false
        }else{
          cadastro.open_on_weekends = true
        }
       
        console.log(cadastro)
       return res.render('cadastro', { cadastro })

       
    } catch (error) {
        console.log(error)
    }
    
  
  },

  async cadastrados(req, res) {
    try {
      const db = await Database
      const cadastrados = await db.all("SELECT * FROM cadastrados");//>>OK
      return res.render("cadastrados", { cadastrados });//>>OK
       
    } catch (error) {
      console.log(error);//>>OK
      return res.send("[ERROR] nesta requisição, aguarde um momento e tente novamente");
    }
  },

  createCadastro(req, res) {
    return res.render("create-cadastro");
  },
async saveCadastro(req, res) {
  
     const fields = req.body
      
     if(Object.values(fields).includes('')){
       res.send("<h1> Todos os campos devem ser preenchidos </h1>")
        } 
        try {
           //safe in the data
        const db = await Database 
       
        await saveCadastro(db, {
          lat:fields.lat,
          lng:fields.lng,
          name:fields.name,
          about:fields.about,
          whatsapp:fields.whatsapp,
          images:fields.images.toString(),
          instructions:fields.instructions,
          opening_hours:fields.opening_hours,
          open_on_weekends:fields.open_on_weekends,
        
        })
          //redirect
         
          return res.redirect('/cadastrados')
        } catch (error) {
          console.log(error)
          return res.send('Erro no banco de dados.')
        }      
        
},
async reset_(req, res) {

  try {
    const db = await Database
    const cadastrados = await db.all("DELETE FROM cadastrados");//>>OK
     
    return res.redirect('/')
  } catch (error) {
    console.log(error);//>>OK
    return res.send("[ERROR] nesta requisição, aguarde um momento e tente novamente");
  }
},

createCadastro(req, res) {
  return res.render("create-cadastro");
},         
     

}