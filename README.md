# Trivia World

[View live website here](https://dissyulina.github.io/trivia-world/index.html)

<br/>

**Table of Contents**


------

## Introduction   
Welcome to the Trivia World! 
Trivia World is a website-based quiz/ trivia game in various topics such as Sports, Geography, History, Arts, Music, and Science. The game also features a spinning wheel to assign topic, and stars achievement system that differentiates it from another quiz games. It also saves scores in the user’s local storage so the user can resume the game and allows multiple user name in the same device.   

Please note that this website game was created for the Code Institute’s Milestone Project 2 as part of their Diploma in Full Stack Software Development. The requirements are to make an interactive front-end website, using HTML, CSS, JavaScript.   
<br/>

## UX Development Plane   
### 1. Strategy Plane   

#### **User Stories**   
A strategic UX research was done through interviews with a few potential users. 
- **First Time Visitor Goal**   
   As a first time visitor, I want to:   
   a. Easily navigate throughout the site between pages, to play or to quit the game.   
   b. Play the game intuitively without first reading on the instruction.  
   c. Finding the instructions on how to play the game in case it is needed. 
   d. Be able to choose different topics. 
   e. Play the game with a great user interface visually.  
   f. Have a clear information inside the quiz’s questions, i.e. which topic I get, how much point does this question worth, the progress bar, etc.  
   g. View my achievements.  
   h. Be able to save my achievements so that I can resume it later.  
   i. Toggle the sound on and off.  
   j. Change the language of the game.  

- **Returning/ Frequent Time Visitor Goal**   
   As a returning / frequent visitor, I want to:  
   a. Resume the playing that I did before, with my achievement still saved in the game.   
   b. Send suggestions to the developer to improve the game.  
   c. Know in which topics I have full achievements.  

<br/>

#### **Online Research**
As a part of the planning process, an online research was done to gain some inspiration on UI and UX of a quiz game, including:
1. [Squla](https://leukleren.squla.nl/demo) app
2. [Kahoot!](https://kahoot.com/)
3. Similar quiz games created by Code Institute peers (searched in channel peer-code-review in Slack)   
<br/>

#### **Project Goals**  
The primary goal of Trivia World is to provide a web-based interactive quiz game, that is different from other typical quiz game. The game has to be fun and challenging to attract user to play the game until they can achieve rewards.   
<br/>   

#### **Player Goals**   
The target user for this game is:
-	Late teens and young adult, 15 – 35 years old  
-	Consider themselves quite knowledgeable in various topics  
-	Enjoys quiz games  

The player is looking for:
-	A fun and challenging quiz game to play
-	Stars to be achieved, that creates a sort of goals/ target to be accomplished from the game.
-	Scores and achievements that can be saved  
<br/>

#### **Developer Goals**   
The developer is looking to:
-	Create a fun game that they would play themselves
-	Demonstrate their skills and logic in using JavaScript, fetch API, and using local storage effectively.   

#### **Strategy Table**  
Based on the user stories and goals above, I brainstormed all of the opportunities that could be implemented in the game. All of these opportunities were mapped based on their importance (driven by goals and user needs), and viability (given limited time and resources), to determine which opportunities were going to be included and which were not.   
Opportunities / Features | Importance | Viability
   --- | --- | ---
   A. Various topics in a quiz | 3 | 3
   B. Has scores and/or unique points system | 4 | 3
   C. Toggle sound on and off | 3 | 5
   D. Contact form to send message | 3 | 4
   E. High scores list between players | 2 | 3
   F. Difficulty levels | 4 | 4
   G. Social media links | 1 | 5
   H. Achievements and scores can be saved | 5 | 3
   I. How to play explanation | 4 | 5
   J. Add a fun aspect to the quiz | 5 | 4


The chart below is the mapping of all of the opportunities. The yellow circle signifies which opportunities/ features have the highest combination of importance and viability.   
![The mapping of the opportunities](assets/readme/opportunities-mapping.png "The mapping of the opportunities")

<br />  

### 2. Scope Plane  
Based on the mapping in the Strategy Plane, I decided to include these features below in the game.
1.	A spinning wheel   
A spinning wheel is used to decide which topic the user will get. 
Instead of letting the user choose the topic in a straight-forward way, I decided to incorporate a spinning wheel to decide which topic the user will get. A spinning wheel serves two main purposes of the mapping in the Strategy Plane, which are:   
    -	Gives various topics to the game, and acts as a decision-making tool.   
    -	Adds a fun aspect of the game, as many people enjoy spinning the wheel.   
2. Unique score/ points system   
 I decided to make a unique points system as follows:   
   -	Every question is assigned points if answered correctly
   -	For every 1000 points reached in a topic, the user will be rewarded a star in that topic.
   -	The user can get maximum 3 stars in each topic. When a topic has 3 stars, the achievement for that topic is completed.  
3. Points and stars are saved in the local storage of the user’s device   
The achievements - points and stars, would be saved in the local storage of the device. At the landing page, the user is asked to input the username. If the username exists, the game will load the achievements. This allows the user to resume the game whenever they like, and other user can also use the same device and create their own username.   
4. Difficulty level goes up after each star achieved   
Players can enjoy to be challenged in the game, because as the player reach a star, the difficulty level of the next set of questions goes up as well.
    -	For users that have 0 star in a topic, the difficulty level of the corresponding topic is Easy.
    -	For users that have 1 star in a topic, the difficulty level of the corresponding topic is Medium.
    -	For users that have 2 and 3 stars in a topic, the difficulty level of the corresponding topic is Hard.
5. How to play explanation  
The user can access a How to Play page if they need it. In the game I will use descriptive messages, buttons, and other established conventions, therefore the user can play the game intuitively without checking out the rules/instruction first.   
6. Contact form
The user can easily contact the developer through a contact form.   


And some functionalities in the game to guarantee the user has a great user experience:
1.	The user can toggle the sound button on and off
2.	The user can navigate easily through the game, to quit or to play again


### 2. Structure Plane  
The game was organized in a Hierarchical Tree Structure that ensures the user can navigate easily and intuitively.  
![The structure of the website/game](assets/readme/structure.jpg "The structure of the website/game")
There are 6 pages in planning: 
1. Landing page. 
2. Spinning Wheel page, where the user chooses a topic.
3. Questions page, where 10 set of questions in that topic appears one by one.
4. Stars Achievement page, where the user can see all the stars that they have earned.
5. How to Play page, where the user can find the instructions or rules for the game.
6. Contact page, where the user can send a message to the developer via a contact form.

 









---


