const express = require("express")
const app = express()
const port = 3001

// caminho (get == verbo)
app.get("/naipe", (req, res) => {
    res.send("get naipe")
})
    // servidor ouvir a porta
app.listen(port, () =>  {
    console.log("isso executa quando o servidor inicia");
    })

