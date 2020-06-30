//importar dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto de banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db


/* db.serialize(() => {
    //criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //inserir um dado na tabela
    
    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (
        ?,?,?,?,?,?,?
    );
`
    const values = [
        "http://localhost:3000/assets/eletronicos.svg",
        "Papersider",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Pápeis e Papelão"
    ]

    function afterInsertData(err){
        if(err) {
            return console.log(err)
        }
        console.log("cadastrado com sucesso")
        console.log(this)
    }

    //db.run(query, values, afterInsertData)

    //selecionar um dado

    db.all(`SELECT * FROM places`, function(err, rows){
        if(err) {
            return console.log(err)
        }
        console.log("Aqui estão seus registro")
        console.log(rows)
    })


    //deletar um dado na tabela,
     db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
        if(err) {
            return console.log(err)
        }
        console.log("Registro deletado com sucesso")
    })
 
    
    
})
  */

 