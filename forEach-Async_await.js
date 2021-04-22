/**This is a function that returns a Promise after 50ms */
const AIFoodRecognition = (food) => {
    const dictionary = {
        orange: "fruit",
        salami: "meat",
        salmon: "fish",
        kale: "vegetable",
        banana: "fruit",
    };

    return new Promise((r) =>
        setTimeout(() => {
            return r(`${food} is a ${dictionary[food]}`);
        }, 500)
    );
};


/**This set of code has a forEach that uses Async/await to call the above fuction 
 */
const foodArray = ["orange", "salami", "salmon", "kale", "banana"];

const run = async() => {
    console.log("Start")

    foodArray.forEach(async(food) => {
        const output = await AIFoodRecognition(food);
        console.log(output);
    });

    console.log("End")
};


run()


/**
 * 
 * The expected output is :
 *      Start
 *      orange is a fruit
        salami is a meat
        salmon is a fish
        kale is a vegetable
        banana is a fruit   
        End

    But , we get:
        Start
        End
        orange is a fruit
        salami is a meat
        salmon is a fish
        kale is a vegetable
        banana is a fruit 
        
        
        The reason is forEach creates a new generator function for 
        each iteration . 
        These generator function takes time for the promise to resolve,
        while the iteration and the rest of the code is executed.

        Generator function is a function that can stop midway and then
        continue from where it stopped . 
        These functions are intricately linked with iterators. 
        The syntax is - function * <generator_func_name>

          
 *          
 */