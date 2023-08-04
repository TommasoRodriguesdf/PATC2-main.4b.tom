 import './App.css'
 import { Exemplo } from './Exemplo';
 export default function App () {
    const listaAlunos = [{nome:"Tommaso",idade:18,cidade:"Batayporã"},{nome:"Lucas",idade:18,cidade:"Batayporã"},
    {nome:"AnaBela",idade:16,cidade:"Nova Andradina"} ];
    return (
      <div>
        <Exemplo lista={listaAlunos} />
      </div>

    );
}
 
