function convertTime(time){
    const hour = parseInt(time / 3600);
    let remainSec = parseInt(time % 3600);
    const minute = parseInt(remainSec / 60);
    remainSec = remainSec % 60;
    return `${hour} hour ${minute} ${remainSec} second`;
    
}

console.log(convertTime(7300))