var string = "((())(()))((()))";

function checkBalance(string, position) {
    if(string.length == 0) {
        return true;   
    }
    
    if(string[position] == "(" && string[position+1] == ")") {
        string.splice(position, 2);
        return checkBalance(string, 0);
    }
    if(position < string.length - 1)
        return checkBalance(string, position + 1);
    else 
        return false;
}

checkBalance(string.split(''), 0);
