function toCamelCase(str){
    result = "";
    wordArr = str.split("-");

    wordArr.forEach(word => {
        for(let i = 0; i <= word.length; i++){
                if(i == 0 && word != wordArr[0]){
                    result += word.charAt(i).toUpperCase();
                } else result += word.charAt(i);
            }
    });
    return result;
}

console.log(toCamelCase("cosa-con-guiones"));