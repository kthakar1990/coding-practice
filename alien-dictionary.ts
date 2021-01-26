var isAlienSorted = function(words, order) {
    let valid = true;
    let pos = 0;
    while (valid) {
        let currWord = words[pos];
        let nextWord = words[pos+1];
        if (!nextWord) return true;
        for(let i = 0; i < currWord.length; i++){
            if (order.indexOf(currWord[i]) < order.indexOf(nextWord[i])) {
                valid = true;
                break;
            } else if (order.indexOf(currWord[i]) == order.indexOf(nextWord[i])) {
                continue;
            } else {
                valid = false;
                break;
            } 
        }
        pos++;
    }
    return valid;
};