import { Heading } from "./Heading";

const Tarefas = ({ tarefas, alertas }) => {
    return (
      <div className="bg-white flex flex-col items-start justify-start p-5 box-border gap-5 shadow-md rounded-xl">
        <Heading size='medium'>Tarefas e Alertas</Heading>
        <div className="w-full flex  gap-4">
          <div className="w-full">
            <h3 className="font-bold mb-2">Tarefas Pendentes:</h3>
            <ul className="list-disc pl-5">
              {tarefas.map((tarefa, index) => (
                <li key={index} className="mb-2">{tarefa}</li>
              ))}
            </ul>
          </div>
          <div className="w-full border-l border-gray-400 border-solid pl-5">
            <h3 className="font-bold mb-2">Alertas:</h3>
            <ul className="list-disc pl-5">
              {alertas.map((alerta, index) => (
                <li key={index} className="mb-2">{alerta}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Tarefas;
  