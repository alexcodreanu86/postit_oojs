# Behavior Drill Post It Board V2 
 
##Learning Competencies 

- OOJS 
- Javascript event binding

##Summary 

 You've created a post-it board already.  Good for you.  Although, it is a bit feature-light, don't you think?

In this challenge, we're going to make the post-it board even better by adding support for multiple boards and the ability to load boards from JavaScript objects.  

The purpose of learning to load boards from JavaScript objects is to become familiar with the practice of updating the DOM using data pulled from the server in a common serialized format such as JSON.  Although we are not using JSON or making any server calls in this challenge, it is close approximation.

## Objectives

### Grab the Gist

Download all of the files in [the gist](https://gist.github.com/dbc-challenges/245ab5e47f46ff8639ef), which is slightly differnent from the previous version.  All of the HTML and CSS has been written, you only need to add your own jQuery (and jQuery UI) flavored JavaScript.

By the way, just because the HTML and CSS is provided for you doesn't mean that you shouldn't look it over.  Never know what you might learn from a little browsing.

Also, notice that there is an extra file: `sample_boards.js` which includes some JavaScript objects.  This is the data you will use to populate sample boards.  Take a look at the video below for more information.

### Multiple Boards, Load Boards from Objects

Your job is to figure out how to accurately model the components of this application in JavaScript, giving each object the appropriate properties and behavior.  A rudimentary skeleton has been provided for you, outlining two primary objects.  Feel free to replace them with your own code.

When you are finished, the program should behave as follows:

<iframe width="640" height="480" src="http://www.youtube.com/embed/TH9oDBg2B1Y?rel=0" frameborder="0" allowfullscreen></iframe>

In addition to the features of the original post-it board, notice the new behavior of this program:

- Clicking on the `New Board` button creates a new board and adds its name to the list on the left.
- When there are multiple boards, users can switch between them by clicking on the name of the board in the list.
- Post-its retain their content and position even when the user switches between boards.
- Clicking on the `Load Samples` button generates two new boards using the objects in the `SampleBoards` variable.  It also disappears once clicked, so that you can only load samples once.

When you finish, take a look at your code:

- Is it DRY?
- Are your objects loosely coupled?
- Do your objects properly distinguish between public and private attributes?

Extra credit:

- Use a different random color for the background of each board.
- Allow users to edit the name of the board so that it is something more interesting than `board_<n>.` 

##Releases
###Release 0 

##Optimize Your Learning 

##Resources
