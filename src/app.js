//write your code here
function excusegen() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = [".com", ".io", ".us", ".net"];
  let array = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let t = 0; t < adj.length; t++) {
      for (let p = 0; p < noun.length; p++) {
        for (let o = 0; o < dom.length; o++) {
          array.push(pronoun[i] + adj[t] + noun[p] + dom[o]);
        }
      }
    }
  }
  return array;
}
let generator = excusegen();
for (let k = 0; k < generator.length; k++) {
  document.querySelector("#js").innerHTML += "<p>" + generator[k] + "</p>";
}
