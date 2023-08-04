import {Dev} from './Dev'

export function Exemplo ({lista}){

   return (
      <div>
<Dev nome= 'nome'/>
        {lista.map(aluno=>(
            <ul>
                <li> {aluno.nome},{aluno.idade},{aluno.cidade} </li>
            </ul>
            

            ))}
        
      </div>

   );

}