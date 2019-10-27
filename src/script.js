
//>>>>>>>>>>>>>>>>>>>>>>>>> Vars 
let record = {
    'user' : {
    'nombre' : 'Mandy',
    'day' : {
        'date' : '2019-10-08',
        'hours' : {
            '1': 'si',
            '2': 'si',
        }
    }
}
}


  
// ejemplo
  //$("#res").text(json.autos[2].marca[2].submarca);

//>>>>>>>>>>>>>>>>>>>>>>>>> Functions
MaysPrimera = (string) => string.charAt(0).toUpperCase() + string.slice(1);

getDate = () => {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return date;
}
getTime = () => {
    let today = new Date();
    let time = today.getHours();
    return time;
}
getName = () => {
    record.name =  MaysPrimera(prompt('what´s your name?'))
    debug(record);
    return record.name;
    
}

setName = () => { 
    getName(); 
    document.getElementById('title').innerHTML = 'Welcome, ' + record.name;
}
monotonyHour = () => {
    answer = prompt('Do you have more than 20min of monotony?')
    if(record.day === getDate()) 
    {
        record.date = date;
        debug(record)
      /*
        time = getTime();
        hour.monotony = answer;
        date.hour = hour;
        record.day = date;
        */
    } else 
    {
        /*
        record.day = getDate();
        hour.time = getTime();
        hour.monotony = answer;
        date.append(hour);
        record.day = date;
        */
    }
    // Falta validar que sean horas diferentes 
    ///>>>>>>>>>>>>>>>>>>>>>>>>Debug
    debug(record)
    
}

    
setHour = () =>{}

debug = (val) => {
    console.log(val);
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>Events
document.addEventListener('loadeddata', setName());
window.setInterval(monotonyHour, 25000);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>Debug

