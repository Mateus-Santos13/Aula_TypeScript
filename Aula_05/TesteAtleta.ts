import { Atleta } from "./Atleta";
import { Jogador } from "./Jogador";
import { TriAtleta } from "./TriAtleta";

// const atleta = new Atleta("Renan");
// atleta.cansar();
// atleta.visualizar();


// const jogador = new Jogador("Mateus");
// jogador.cansar();
// jogador.visualizar();

const triatleta = new TriAtleta("Mateus");
triatleta.visualizar();
triatleta.aquecer();
triatleta.pedalar();
triatleta.correr();
triatleta.nadar();
triatleta.cansar();