export const disponibilidadeArray = [
  {
    class: "form-check-input",
    type: "checkbox",
    value: "S",
    id: "segunda",
    label: "Segunda - S",
    labelClass: "form-check-label",
    labelFor: "segunda",
    checked: false,
    name: "disponibilidade",
  },

  {
    class: "form-check-input",
    type: "checkbox",
    value: "T",
    id: "terca",
    label: "Terça - T",
    labelClass: "form-check-label",
    labelFor: "terca",
    checked: false,
    name: "disponibilidade",
  },

  {
    class: "form-check-input",
    type: "checkbox",
    value: "Q",
    id: "quarta",
    label: "Quarta - Q",
    labelClass: "form-check-label",
    labelFor: "quarta",
    checked: false,
    name: "disponibilidade",
  },

  {
    class: "form-check-input",
    type: "checkbox",
    value: "QI",
    id: "quinta",
    label: "Quinta - QI",
    labelClass: "form-check-label",
    labelFor: "quinta",
    checked: false,
    name: "disponibilidade",
  },

  {
    class: "form-check-input",
    type: "checkbox",
    value: "SE",
    id: "sexta",
    label: "Sexta - SE",
    labelClass: "form-check-label",
    labelFor: "sexta",
    checked: false,
    name: "disponibilidade",
  },

  {
    class: "form-check-input",
    type: "checkbox",
    value: "SA",
    id: "sabado",
    label: "Sabádo - SB",
    labelClass: "form-check-label",
    labelFor: "sabado",
    checked: false,
    name: "disponibilidade",
  },
];

export const periodoArray = [
  {
    class: "form-check-input",
    type: "radio",
    value: "Manhã",
    name: "periodo",
    id: "manha",
    label: "Manhã",
    labelClass: "form-check-label",
    labelFor: "manha",
    checked: false,
  },
  {
    class: "form-check-input",
    type: "radio",
    value: "Tarde",
    name: "periodo",
    id: "tarde",
    label: "Tarde",
    labelClass: "form-check-label",
    labelFor: "tarde",
    checked: false,
  },
];

export const aceitarFazerArray = [
  {
    class: "form-check-input",
    type: "radio",
    value: "veterinario-parceiro",
    name: "oQueAceitariaFazer",
    id: "veterinario-parceiro",
    label: "Veterinario Parceiro",
    labelClass: "form-check-label",
    labelFor: "veterinario-parceiro",
    checked: false,
  },
  {
    class: "form-check-input",
    type: "radio",
    value: "limpeza",
    name: "oQueAceitariaFazer",
    id: "limpeza",
    label: "Limpeza",
    labelClass: "form-check-label",
    labelFor: "limpeza",
    checked: false,
  },
  {
    class: "form-check-input",
    type: "radio",
    value: "venda-bazares",
    name: "oQueAceitariaFazer",
    id: "venda-bazares",
    label: "Venda nos bazares",
    labelClass: "form-check-label",
    labelFor: "venda-bazares",
    checked: false,
  },
  {
    class: "form-check-input",
    type: "radio",
    value: "producao-bolos-doces",
    name: "oQueAceitariaFazer",
    id: "producao-bolos-doces",
    label: "Produção de bolos e doces p/ vender ",
    labelClass: "form-check-label",
    labelFor: "producao-bolos-doces",
    checked: false,
  },
  {
    class: "form-check-input",
    type: "radio",
    value: "ir-comercios-ajuda",
    name: "oQueAceitariaFazer",
    id: "ir-comercios-ajuda",
    label: "Ir nos comércios pedir ajuda",
    labelClass: "form-check-label",
    labelFor: "ir-comercios-ajuda",
    checked: false,
  },
];


export function ObjectEmptyValue(array) {
  for (let chave in array) {
    if (array.hasOwnProperty(chave) && array[chave] === "") {
      return false;
    }
  }
  return true;
}

export function onChangeInput(name, value, setFormInput, formInput) {
  setFormInput({ ...formInput, [name]: value });
}

export const urLBase = "https://129.146.68.51/aluno33-pfsii";
