// Problem 1
this.name = "Alex"
function introduce(name) {
    console.log(this.name);
  }
  introduce("Alex");
 
// Task:
// Replace the name reference inside the function with this.name. 
// Then assign this.name = "Alex" in the global scope before calling the function (ignore the parameter when testing this).

// Q: What is printed? Why does this.name work (or not) in this context?

// Answer: Alex is printed. this.name works in this context because you declare name as Alex globally and then call it in the function.

// Problem 2
this.greeting = "Hello!"
function runArrow(greeting) {
    const arrowFunc = () => {
      console.log(this.greeting);
    };
    arrowFunc();
  }
  runArrow("Hello!");

  
//   Task:
//   Replace greeting with this.greeting and assign this.greeting = "Hello!"; before calling the outer function.
  
//   Q: What does this.greeting refer to here? Why doesn't it refer to the parameter anymore? 

//   A: this.greeting is referring to the object outside of the function. it doesn't refer to the parameter anymore because it overrides it. 

// Problem 3

const display = {
    message: "This is from the object",
    show: function (param) {
      console.log(this.message);
    }
  };
  display.show("Passed argument");

//   Task:
// Replace param with this.message inside the function.

// Q: What is printed now? Why does this refer to the object? What happened to the argument?

// A: This is from the object is printed now. It refers to this object because you specific this.message and message is a global variable. The argument is overrided and logs the message variable. 

// Problem 4

  function handleClick(text) {
    console.log(text);
  }

  document.getElementById("myBtn").onclick = function () {
    this.text = "Clicked!"
    handleClick(this.text);
  };

  document.getElementById("myBtn2").onclick =  () =>{
    this.text = "Clicked2!"
    handleClick(this.text);
  };

// Task:
// Instead of passing "Clicked!", change handleClick() to use this.text, and assign this.text = "Clicked!"; inside the event function. Also try the same with an arrow function.

// Q: What does this.text refer to in each case? Why does the arrow function behave differently?

// A: this.text refers to a local scope object. The arrow function behaves differently because it anonymous function