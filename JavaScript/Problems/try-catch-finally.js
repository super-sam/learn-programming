function getWordsArrayWithoutEHandling(s){
    // Initially number of words are 0
    let words = [];

    //find the words by splitting with space
    words = s.split(" ");
    
    // Print the word count
    console.log("word count : "+ words.length );
}
// Works Properly
getWordsArrayWithoutEHandling("Hello from Sapna!");

// Gerenates error
getWordsArrayWithoutEHandling(123123213);

function getWordsArray(s){
    // Initially number of words are 0
    let words = [];

    // Try finding the words by splitting with space
    try
    {
        words = s.split(" ");
    }
    // If above code have any error, control will be passed to catch block
    catch (e)
    {
        console.log(e.message, "String given : ", s);
    }
    // With or without any error, finally block will always be executed
    finally
    {
        console.log("word count : "+ words.length );
    }
}

// Works Properly
getWordsArray("Hello from Sapna!");

// Gerenates error which is handled
getWordsArray(123123213);
