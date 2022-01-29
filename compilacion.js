let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);
let c = Math.floor(Math.random() * 100);
let d = Math.floor(Math.random() * 100);
let e = Math.floor(Math.random() * 100);
let f = Math.floor(Math.random() * 100);

console.log(a,b,c,d,e,f);

let Michael = prompt("La variable A es mayor que 50?");
let Miguel = prompt("La variable B es mayor que 50?");
let Jonh = prompt("La variable C es menor que 50?");
let Juan = prompt("La variable D es menor que 50?");
let Albert = prompt("La variable E es menor o mayor que 50?");
let Alberto = prompt("La variable F es igual a 50?");

const converTString = (h) =>{
    switch (h.toLowerCase().trim()){
        case "yes": case "correcto": case "si": case "verdadero": case "true": case "positivo": return true;
        case "no": case "incorrecto": case "falso": case "false": case "negativo" : return false;
        default: return Boolean(h);
    }
}

const chooseYouAnswer1= (i)=>{
    let booleanResponsive = converTString(i)
    if(booleanResponsive === true && a >= 50){
            alert("Es correcto Michael. Puedes ser amigo de Cofla!");
            document.write("Michael <br>");
            return true;
        }else if( booleanResponsive === false && a <= 50){
            alert("Es correcto Michael. Puedes ser amigo de Cofla!");
            document.write("Michael <br>");
            return true;
        }else{
            alert("Es erroneo Michael. Tu no puede ser amigo de Cofla!");
            return false;
        }
}
const chooseYouAnswer2= (i)=>{
    let booleanResponsive = converTString(i)
    if(booleanResponsive === true && b >= 50){
            alert("Es correcto Miguel. Puedes ser amigo de Cofla!");
            document.write("Miguel <br>");
            return true;
        }else if( booleanResponsive === false && b <= 50){
            alert("Es correcto Miguel. Puedes ser amigo de Cofla!");
            document.write("Miguel <br>");
            return true;
        }else{
            alert("Es erroneo Miguel. Tu no puede ser amigo de Cofla!");
            return false;
        }
}
const chooseYouAnswer3= (i)=>{
    let booleanResponsive = converTString(i)
    if(booleanResponsive === false && c >= 50){
            alert("Es correcto Jonh. Puedes ser amigo de Cofla!");
            document.write("Jonh <br>");
            return true;
        }else if( booleanResponsive === true && c <= 50){
            alert("Es correcto Jonh. Puedes ser amigo de Cofla!");
            document.write("Jonh <br>");
            return true;
        }else{
            alert("Es erroneo Jonh. Tu no puede ser amigo de Cofla!");
            return false;
        }
}
const chooseYouAnswer4= (i)=>{
    let booleanResponsive = converTString(i)
    if(booleanResponsive === false && d >= 50){
            alert("Es correcto Juan. Puedes ser amigo de Cofla!");
            document.write("Juan <br>");
            return true;
        }else if( booleanResponsive === true && d <= 50){
            alert("Es correcto Juan. Puedes ser amigo de Cofla!");
            document.write("Juan <br>");
            return true;
        }else{
            alert("Es erroneo Juan. Tu no puede ser amigo de Cofla!");
            return false;
        }
}

const definitionAnswerOfA = (j) =>{
    if(e < 50 && j.toLowerCase() == "menor"){
        return true;
    }else if (e > 50 && j.toLowerCase() == "mayor"){
        return true;
    }else if (e === 50){
        return undefined
    }
    else{
        return false;
    }
}

const chooseAnswerOfA = (k) =>{
    let booleanResponsiveA = definitionAnswerOfA(k);
    if(booleanResponsiveA === true){
        alert("Es correcto Albert. Puedes ser amigo de Cofla!");
        document.write("Albert <br>");
        return true;
    }else if (booleanResponsiveA === false){
        alert("Es incorrecto Albert. Tu no puedes ser amigo de Cofla!");
        return false;
    }else{
        alert("Has tenido mala suerte. El amigo de Cofla es ALberto");
        return 1
    }
} 

console.log(definitionAnswerOfA(Albert));

const chooseAnswerOfA1 = (l) =>{
    let booleanResponsiveA1 = definitionAnswerOfA(l);
    if(booleanResponsiveA1 === undefined){
        alert("Es correcto Alberto. Puedes ser amigo de Cofla!");
        document.write("Alberto <br>");
        return true;
    }else if(chooseAnswerOfA === 1){
        alert("Es correcto Alberto. Puedes ser amigo de Cofla!");
        document.write("ALberto <br>");
        return true;
    }else{
        alert("Es incorrecto Alberto. Tu no puedes ser amigo de Cofla!");
        return false;
    }
} 

chooseYouAnswer1(Michael);
chooseYouAnswer2(Miguel);
chooseYouAnswer3(Jonh);
chooseYouAnswer4(Juan);
chooseAnswerOfA(Albert);
chooseAnswerOfA1(Alberto);

const randomName = (name1, name2) => {       
    let array = [name1, name2];
    let random = Math.floor(Math.random() * array.length);
    const selectReal = array[random];
    document.write(selectReal + "<br>");
}

function enCaseOfErrorFor (case1, case2){
    let grandArray = ("Michael", "Miguel", "Jonh", "Juan", "Albert", "Alberto");

    if( (case1 == Michael|| Miguel|| Jonh|| Juan|| Albert|| Alberto) && (case2 == Michael|| Miguel|| Jonh|| Juan|| Albert|| Alberto)){
        if((case1 == Michael) && (case2 == Miguel)){
            for(litleArray in grandArray){
                if(litleArray <= 1 ){
                    litleArray = ["Michael","Miguel"];
                    let random = Math.floor(Math.random() * litleArray.length);
                    const selectReal = litleArray[random];
                    document.write(selectReal + "<br>");
                    break; 
                }
            }
        }else if((case1 == Jonh) && (case2 == Juan)){
            for(litleArray in grandArray){
                if(litleArray >= 2, litleArray <= 3){
                    litleArray = ["Jonh","Juan"];
                    let random = Math.floor(Math.random() * litleArray.length);
                    const selectReal = litleArray[random];
                    document.write(selectReal + "<br>"); 
                    break;
                }
            }
        }else if((case1 == Albert) && (case2 == Alberto)){
            for(litleArray in grandArray){
                if(litleArray >= 4, litleArray <= 6){
                    litleArray = ["Albert","Alberto"];
                    let random = Math.floor(Math.random() * litleArray.length);
                    const selectReal = litleArray[random];
                    document.write(selectReal + "<br>");
                    break;
        }else{
                document.write("No tenemos problemas");
        }
        }
        }
        }
}

enCaseOfErrorFor(Michael, Miguel);
enCaseOfErrorFor(Jonh, Juan);
enCaseOfErrorFor(Albert, Alberto);
