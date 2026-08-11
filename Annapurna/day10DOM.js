/*🧠 DOM — Part 1: document

The browser gives JavaScript a special object called:

document

It represents the entire webpage.

For example, if your HTML is:

<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>

    <h1>Hello Ashish</h1>
    <p>I am learning JavaScript.</p>

</body>
</html>

JavaScript can access that webpage through:

document

Try:

console.log(document);

Open your HTML in the browser → F12 → Console.

You'll see the webpage's document structure.*/


/* 
🔎 Part 2: querySelector()

This is very important.

querySelector() allows JavaScript to find an HTML element.

Example:

<h1 id="title">Hello World</h1>

JavaScript:

const heading = document.querySelector("#title");

console.log(heading);

The # means we're looking for an ID.

You can also select a class:

<h1 class="title">Hello World</h1>
const heading = document.querySelector(".title");

Or an element:

const heading = document.querySelector("h1");


ALSO HERE WE USE TEXTCONTENT TO CHANGE THE TXT FROM HTML 
EXAMPLE ->
const me = document.querySelector(".me");
me.textContent = "i want to trek a lot i want to see mountains , i want to live on mountains with myyy babydoll"
console.log(me);

*/