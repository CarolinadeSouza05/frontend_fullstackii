import { Pencil, Trash, X } from "@phosphor-icons/react";
import './Modal.css'

export function Modal(props) {
  const { title, tableHead, registerAll, setRegisterAll, setFormValidate, ChangeValueObject, setModal} = props;

  function EditRegister(register, index) {
    if(ChangeValueObject !== undefined)
      ChangeValueObject(register);

    const auxRegisters = register;
    auxRegisters.edit = index;

    setFormValidate(auxRegisters);
  }

  function DeleteRegister(indexRegister) {
    const auxRegister = registerAll.filter(
      (register, index) => indexRegister !== index
    );

    setRegisterAll(auxRegister);
  }

  return (
    <div className="modal">
      <div className="modal-container flex-col">
        <div className="modal-container-title">
          <h2>{title}</h2>
          <X size={32} onClick={() => setModal(false)} />
        </div>
        <table>
          <thead>
            <tr>
              {tableHead.map((head, index) => (
                <th scope="col" key={index}>
                  {head}
                </th>
              ))}
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {registerAll !== undefined  && registerAll.map((registerInput, index) => {
              const register = Object.values(registerInput);

              return (
                <tr key={index}>
                  {register.map((registerInput, index) => typeof registerInput === 'string' ? <td key={index}>{registerInput}</td> : null )}
                  <td>
                    <Pencil
                      size={32}
                      onClick={() => EditRegister(registerInput, index)}
                    />
                  </td>
                  <td>
                    <Trash size={32} onClick={() => DeleteRegister(index)} />
                  </td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
