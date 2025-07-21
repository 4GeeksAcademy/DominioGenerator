import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
let pronoun = ['el', 'nuestro', 'su', 'mi', 'tu'];
let adj = ['gran', 'encantador', 'magistral', 'sospechoso', 'gigantesco'];
let noun = ['juguete', 'unicornio', 'colisionadordeadrones', 'coheteespacial', 'naufragio',];
let dom = ['.com', '.net', 'org', 'es', 'gov', 'xxx', '.mx'];

const generador = () => {


    for (let ip = 0; ip < pronoun.length; ip++) {
        const pronombre = pronoun[ip];

        for (let ia = 0; ia < adj.length; ia++) {
            const adjetivo = adj[ia];

            for (let ino = 0; ino < noun.length; ino++) {
                const sustantivo = noun[ino];

                for (let id = 0; id < dom.length; id++) {
                    const dominio = dom[id];

                    let resultado = pronombre + adjetivo + sustantivo + dominio;
                    console.log(resultado);

                    

                }
            }

        }

    }
}
generador();
  console.log("Hello Rigo from the console!");
};

