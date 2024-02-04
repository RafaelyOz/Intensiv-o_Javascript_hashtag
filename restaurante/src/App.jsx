

import {useState} from "react";
import restaurante from "./assets/hashtaurante.webp"
import './App.css';
import {Navegacao} from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";

 export function App(){
   const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);
  
   const paginasMenu = [pratosPrincipais, sobremesas, bebidas]
  
  return<>
   <img src={restaurante} alt="" className="capa"/>
   <Navegacao atualizarPaginaSelecionada = {atualizarPaginaSelecionada} />
   <div className="menu">
    {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao ={item.descricao} preco={item.preco}imagem={item.imagem}/>)}
   </div>
  
  </>
}