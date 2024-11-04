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
    "will be amazing",                      
    "is full of joy",                      
    "holds great adventure",                
    "will revolve around dogs",            
    "is full of daily surprises",           
    "is filled with rainy days"            
];

const advices = [
    "so stay positive",                     
    "keep your rain clothes on",            
    "believe in yourself",                  
    "be friendly to all living things",     
    "make a joke every day",                
    "and do a good deed every day"          
];

// Exporting the data as a module to make it available for import in other files.
// This allows other parts of the application, such as the message generator,
// to access these arrays and utilize them in generating messages.
module.exports = { subjects, actions, advices };
