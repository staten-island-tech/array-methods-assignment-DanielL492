/* for(i=0; i<=7; i++) {
    console.log(i);
}
money = 100;
while(money < 7) {
    console.log(money);
    money--;
} */

/*function linearSearch(num, arr) {
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

linearSearch(50, [1, 2, 4, 5, 6, 7]);*/



const c3mp = ["A", "B", "C", "D", "E"];

function btn1(arr, firstnum, lastnum) {
    arr[firstnum] = arr.splice(lastnum, 1, arr[firstnum]) [0]; //prevents E from turning into own array
    //console.log(arr); //for test 
}

function btn2(arr, lastnum) {
    arr.unshift(arr[lastnum]);
    arr.splice(5, 1);
    //console.log(arr);
}

function btn3(arr, firstnum, secondnum) {
    arr[firstnum] = arr.splice(secondnum, 1, arr[firstnum]) [0];
    //console.log(arr); //for test
}

//btn1(c3mp, 0, 4);
//btn2(c3mp, 4)
//btn3(c3mp, 0, 1);

function calc(btn, timespressed, arra) {
    if (btn = "1") {
        for (let i = 0; i<timespressed; i++) {
            btn1(arra, arra[0], arra[4]);
        }
        console.log(arra);
    }
    else if (btn = "2") {
        for (let i = 0; i<timespressed; i++) {
            btn2(arra, arra[4]);
        }
        console.log(arra);
    }
    else if (btn = "3") {
        for (let i = 0; i<timespressed; i++) {
            btn3(arra, arra[0], arra[1]);
        }
        console.log(arra);
    }
    else {
        console.log(arra)
    }
}

calc(3, 1, c3mp);

/*let repeat = Number(prompt("How many times do you want to run this sequence?"));

function fib(repeat) {
    const fibo = [0, 1]
    let result = 0;
    for(let i = 1; i <= arr.length; i++) {
        result = arr.push(arr-[] + arr.length[]);
    }
    console.log(arr);
}*/



/*function spaces(s, y, t) {
    let total = 0;
    for (let i = 0; i<= s; i++) {
        if (y[i] === "C" && t[i] === "C") {
            total++;
        }
    }
    console.log(total);
}

spaces(5, "CC..C", ".CC..");*/