/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["your", "our", "their"];
let adjective = ["pink", "grey", "blue", "green"];
let noun = ["T-Rex", "koala", "bat", "caiman"];
let extension = [".net", ".com", ".org", ".ve", ".ca", ".um"];
let domainNamesArray = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adjective.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extension.length; l++) {
        domainNamesArray.push(
          pronoun[i] + adjective[j] + noun[k] + extension[l]
        );
      }
    }
  }
}
document.getElementById("list-of-domains").innerHTML = domainNamesArray.join(
  "<br>"
);
