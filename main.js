// declaration
const Champs = document.querySelectorAll(".champs input");
let key = Champs[0],
    text = Champs[1],
    converse = Champs[2];
    //console.log(key);

const lettres = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// debut -------------------

/**
 * renvois le code cesar
 * @param {string} texte 
 * @param {number} key 
 * @param {array} letters 
 * @returns {string}
 */
function getCode(texte = "abc",key = 1, letters){
    let code_cesar = "";

    for(let i = 0; i < texte.length; i++){

        let textUser = texte[i];

        for(let t = 0; t < letters.length; t++){
            let lettreTab = letters[t];

            if(textUser == lettreTab){
                code_cesar += letters[t + (key)];
            }
        }
    }

    return code_cesar;
}

text.addEventListener("input",()=>{
    
    converse.value = getCode(text.value,parseInt(key.value),lettres);

})