const naipe_controller = require("./controllers./naipe")

const express = require("express")
const app = express()
const port = 3001

app.use()

// caminho (get == verbo)
app.get("/naipe", (req, res) => {
    const content = naipe_controller.index()
    res.json(content)
})

app.get("/naipe/: id/ " , (req, res) => {
    const content = naipe_controller.show(req.params.id)
    res.json(content)
})

app.post("/naipe", (req, res) => {
    const code = naipe_controller.store(req, body)
    res.status(code).json()
})

app.put("/naipe/:id" , (req, res) => {
    const code = naipe_controller.update(req.params.id, req.body)
    res.status(code).json()
})



    // servidor ouvir a porta
app.listen(port, () =>  {
    console.log("isso executa quando o servidor inicia");
    })

