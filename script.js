 /*
    🐦 DAVID Bruno Twitter profile 🐦

    🏁 Please take this quick challenge and rename carefully all the variable, and fix this broken code by assigning the correct 
    variable keyword you have learned in the quest.
    ex: const name = "David";

  */

    const name = "David"; // ✅ Good!  
    //lastname = "Bruno"; // ❌ the keyword to declare the variable is missing 
    const lastname = "Bruno";
    
    //let z = "Hi, I'm David Bruno from SF, I like to cook and meet new people."; // ❌ the variable name is not explicit. (this is David's biography)
    const biography = "Hi, I'm David Bruno from SF, I like to cook and meet new people.";
  
    //1img = "http://www.go.com/davif.png"; // ❌ the variable name is not explicit and the keyword is missing (this is David's profile picture)
  
    const profilePicture = "http://www.go.com/davif.png";

    //l = "San Francisco"; // ❌ the variable name is not explicit and the keyword is missing (try to guess what "San Francisco" could refer to)
  
    const city = "San Francisco";

    //followers = 109; // ❌ the keyword to declare the variable is missing 
    
    const followers = 109;
    
    //following = 200; // ❌ the keyword to declare the variable is missing 
  
    let following = 200;

  // 🏁 Exercise 02 - David is following one more account increment the total of following account

  following += 1;


console.log(`Name: ${name} ${lastname}`);
console.log(`Biography: ${biography}`);
console.log(`Profile Picture: ${profilePicture}`);
console.log(`Location: ${city}`);
console.log(`Followers: ${followers}`);
console.log(`Following: ${following}`);
