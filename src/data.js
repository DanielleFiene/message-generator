// holds the arrays for message generation
// Each array contains different components of the message to be generated.
// - 'subjects' includes phrases that represent the main theme of the message.
// - 'actions' contains positive affirmations or actions that relate to the subjects.
// - 'advices' offers encouraging or humorous suggestions that complement the message.

const subjects = [
    "Your next 10 days",  
    "Your journey",        
    "Your life",          
    "Life",                
    "The universe"         
];

const actions = [
    "will be amazing,",                      
    "is full of joy,",                      
    "holds great adventure,",                
    "will revolve around dogs,",            
    "is full of daily surprise,",           
    "is filled with rainy days,",
    "is a path filled with cats,",
    "will lead to unexpected fishing adventures,",
    "is full of creativity,",
    "will surprise you time after time,",
    "holds many secrets,",
    "is full of friendships to come,",
    "will be challenging,",
    "is meant for adventure,"            
];

const advices = [
    "so stay positive.",                     
    "keep your rain clothes on.",            
    "believe in yourself.",                  
    "be friendly to all living things.",     
    "make a joke every day.",                
    "and do a good deed every day.",
    "embrace change as it comes.",
    "take time to enjoy the small things in life.",
    "trust your intuition.",
    "spend time doing the things you love.",
    "be your best all the time.",
    "don't try to impress everyone.",
    "you cant always get what you want."          
];

// Exporting the data as a module to make it available for import in other files this allows other parts of the application, such as the message generator,
// to access these arrays and utilize them in generating messages.
module.exports = { subjects, actions, advices };
