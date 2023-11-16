/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["our", "my", "your"];
let adjective = ["black", "brown", "yellow", "red"];
let noun = ["cat", "kangaroo", "cow", "turtle"];
let extension = [".it", ".com", ".eu", ".fr", ".de", ".es"];
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
