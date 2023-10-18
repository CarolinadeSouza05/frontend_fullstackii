
//  const apiAnimais = "http://localhost:4000/animais";
const apiAnimais = "https://129.146.68.51/aluno34-pfsii/animais";
// export const urLBase = "https://129.146.68.51/aluno33-pfsii/";
export const urLBase = "https://129.146.68.51/aluno34-pfsii";
//================== API-Animais ==================//

export async function getAnimais() {
  let aux = [];
  await fetch(apiAnimais, {
      method: "GET",
  })
      .then((data) => data.json())
      .then((res) => (aux = res))
      .catch(e => console.log(e));

  return aux;
}

// export async function handleSubmitAnimais(animal) {
//   await fetch(apiAnimais, {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify(animal)
//   })
//     .then(()=> alert('Animal Cadastrado com sucesso!'))
// }
export async function handleSubmitAnimais(animal) {
  try {
    const response = await fetch(apiAnimais, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(animal)
    });

    if (!response.ok) {
      // Verifica se a resposta não foi bem-sucedida (códigos de erro HTTP 4xx ou 5xx)
      const errorMessage = await response.text();
      throw new Error(`Erro ${response.status}: ${errorMessage}`);
    }

    alert('Animal Cadastrado com sucesso!');
  } catch (error) {
    console.error('Erro ao cadastrar animal:', error.message);
    // Você pode tratar o erro de outras maneiras, como exibir uma mensagem de erro para o usuário.
  }
}

export async function editarAnimais(animal) {
  try {
    await fetch(`${apiAnimais}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(animal),
    })
    .then(()=> alert('Animal editado com sucesso!'))
  } catch (error) {
    console.log('Erro na requisição:', error);
  }
}

export async function excluirAnimais(id) {
  try {
    await fetch(`${apiAnimais}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    alert("Animal deletado com sucesso!");
  } catch (error) {
    console.error("Erro ao excluir o animal:", error);
    throw error;
  }
}

