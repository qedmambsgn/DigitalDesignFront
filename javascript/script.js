function rightDate(date){
    let arrayOfStrings = date.split(".");
    let errorNumber = 0;
    
    if(arrayOfStrings.length!=3){//проверка на вид 12.26.2001
        errorNumber = 1;
        return errorNumber;
    }

    for(let i = 0; i<arrayOfStrings.length; i++){

        if(Number.isNaN(+arrayOfStrings[i])){
            errorNumber = 2;
            return errorNumber;
        }
    }
    

    if(arrayOfStrings[0]<=0||arrayOfStrings[1]<=0||arrayOfStrings[2]<=0){ //проверка элементов даты на отрицательность
        errorNumber = 3;
        return errorNumber;
    }

    if(arrayOfStrings[0]>12){ //проверка количество месяцев
        errorNumber = 4;
        return errorNumber;
    }

    switch(+arrayOfStrings[0]){ //проверка количество дней
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("huy1")
            if(arrayOfStrings[1]>31){
                errorNumber = 5;
                console.log("хуй2")
                return errorNumber;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if(arrayOfStrings[1]>30){
                errorNumber = 5;
                return errorNumber;
            }
            break;
        case 2:
            if (arrayOfStrings[2]%400==0&&arrayOfStrings[2]%100!=0&&arrayOfStrings[2]%4==0){ //високосный год
                if(arrayOfStrings[1]>29){
                    errorNumber = 5;
                    return errorNumber;
                }
                
            }
            else{
                if(arrayOfStrings[1]>28){
                    errorNumber = 5;
                    return errorNumber;
                }
            }
            break;
        default:
            return errorNumber;
    }
    return errorNumber;

}

function convertFromString(date){
    if (rightDate(date) == 0){
        return new Date(date);
    }
    else{
        return rightDate(date);
    }
}

function which_date(date){

    let convertedValue = convertFromString(date);
    // convertFromString(date);
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    };
    if(convertedValue instanceof Date){
        alert(convertedValue.toLocaleString("ru", options));
    }
    else
    switch(convertedValue){
        case 1:
            alert("Вы ввели дату в неверном формате! Вводите дату через точки, 3 числа.");
            break;
        case 2:
            alert("Вы ввели дату в неверном формате! Уберите буквы из даты.");
            break;
        case 3:
            alert("Вы ввели дату в неверном формате! Уберите отрицательное число.");
            break;
        case 4:
            alert("Вы ввели дату в неверном формате! Измените номер месяца.");
            break;
        case 5:
            alert("Вы ввели дату в неверном формате! Измените номер дня.");
            break;
            
    }
}

var firstSecondOption = document.querySelector("#input");

document.querySelector("#firstoption_button").addEventListener('click', ()=>{
    which_date(firstSecondOption.value);
    // console.log(firstSecondOption.value);
})
var date1
document.querySelector("#secondoption_button_1").addEventListener('click', ()=>{
    which_date("11.16.2007");
})
document.querySelector("#secondoption_button_2").addEventListener('click', ()=>{
    which_date("10.26.2001");
})
document.querySelector("#secondoption_button_3").addEventListener('click', ()=>{
    which_date("04.24.2001");
})