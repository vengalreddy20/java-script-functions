

function grade(g){
    switch(true){
        case g<35:
            console.log(" you failed!");
            break;
        case g>=35 || g<60:
            console.log(" you got second class! ");
            break;
        case g>=60 || g<80:
            console.log(" you got first class! ");
            break;
        case g>85:
            console.log(" you got distinction! ");
            break;
        default:
            console.log(" enter valid percentage! ");

    }
}
grade(74);