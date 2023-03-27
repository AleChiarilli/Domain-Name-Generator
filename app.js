// function generadorNombreDominio (pronoun, adj, noun, end) = {
//     const = nombreDominio []

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var end = [".com"];

// console.log(length.pronoun);

for (let posicion = 0; posicion < pronoun.length; posicion++) {
  for (let posicion2 = 0; posicion2 < adj.length; posicion2++) {
    for (let posicion3 = 0; posicion3 < noun.length; posicion3++) {
      //     for (end)
      //    const combinacion = pronoun(i) + adj(j) + noun(k) + end();
      //    nombreDominio.push(combinacion);
      console.log(
        pronoun[posicion] + adj[posicion2] + noun[posicion3] + end[0]
      );
    }
  }
}
// }

// console.log (combinacion)
