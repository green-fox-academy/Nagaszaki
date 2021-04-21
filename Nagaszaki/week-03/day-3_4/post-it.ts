'use strict'
export{}

/*
Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!"
*/

class PostIt{
    backgroundColor: string;
    text: string;
    textColor: string;
}

let orange: PostIt = new PostIt(),pink: PostIt = new PostIt(), yellow: PostIt = new PostIt();
orange.backgroundColor = "orange";
orange.text = "Idea 1";
orange.textColor = "blue";
pink.backgroundColor = "pink";
pink.text = "Awesome";
pink.textColor = "black";
yellow.backgroundColor = "yellow";
yellow.text = "Superb!";
yellow.textColor = "green";