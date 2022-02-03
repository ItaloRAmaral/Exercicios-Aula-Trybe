const chessPiece = "alma gemea";

switch(chessPiece.toLowerCase()){
    case "cavalo":
        console.log("anda em L");
    break;
    case "bispo":
        console.log("anda em diagonal");
    break;
    case "peao":
        console.log("anda uma casa pra frente");
    break;
    default: console.log("ErroR");
}