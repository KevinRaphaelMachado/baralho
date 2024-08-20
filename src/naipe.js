const db = [];
let nextId = 1;

const model = (body, id = nestId++) => {
    if (body.cor !== undefined &&
        body.nome !== undefined &&
        body.cor !== "" &&
        body.nome !== ""
    ) {
        return {
            id,
            nome: body.nome,
            cor: body.cor
        }
        
    }
};
//funcão criar
const store = (body) => {
    const novo = model(body)

    if (novo) {
        db.push(novo)
        return 201;
    }
    return 400;
        
};

// função listar
const index = () => db;

// segunda funçao de listar 
const show = (id) => {
    const naipe = db.find((el) => el.id == id);

};
// função atualizar
const update = (id, body) => {
    const index = db.findIndex(el => el.id == id);
    const novo = model (body , parseInt(id));

    if (index !== -1 && novo) {
        db[index] = novo;
        return 200;
        
    }
    // se não retorna erro 
    return 400;
};

// função deletar

const destroy = (id) => {
    const index = db.findIndex((el) => el.id == id);

    if ((index!== -1)) {
        db.splice(index, 1);
        
    }
};

module.exports = {
    store,
    index,
    show,
    update,
    destroy,
};



        
    

