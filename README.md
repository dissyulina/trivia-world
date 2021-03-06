# Trivia World

![Trivia World in various devices](assets/readme/am-i-responsive.png "Trivia World website game in various devices")  

[View live website here](https://dissyulina.github.io/trivia-world/index.html)

<br/>

**Table of Contents**  
1. [Introduction](https://github.com/dissyulina/trivia-world#introduction)  
2. [UX Development Planes](https://github.com/dissyulina/trivia-world#ux-development-plane)   
   i. [Strategy Plane](https://github.com/dissyulina/trivia-world#1-strategy-plane)  
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- [User Stories](https://github.com/dissyulina/trivia-world#user-stories)  
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- [Online Research](https://github.com/dissyulina/trivia-world#online-research)  
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- [Project Goals, User Goals, and Developer Goals](https://github.com/dissyulina/trivia-world#project-goals)  
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- [Strategy Table](https://github.com/dissyulina/trivia-world#strategy-table)

   ii. [Scope Plane](https://github.com/dissyulina/trivia-world#2-scope-plane)  
   iii. [Structure Plane](https://github.com/dissyulina/trivia-world#3-structure-plane)  
   iv. [Skeleton Plane / Wireframes](https://github.com/dissyulina/trivia-world#4-skeleton-plane)  
   v. [Surface Plane / High Fidelity Mock Up](https://github.com/dissyulina/trivia-world#5-surface-plane)  
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- [Color Scheme](https://github.com/dissyulina/trivia-world#color-scheme)  
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- [Typography](https://github.com/dissyulina/trivia-world#typography)  
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- [Imagery](https://github.com/dissyulina/trivia-world#imagery)  

3. [Features](https://github.com/dissyulina/trivia-world#features)  
   i. [General Design Features](https://github.com/dissyulina/trivia-world#existing-features)  
   ii. [Page Design Features](https://github.com/dissyulina/trivia-world#page-design-features)   
   iii. [Features to be Implemented in The Future](https://github.com/dissyulina/trivia-world#features-to-be-implemented-in-the-future)

4. [Technology Used](https://github.com/dissyulina/trivia-world#technology-used)  
   i. [Main and Additional Languanges](https://github.com/dissyulina/trivia-world#main-languages-used)  
   ii. [Frameworks, Libraries, & Programs Used](https://github.com/dissyulina/trivia-world#frameworks-libraries--programs-used)  

5. [Issues and Bugs](https://github.com/dissyulina/trivia-world#issues-and-bugs)  
   i. [Solved Issues](https://github.com/dissyulina/trivia-world#solved-issues)  
   ii. [Known Issues & Unsolved Bugs](https://github.com/dissyulina/trivia-world#known-issues--unsolved-bugs)  

6. [Deployment](https://github.com/dissyulina/trivia-world#deployment)  
   i. [Deploy to Github](https://github.com/dissyulina/trivia-world#deployment-to-github-pages)  
   ii. [Forking to Github Repository](https://github.com/dissyulina/trivia-world#forking-the-github-repository)  
   iii. [Making a Local Clone](https://github.com/dissyulina/trivia-world#making-a-local-clone)  

7. [Testing](https://github.com/dissyulina/trivia-world#testing)   
   i. [Go to TESTING.md](https://github.com/dissyulina/trivia-world/blob/main/TESTING.md#trivia-world---testing)  

8. [Credits](https://github.com/dissyulina/trivia-world#credits)  
   i. [Code](https://github.com/dissyulina/trivia-world#code)  
   ii. [Images](https://github.com/dissyulina/trivia-world#images-and-icons)  
   iii. [Sound Effects](https://github.com/dissyulina/trivia-world#sound-effects)  
   iii. [Contents](https://github.com/dissyulina/trivia-world#contents)   

9. [Acknowledgements](https://github.com/dissyulina/trivia-world#acknowledgements)  

<br/>


------

## Introduction   
Welcome to the Trivia World! 
Trivia World is a website-based quiz/ trivia game in various topics - Sports, Geography, Computer, Film, Music, and Science. The game also features a spinning wheel to assign a topic and a stars achievement system that differentiates it from other quiz games. It also saves scores in the user???s local storage so the user can resume the game and allows multiple user names on the same device.    

Please note that this website game was created for the Code Institute???s Milestone Project 2 as part of their Diploma in Full Stack Software Development. The requirements are to make an interactive front-end website, using HTML, CSS, JavaScript. The site should respond to the users??? actions, allowing users to actively engage with data, alter the way site displays the site displays the information to achieve their preferred goals.   

<br/>

## UX Development Plane   
### 1. Strategy Plane   

#### **User Stories**   
Strategic UX research was done through interviews with a few potential users. 
- **First Time Visitor Goal**   
   As a first time visitor, I want to:   
   a. Easily navigate throughout the site between pages, to play or to quit the game.   
   b. Play the game intuitively without first reading the instruction.  
   c. Finding the instructions on how to play the game if it is needed.   
   d. Be able to choose different topics.   
   e. Play the game with a great user interface visually.  
   f. Have clear information/ heads up display inside the quiz???s questions, i.e. which topic I get, how much point does this question is worth, the progress bar, etc.  
   g. View my achievements.  
   h. Be able to save my achievements so that I can resume them later.   
   i. Be able to change player/ username so my friends can try to play it on the same device.   
   j. Play a game with sound effects which will enhance the gaming experience.   
   k. Toggle the sound on and off.   

- **Returning/ Frequent Time Visitor Goal**   
   As a returning / frequent visitor, I want to:  
   a. Resume the playing that I did before, with my achievement still saved in the game.   
   b. Send suggestions to the developer to improve the game.   
   c. Know in which topics I have full achievements.  
   d. To be challenged with different difficulty levels.  

<br/>

#### **Online Research**
As a part of the planning process, online research was done to gain some inspiration on UI and UX of a quiz game, including:
1. [Squla](https://leukleren.squla.nl/demo) app
2. [Kahoot!](https://kahoot.com/)
3. Similar quiz games created by Code Institute peers (searched in channel peer-code-review in Slack)   
<br/>

#### **Project Goals**  
The primary goal of Trivia World is to provide a web-based interactive quiz game, that is different from other typical quiz games. The game has to be fun and challenging to attract users to play the game until they can achieve rewards.   
<br/>   

#### **Player Goals**   
The target user for this game is:
-	Late teens to adult, 15 ??? 40 years old  
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
   G. Social media links | 2 | 5
   H. Achievements and scores can be saved | 5 | 3
   I. How to play explanation | 4 | 5
   J. Add a fun aspect to the quiz | 5 | 4


The chart below is the mapping of all of the opportunities. The yellow circle signifies which opportunities/ features have the highest combination of importance and viability.   
![The mapping of the opportunities](assets/readme/opportunities-mapping.png "The mapping of the opportunities")

<br />  

[Back to top](https://github.com/dissyulina/trivia-world#trivia-world)  
<br />  

### 2. Scope Plane  
Based on the mapping in the Strategy Plane, I decided to include these features below in the game.
1.	A spinning wheel   
A spinning wheel is used to decide which topic the user will get. 
Instead of letting the user straightforwardly choose the topic, I decided to incorporate a spinning wheel to decide which topic the user will get. A spinning wheel serves two main purposes of the mapping in the Strategy Plane, which are:   
    -	Gives various topics to the game, and acts as a decision-making tool.   
    -	Adds a fun aspect of the game, as many people enjoy spinning the wheel.   
2. Unique score/ points system   
 I decided to make a unique points system as follows:   
   -	Every question is assigned points if answered correctly
   -	For every 1000 points reached in a topic, the user will be rewarded a star in that topic.
   -	The user can get a maximum of 3 stars on each topic. When a topic has 3 stars, the achievement for that topic is completed.  
3. Points and stars are saved in the local storage of the user???s device   
The achievements - points and stars, would be saved in the local storage of the device. At the landing page, the user is asked to input the username. If the username exists, the game will load the achievements. This allows the user to resume the game whenever they like, and other users can also use the same device and create their username.   
4. Difficulty level goes up after each star achieved   
Players can enjoy being challenged in the game because as the player reaches a star, the difficulty level of the next set of questions goes up as well.
    - For users that have 0 stars on a topic, the difficulty level of the corresponding topic is Easy.
    - For users that have 1 star on a topic, the difficulty level of the corresponding topic is Medium.
    - For users that have 2 and 3 stars on a topic, the difficulty level of the corresponding topic is Hard.   
5. How to play explanation   
The user can access a How to Play page if they need it. In the game, I will use descriptive messages, buttons, and other established conventions, therefore the user can play the game intuitively without checking out the rules/instructions first.     
6. Contact form   
The user can easily contact the developer through a contact form.   


And some functionalities in the game to guarantee the user has a great user experience:
1. The user can toggle the sound button on and off
2. The user can navigate easily through the game, quit or play again    
  

<br/>

### 3. Structure Plane  
The game was organized in a Hierarchical Tree Structure that ensures the user can navigate easily and intuitively.   

![The structure of the website/game](assets/readme/structure.jpg "The structure of the website/game")   

There are 6 pages in planning: 
1. Landing page, as a main menu page.    
2. Spinning Wheel page, where the user chooses a topic.   
3. Questions page, where 10 set of questions in that topic appears one by one.   
4. Stars Achievement page, where the user can see all the stars that they have earned.   
5. How to Play page, where the user can find the instructions or rules for the game.   
6. Contact page, where the user can send a message to the developer via a contact form.   

<br />  

[Back to top](https://github.com/dissyulina/trivia-world#trivia-world)  
<br />  
  

### 4. Skeleton Plane  
Wireframes were created using Figma to design the navigation and interface of the website. One wireframe was created for mobile devices, according to the mobile-first design approach. The wireframe was only a rough sketch design of each page plus modal pop-ups.    

![The wireframes - mobile](assets/readme/wireframe-mobile.jpg "The wireframes - mobile") 

<br/>   

### 5. Surface Plane  
For a better and clearer visualization before coding, and also to check if the color scheme and images match and work great together, a high-fidelity mockup for mobile, tablet, and desktop was made and can be found below.

High fidelity mock-up for mobiles:   
![The mockup - mobile](assets/readme/mockup-mobile.jpg "The mockup - mobile")   

High fidelity mock-up for tablets:   
![The mockup - tablet](assets/readme/mockup-tablet.jpg "The mockup - tablet")  

High fidelity mock-up for desktops:    
![The mockup - desktop](assets/readme/mockup-desktop-1.jpg "The mockup - tablet")   
![The mockup - desktop](assets/readme/mockup-desktop-2.jpg "The mockup - tablet")  


   #### **Color Scheme**  
   The overall theme of the game was blue and green, which were derived from the hero image. Using [Coolors](https://coolors.co), I add three colors from the hero image, and the yellow color of the star image, and then I generated one more color that fits well with those three colors. The result was a magenta color and I will use this color for all buttons.     
   ![The color scheme](assets/readme/color-scheme.jpg "The color scheme")  

   #### **Typography**  
   All of the fonts were sourced from [Google Fonts](https://fonts.google.com).   
   - Main font: Open Sans   
   Open Sans is used as the main font, for all paragraphs and buttons. Open Sans was chosen because it has a modern and clean style. Also following the recommendation in Google fonts of popular pairing font with Pacifico.   
   - Secondary font: Pacifico    
   Pacifico is used as the header (h1 ??? h5) font for the website. It was chosen first since I wanted to choose a beautiful and impactful font for all headers.   
   - Tertiary font:   
   The tertiary font is just used for the game title on the landing page. I wanted to use a fun a thick font to grab the user???s attention since that is the first impression of the website from the user???s perspective.   

   #### **Imagery**  
   - Hero Image was chosen because it???s bright, fun, and capturing attention on the first impression. It is also picturing a curve landscape that corresponds to the ???World??? word of ???Trivia World???.   
   - Every image inside the game were carefully chosen to corresponds with each other, mostly using a blue color theme.   
   - Icons in the achievement page were chosen to keep the blue color theme aligned with other images.   
   - Star image was the only one that differs from the entire theme, as it has a fun and cartoonish feel to it. It was chosen so that it stands out within the game so that the player can differentiate it from the other background images.

<br />  

[Back to top](https://github.com/dissyulina/trivia-world#trivia-world)  
<br />  
  

## **Features**  
### **Existing Features**  
#### **General Design Features**  
   - **Fully responsive** - Each page of the game is fully responsive on all device sizes and features intuitive navigational buttons.   
   - **Footer (toggle sound and direct access to the achievement page)** - Footer is available at the bottom of all pages, and the same for all pages to ensure easy control and navigation, no matter on which page the user is currently at. In the footer there are:  
      * Home button, to allow user to go back to the home page.
      * Toggle sound on and off, to allow users to mute or to play the sound.
      * Achievement page button, to allow users to go straight to their achievement page.  
      * Copyright remarks and links to the developer???s GitHub and LinkedIn.   
   - **Sound effects** - Sound effects were added across the game to enhance user experience in playing the game:   
      * On the wheel when it???s spinning   
      * On modal pop-up after the wheel spun (topic result from the spinning wheel)   
      * On the answer choice if it???s clicked as an auditory feedback, if the answer is correct or wrong   
      * On modal pop-up, after 10 questions are up   
      * On modal pop-up when the user reaches a star   
   - **Error 404 page** - The 404 page was created to navigate the user back to the main page if the user accidentally typing a wrong url.

<br/>   

#### **Page Design Features**     
1. **Landing Page/ Main Menu Page** [click to see the page](assets/readme/feat-landing.png)   
   - There???s a conditional system that a user gets when they are entering the Landing Page.
      * **Modal to input username** - If the user has never played the game on that device before (no data in the local storage is detected), the user will see a modal pop-up that welcomes the user to the game and prompts the user to input their username.   
      * **Welcome greetings to last player** - If the user has played the game on that particular device before, on the landing page there???s a welcome greeting with the last username that played on that device before.   
   - **Change Players Button** - Still related to the username, the Change Player button is available at the top left of the landing page, to allow the users to change username even if they are using the same device. When the user clicks the Change Player button, it will automatically save the current player's achievement on the local storage. A modal will show up to prompt the user to input a username. If the users input an existing username, the game will load all the username???s previous data and achievements. 
   -  On the landing page, there are 3 main buttons: Play button, How To Play button, and Contact button, which all will lead to other pages. As the users click the Play button, they will be brought to the Wheel page, the How To Play button will bring users to the How To Play page and the Contact button to the Contact page.  
   - Footer is placed at the bottom of the page.   
<br/>  

2. **Wheel Page** [click to see the page](assets/readme/feat-wheel.png)   
   - **Easy accessibility of playing the game** - To ensure easy accessibility of the game playing from wherever page the users are currently at, there are Play buttons placed on all pages across the website. The users will be brought to this Wheel page when:   
      * The users click the Play button on the Landing page, How to Play page, Contact page, and Achievement page.   
      * The users click the Play Again button on the modal pop-up on the Question page, after 10 questions are up or after the users get a star.   
   - **Spinning Wheel** - The Wheel page performs as the first page of the playing itself. On this page, the users will spin a wheel to determine a topic for the quiz. Six topics are spread into 12 sections in the spinning wheel: Sports, Music, Film, Computer, Geography, and Science.   
   - There are two buttons on the Wheel page:  Spin The Wheel button, which functions as an action button to spin the wheel and the Quit button, which will take the user back to the Landing page.   
   - **Modal pop-up to display the topic result** - When the users click the Spin The Wheel button, the wheel spins. After the spinning ends a modal pops up that displays the topic that the user gets from spinning the wheel. In the modal, there???s also a short explanation of the rules of the game. From this modal, the user can choose to proceed to the questions by clicking the Bring It On button, or the user can choose to spin the wheel again by clicking the Let Me Spin That Wheel Again button.   
   - Footer is placed at the bottom of the page.   
<br/>  

3. **Question Page** [click to see the page](assets/readme/feat-question.png)   
   - After the users click the Bring It On button from the modal in the Wheel page, the game will take the users to the Question page.   
   - **Spinning page loader** - As the questions are being fetched, there???s a spinning loader icon displayed until the questions are loaded to the page. This ensures the user to know that the game is in the middle of loading something, instead of it???s not working.   
   - **Progress bar and stars** -  On top of the page, there???s a progress bar that will be filled with accumulative points that the users get when their answer is right. On the top right of the page, there???s a gray star. When the progress bar is full, which means the user gets 1000 points, the star image turns yellow, and a modal pops up. 
   - **Heads up display** - Below the progress bar, on the left side, there???s the heads-up display that tells the user: how many points the question is worth, which topic it is, the difficulty level, and the total score.
   - **Timer** - Below the progress bar, on the right side, there???s a timer. As the timer counts down to 0, the question moved on to the next question.
   - **Answer feedback** - Below the statistic and the timer, there are the question and multiple choices answers. These questions and answers are fetched according to the topic using API from Open Trivia DB. As users answer correctly, the chosen answer turns green, while when it's incorrect, the clicked answer turns red, giving the user answer feedback.
   - **Modal response** - A modal wil pop up when:
      * The users get a star (1000 points), or   
      * The users have answered 10 questions, or   
      * The timer is up, on the 10th question.   

      The text inside the modal differs according to which of those three conditions above made the modal appear.  From this modal the users can navigate to other pages using three buttons: Play Again button, Go To Achievement Page button, and Quit button.   
   - Footer is placed at the bottom of the page.   
<br/>  

4. **Achievement Page** [click to see the page](assets/readme/feat-achievements.png)  
   - **The display of all stars** - All of the stars that the user got for each topic are displayed on the Achievement page.   
   - **Complete achievement sign** - When a user has a maximum number of stars for a topic (3 stars), there???s a complete sign with a check-list icon below that topic, which indicates that the achievement for that topic has been completed.   
   - There are two buttons on this page: the Play Again button and the Quit button.   
   - Footer is placed at the bottom of the page.   
<br/>  

5. **How To Play Page** [click to see the page](assets/readme/feat-howtoplay.png)  
   - **Instructions of the game** - How To Play page can be accessed via the Landing page. How To Play page consists of rules and instructions of the game.   
   - There are two buttons on this page, which are: Play button, so the users can immediately play the game without going back to the Landing Page first, and Back To Main Manu button that will bring the user to the Landing page.   
   - Footer is placed at the bottom of the page.  
<br/>  


6. **Contact Page** [click to see the page](assets/readme/feat-contact.png)  
   - **Contact form** - Contact page can be accessed via the Landing page. The contact page consists of a contact form where the users can send a message to the developer.  
   - **Confirmation response** - After the form is submitted, the text on Send Message button turns to ???Sent???, as a response confirmation to the user that the form has been successfully sent. The user will also get a thank you email in their inbox (given the user provided a working email address), and the developer will also get the message in the inbox. This feature was made using EmailJS' service.   

<br/>   

#### **Features to be implemented in the future**   
Due to limited resources (time constraint, skill of the developer at the moment, and other reasons), some features couldn't be implemented now. In the future on the next development phase, these features would be great addition to the game:   
- Background music on landing page and achievement page.   
- Branching out to add more topics, for example, Animals, Environment, Art, etc.   
- Build the back-end database of the game so the users??? achievements can be saved on the server instead of on the local storage of users' devices.   
- In addition to building a back-end database of the game, an online high scoreboard can be implemented as well, allowing users to see high scores of other players.   
- Adjust the stars system so that it doesn???t have a maximum cap, allowing the users to continue playing and still get rewards.   

<br />  

[Back to top](https://github.com/dissyulina/trivia-world#trivia-world)  
<br />  
 

## **Technology Used**  
### **Main Languages Used**
   * [HTML5](https://en.wikipedia.org/wiki/HTML5)
   * [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)  
   * [JavaScript](https://en.wikipedia.org/wiki/JavaScript)   

### **Frameworks, Libraries & Programs Used**  
   1. [Bootstrap 5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction//)  
   Bootstrap was used to assist with the responsiveness and styling of the website. 
   2. [jQuery 3.6.0](https://jquery.com/)  
   jQuery was used as a JavaScript library to help writing less JavaScript code.  
   3. [Google Fonts](https://fonts.google.com)  
   Google fonts was used to import the "Open Sans", ???Pacifico???, and ???Luckiest Guy??? fonts into the html file, and were used on all parts of the site.  
   4. [Font Awesome](https://fontawesome.com)  
   Font Awesome was used throughout the website to add icons for aesthetic and UX purposes.   
   5. [Git](https://git-scm.com)  
   Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.  
   6. [GitHub](https://github.com)  
   GitHub was used to store the projects code after being pushed from Git. 
   7. [Figma](https://www.figma.com)  
   Figma was used to create the wireframes and the high fidelity mock up during the design process.  
   8. [Autoprefixer CSS](https://autoprefixer.github.io)  
   Autoprefixer CSS was used to add vendor prefixes to the CSS rules, to ensure that they work across all browsers.   
   9. [Am I Responsive](ami.responsivedesign.is)  
   Am I Responsive was used to preview the website across a variety of popular devices. 
   10. [Tiny JPG](https://tinyjpg.com) and [Tiny PNG](https://tinypng.com)    
   Tiny JPG and Tiny PNG were used to reduce the file size of the images.
   11. [Coolors](https://coolors.co)  
   Coolors was used to create a cohesive color scheme for the website.
   12. [Vecteezy vector editor](https://www.vecteezy.com/editor)  
   Vecteezy vector editor was used to edit the topic names inside the spinning wheel image.   
   13. [ScreenToGif](https://www.screentogif.com)   
   ScreenToGif editor was used to record computer screen, convert to gif and resize it, to be added to Responsiveness testing.   
   14. [Favicon.io](https://favicon.io/)   
   Favicon was used to generate favicon for the site.  

   <br/>   

## **Issues and Bugs**  

### **Solved Issues**  

I ran into several issues and bugs while developing the website. Some of the tough ones are listed below, along with the solutions that successfully solved them.  

1. **Issue**: During the developing process I made one aggregate JS file for spinning the wheel, for fetching API, and for displaying the questions. I made the logic separately at first and had difficulty connecting the topic result from the wheel and then fetch API according to that topic (I tried to pass the topic as a parameter for fetch function but it didn???t work). It took me 1 full day to search and try and I was still stuck. I contacted tutor support, and Sean from Code Institute helped me to solve the problem. The problem was the code for fetching already worked before the wheel spun, so the topic parameter could not be passed.   

   **Solution**: The solution was to separate the JS file between the code to make the wheel spin (and linked it to the Wheel page), and the code for fetch request (and linked it to the Question page). The topic result from the wheel???s JS file is saved into the local storage, and then on the other JS file, get the topic result back, to then be passed to the fetch function. This solution made me learn about using local and session storage which then become a key knowledge throughout the project, especially in storing and getting achievements.  

2. **Issue**: I wanted to save players??? achievements (points and stars for every topic) while also allowing player change. When a player inputs an existing username, I wanted the achievements for that username being called and the player can resume the playing. For this purpose, I used local storage. My mentor gave me a heads up on the first mentoring to save them to the local storage as below:  
   ```
    username: // as key   
    {sport: 250, music: 1200, science: 2150, etc.. }  // as value    
    ```

   **Solution**: Having learned through [this article](https://attacomsian.com/blog/javascript-local-storage-store-retrieve-objects) on how to store and retrieve an object in the local storage,  I used the JSON.stringify to convert an object to a JSON string and pass it to the local storage when the user decides to change the player, and JSON.parse to parse a JSON string back into an object when the username is called again in the modal on the Landing page.  

3. **Issue**: Toggle sound on/ off button that available at the footer on all pages. If the toggle sound is clicked on one page, that preference the user set on that page would have to carry through to the next page.   

   **Solution**: I used session storage to store the data, so when the users navigate to another page, I can get the stored data and apply it to the toggle sound on that page. Because it???s session storage, the data will be lost once the website is closed.  

4. **Issue**: Username and change player, the design and logic behind it. The feature to change players initially wasn???t in my wireframes and mockups, as I didn???t know exactly how to apply that. I had long thought about how to implement it the best way to ensure a great user experience. On a first design, I made a modal pop up at the landing page to prompt the user to input the username, but soon realized that it was not a good UX to have to input it every time the user goes back to the landing page. If I use the session storage to remember it and remove the modal once the user has input the username, other users can???t change the username and play the game.   

   **Solution**: After discussing it with my mentor, I decided to create a Change Player button on the Landing page. When the user plays the game for the first time on that device (there???s no data detected in the local storage), a modal pops up to prompt the user to input a username. While when there???s already data in the local storage, the landing page will display a welcome greeting to the last username that played the game. If new players want to play, they can click the Change Player button at the top right of the landing page.  

5. **Issue**: When the questions from Open Trivia DB were displayed, I encountered unfamiliar strings such as ```&#039;```. I didn???t know what it was and had some difficulty searching it on google.  
   **Solution**: After searching on Slack, there was a thread with the same problem, and one of the replies informed that it was HTML entity. I searched again on the internet with the HTML entities as keyword and found a very simple solution [here on Stack Overflow](https://stackoverflow.com/questions/5796718/html-entity-decode).
 

### **Known Issues & Unsolved Bugs**  
1. On iOS Safari, these sound effects don't work:
   - A modal pops up after the wheel is transitioned, and
   - A modal pops up after the progress bar is transitioned,   

   This is a known issue with iOS Safari, and the documentation can be found on this [Apple Documentation](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html):   
   ???In Safari on iOS (for all devices, including iPad), where the user may be on a cellular network and be charged per data unit, preload and autoplay are disabled. No data is loaded until the user initiates it. This means the JavaScript play() and load() methods are also inactive until the user initiates playback unless the play() or load() method is triggered by user action.???   
   Because the sound audio play after the wheel???s transition ends, and not by user action, unfortunately, it can???t be played.   

2. In the console, there???s a warning: ???Error with Permissions-Policy header: Unrecognized feature: 'interest cohort.???   
There is a new header from Github as part of an effort to ensure the privacy of the users when browsing GitHub pages (through disabling the interest-cohort feature). Unfortunately the ```interest-cohort``` can be unrecognized in Chrome or other browsers. However, it's just a warning and doesn't affect anything. This topic can be found on [this link](https://github.community/t/i-have-no-idea-what-the-interest-cohort-is/179780/2).

<br />  

[Back to top](https://github.com/dissyulina/trivia-world#trivia-world)  
<br />  
  


## **Deployment**  
The project was developed using Gitpod as the code editor, committed to Git as a local repository, and finally pushed/ stored to GitHub.  

### **Deployment to GitHub Pages**  
The project was deployed to GitHub Pages using the following steps:   
1. Log in to GitHub.  
2. Navigate to the main page of GitHub Repository that will be deployed.  
3. At the top of the Repository, locate the "Settings" button on the menu and click it.  
4. Inside the Settings, on the left side of the page, there???s a list of tab menu. Locate the ???Pages??? tab, and click it.  
5. Under "Source", click the dropdown called "None", select "Master", and then click the ???Save??? button.  
6. The page will automatically refresh.  
7. There???s a notification message that provides the now published site link: ???Your site is ready to be published at https://dissyulina.github.io/trivia-world/???.  


### **Forking the GitHub Repository**  
1. Log in to GitHub.  
2. Navigate to the main page of GitHub Repository that will be deployed.  
3. At the top of the Repository, locate the "Settings" button on the menu and click it.  
4. Inside the Settings, on the left side of the page, there???s a list of tab menu. Locate the ???Pages??? tab, and click it.  
5. Under "Source", click the dropdown called "None", select "Master", and then click the ???Save??? button.  
6. The page will automatically refresh.  
7. There???s a notification message that provides the now published site link: ???Your site is ready to be published at https://dissyulina.github.io/trivia-world/???.  
 

### **Making a Local Clone** 
By cloning a GitHub Repository you can create a local copy on your computer of the remote repository. This allows you to make all of your edits locally rather than directly in the source files of the origin repository, by using the following steps:  
1. Log in to GitHub 
2. Navigate to the main page of the GitHub Repository that you want to clone.
3. Above the list of files, click the dropdown called "Code".
4. To clone the repository using HTTPS, under "HTTPS", copy the link.
5. Open Git Bash.
6. Change the current working directory to the location where you want the cloned directory to be made.
7. Type git clone, and then paste the URL you copied in Step 4.  
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```
8. Press Enter. Your local clone will be created.
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```  
Changes made on the local machine (cloned repository) can be pushed to the upstream repository directly if you have a write access for the repository. Otherwise, the changes made in the cloned repository are first pushed to the forked repository, and then a pull request is created.  
Click [Here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) to retrieve pictures for some of the buttons and more detailed explanations of the above process.  

<br />  

## **Testing**  
The testing documentation can be found [here](https://github.com/dissyulina/trivia-world/blob/main/TESTING.md#trivia-world---testing). 

<br />  

[Back to top](https://github.com/dissyulina/trivia-world#trivia-world)  
<br />  
 


## **Credits**  

### **Code**
1. Bootstrap 5.0: Bootstrap Library was used throughout the project, including these Bootstrap components below: 
   - Bootstrap Modal  
   - Bootstrap Grid System  
   - Bootstrap Form  

2. Youtube videos series titled Build A Quiz App , by James Q Quick: https://www.youtube.com/watch?v=rFWbAj40JrQ.
The code in these videos was sourced to fetch API for the questions and to display the questions and the answers to the HTML page.   

3. Youtube videos series titled Vanilla Javascript - Wheel of Fortune mini game, by Weibenfalk: https://www.youtube.com/watch?v=KdFp12QX-Io&t=793s.
The code in these videos was sourced to spin the spinning wheel and to get the result.   

4. Stackoverflow
   - To decode HTML Entity: https://stackoverflow.com/questions/5796718/html-entity-decode   
   - Footer stays at the bottom without using position absolute: https://stackoverflow.com/questions/44572226/fix-elements-to-the-bottom-of-a-flex-container

5. Learning material about the local storage and session storage
   -  Storing and Retrieving Objects in Local Storage Using JavaScript: https://attacomsian.com/blog/javascript-local-storage-store-retrieve-objects  
   -  How to Store Login Sessions with Local Storage and Session Storage: https://javascript.plainenglish.io/implementing-login-case-using-localstorage-and-sessionstorage-bfddce5d2198  

6. Autoprefixer CSS  
   Add different vendor prefixer to CSS. Input all the CSS code here: https://autoprefixer.github.io  


### **Images and Icons**  
All images were attributed inside their alt or title attribute.
The images were sourced from this page:
1. [Freepik](https://www.freepik.com)   
   - By pch.vector:
      * The image on the Contact Page   
      * The image on the How To Play Page
      * The geography image inside modal
      * The film image inside modal
      * The computer image inside modal
   - By vectorjuice:
      * The science image inside modal
      * The music image inside modal
      * the sport image inside modal
   - By rawpixeldotcom:
      * The gradient background image on the Question page
   - By freepik:
      * The hero image on the landing page
2. [Vecteezy](https://www.vecteezy.com)
   - By kevenodes: The wheel image (and edited by the developer)
   - By Dooder: The image on the Achievement Page
3. [Flaticon](https://www.flaticon.com)
   - By Smashicon: The topic icons used on the Achievement page
   - By Vectors Market: Numbers icons used on the How To Play page
   - By Catkuro: 404 icon on the 404 page
4. [Pngtree](https://pngtree.com) - Star image
5. [Nicepng](https://www.nicepng.com) - The picker above the wheel 
6. [Font Awesome](https://fontawesome.com)   
   - Icon for Change Player button
   - Icon for Toggle Sound On/ Off
   - Icon for Achievement page navigation
7. [Svg background](https://www.svgbackgrounds.com) - the background image on the Wheel page
8. [Loading.io](https://loading.io/) - the spinning page loader   
9. [Favicon.io](https://favicon.io) - the favicon for the website   


### **Sound effects**

1. [Mixkit](https://mixkit.co/free-sound-effects/)
   - Sound for correct answer
   - Sound for modal pop-up after 10 questions are over, or time is up
   - Sound for modal pop-up when the user get a star
2. [Zapsplat](https://www.zapsplat.com)
   - Sound for wrong answer
   - Sound while the wheel spins  
3. [Freesound](https://freesound.org)
   - Sound for topic result

<br/>  

### **Contents**
   All questions and multiple choice answers were fetched from [Open Trivia DB](https://opentdb.com).  

<br/>

## **Acknowledgements**
   * My mentor, Oluwaseun Owonikoko, for the helpful feedback on every detail of the website.  
   * Code Institute's Tutor Support, for the quick response and helfpful solutions.  
   * My husband Sandi, for his daily continuous support and for testing the website across our mobile devices.  
   * Slack community, as the first help to ask when I encountered a problem.  

<br/>  

[Back to top](https://github.com/dissyulina/trivia-world#trivia-world)  
<br />   














---


