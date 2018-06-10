var ftime = process.argv[2];
var stime = process.argv[3];

ttime = parseInt(ftime) + parseInt(stime);


hours = Math.floor(ttime / 3600);

minutes = Math.floor((ttime - (hours * 3600)) / 60)

seconds = ttime - (hours * 3600) - (minutes * 60)

result = "";

if (hours > 0) {
   var hsuffix = (hours > 4) ? "часов" : ((hours > 1) ? "часа" : "час")
    result += hours + " " + hsuffix + " ";
}

if (minutes > 0) {
    var msuffix = (minutes > 4) ? "минут" : ((minutes > 1) ? "минуты" : "минута")
    
    if (minutes > 20) {
        minute = minutes % 10;
        msuffix = (minute > 4) ? "минут" : ((minute > 1) ? "минуты" : "минута")
    }
    
    result += minutes + " " + msuffix + " ";
}

if (seconds > 0) {
    var ssuffix = (seconds > 4) ? "секунд" : ((seconds > 1) ? "секунды" : "секунда")
    
    if (seconds > 20) {
        second = seconds % 10;
        ssuffix = (second > 4) ? "секунд" : ((second > 1) ? "секунды" : "секунда")
    }
    
    result += seconds + " " + ssuffix + " ";
}

console.log (result);