
/*
🚀 Project: CFS.dev Portfolio Manager

🎯 Goal:
You are building your own portfolio website (CFS.dev).

Store your portfolio projects in an array and update them as your portfolio grows.

Instructions:

1. Create an array called projects with these projects:

- "Bakery Website"
- "Gelato Lane"
- "Study Hub"

2. Print the total number of projects using .length.

3. Replace "Study Hub" with "Restaurant Website".

4. Add a new project to the end of the array:
   "Fitness Landing Page"

5. Remove the last project using pop().

6. Print:

===== CFS.dev Portfolio =====
Total Projects:
First Project:
Last Project:
All Projects:

7. Bonus Challenge (Don't Google)

Print only the second project.
Print only the last project using .length instead of writing its index.
*/

const projects = ["Bakery Website","Gelato Lane","Study Hub"];
projects[2]="Restaurant Website";
projects.push("Fitness Landing Page");
projects.pop("Fitness Landing Page")
console.log("Total Projects: ",projects.length);
console.log("Frist Projects: ",projects[0]);
console.log("Last Name: ",projects[2]);
console.log(projects);

