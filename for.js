/* for(i=0; i<=7; i++) {
    console.log(i);
}
money = 100;
while(money < 7) {
    console.log(money);
    money--;
} */

function linearSearch(num, arr) {
    let found;
    for(let i=0; i < arr.length; i++) {
        if(arr[i] === num) {
            found = arr[i];
            break
        } 
        else {
            console.log("still looking...");
        }
    }
    if(!found ){  //!found OR found == null means that found has no value
        console.log("cant find number");
    } else {
        console.log(found);
    }
    console.log(found);
    return found;
}

linearSearch(50, [1, 2, 4, 5, 6, 7]);

