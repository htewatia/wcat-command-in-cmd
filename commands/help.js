function helpfn(){
    console.log(`List of all commands:
        node wcat.js <filename>
        node wcat.js <filename1><filename2><filename3>
        node wcat.js -s <filename>
        node wcat.js -n <filename>
        node wcat.js -b <filename>
        node wcat <filename1><filename2>
        node wcat <filename1><filename2>
        node wcat -s <filename1><filename2>`
    );    
}

module.exports = {
    helpfn:helpfn
}