const removeFromArray = function() {
    let array = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        array.forEach(element => {
            if (element === arguments[i]){
                const index = array.indexOf(arguments[i]);

                array.splice(index, 1);
            };
        });
    };
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
