export const chooseYouAnswer1 = (i)=>{
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