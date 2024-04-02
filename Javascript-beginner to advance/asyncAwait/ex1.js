// AsyncAwait Coding ex1:


const callAllTasks = async() => {
    
    try {

        const t1 = await taskOne();
        console.log(t1);

        const t2 = await taskTwo();
        console.log(t2);

        const t3 = await taskThree();
        console.log(t3);

        const t4 = await taskFour();
        console.log(t4);

    } catch(e) {

        console.log(e);

    }
};

callAllTasks();


// My Journey Share With Github