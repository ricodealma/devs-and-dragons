import { Personagem } from "./modules/personagem.js"
import { personagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoAntoinio = new Mago('Antonio', 'fogo',4,3)
const magaJulia = new Mago ('Júlia','gelo',7,10)
const arqueiroBruno = new Arqueiro('Bruno',8)
const arqueiroMagoChico = new ArqueiroMago('Chico', 10,'Ar',4,8)
const guerreiroJorge = new Guerreiro('Jorge',5)

const personagens = [magoAntoinio,magaJulia,arqueiroBruno,arqueiroMagoChico,guerreiroJorge]

new personagemView(personagens).render()
