const api = "http://localhost:8000/cadastros"

export async function getAllRegister(){
    let aux = [];
    await fetch(api, {
        method: "GET",
    })
    .then((data) => data.json())
    .then((repos) => (aux = repos))
    .catch(e => console.log(e));

    return aux;
}

export async function createRegister(register){
    await fetch(`${api}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(register),
    })
    .then(() => alert("Usuário cadastrado com sucesso"))
    .catch((err) => console.log(err))
}

export async function editRegister(register, index){
    await fetch(`${api}/${index}`, {
        method: "PUT",
        body: {
            nome: register.nome,
            email: register.email,
            telefone: register.telefone,
            endereco: register.endereco,
            senha: register.senha,
        },
    })
    .then(() => alert("Usuário editado com sucesso"))
    .catch((err) => console.log(err))
}

export async function getRegisterID(email, telefone){
    let aux = [];

    await fetch(`http://localhost:8000/cadastro/${email}/${telefone}`, {
        method: "GET",
    })
    .then((data) => data.json())
    .then((repos) => (aux = repos))
    .catch((err) => console.log(err))

    return aux;
}