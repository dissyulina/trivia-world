# Trivia World - Testing  

[Back to the main README.md file](https://github.com/dissyulina/trivia-world#trivia-world)  

[Back to the Testing section in main README.md file](https://github.com/dissyulina/trivia-world#testing)  

[View live website here](dissyulina.github.io/trivia-world/)  

<br/>  

**Table of Contents** 
1. [User Stories Testing]()  
2. [Manual Testing]()  
a. [Responsiveness Testing]()  
b. [Links Testing]()  
c. [Forms Testing]()  
3. [Autoprefixer CSS]()  
4. [W3C Validator Testing]()  
5. [Lighthouse Testing]()  
6. [CI Peer Code Review on Slack]()
7. [Further Testing]()  

<br/>  

---  


## **User Stories Testing**
 - **First Time Visitor Goal**   
    As a first time visitor, I want to:  
    - Easily navigate throughout the site between pages, to play or to quit the game.   
       * To play the game, the user can click the Play buttons which are available throughout the website, so that the user doesn’t have to go back to the main menu first. As explained in the Features section of the Readme, the Play Button is available on the Landing Page, How To Play Page, Contact Page, on modal pop up after the questions are done, and on the Achievement Page.  
       * To quit the game, the user can simply click the Quit button on the Wheel page and the Achievement page. However, the user can not quit the game in the middle of answering the 10 questions, as that is one of the rules of the game. After answering 10 questions or after getting a star, a modal will pop up, and only then the Quit button is made available to the user.  
       * The Footer is displayed at the bottom of every page. In the footer, the user can navigate easily to the Achievement Page and can toggle the sound on/ off as well.  

    - Play the game intuitively without first reading the instruction.  
       * Icons were used conventionally for buttons to allow the user to click intuitively.  
       * Play buttons are designed differently as the main button / call-to-action button with a magenta background color, as a subtle lead for users to find their way to play the game. 
       * The modals are designed and written instructively, with a short informative explanation to the user of what will happen next.  
    
    - Finding the instructions on how to play the game if it is needed.  
       * How To Play page is easily accessible on the landing page/ main menu.  
       * The modals are designed and written instructively, with a short informative explanation to the user of what will happen next.  
    
    - Be able to choose different topics.  
       * The topic is determined through spinning the wheel, which also adds a fun aspect to the game.  
    
    - Play the game with a great user interface visually.  
       * The background/hero image on the landing page fits 100% of the viewport width and height, capturing the attention of first-time users.  
       * Every page is designed with a fun and colorful UI in mind.  

    - Have clear information/ heads up display inside the quiz’s questions, i.e. which topic I get, how much point does this question is worth, the progress bar, etc.  
       * A Heads Up Display consisting of which topic it is, how many points the user currently has, how many points this question is worth, and the difficulty level of the question.  
       * A progress bar of the points is displayed at the top of the page, with a scale of 1000. When the progress bar is full, the star turns yellow, which means the user gets an additional star.  

    - View my achievements. 
       * The button to access the Achievement Page is available in the footer on every page, allowing the user to directly access it from whichever page the user is currently on.  
       * There is also a 'See All My Stars' button inside the modal after the users answer 10 questions or after the users get a star, which will also lead to the Achievement Page.  

    - Be able to save my achievements so that I can resume them later.  
       * The achievement is saved on the local storage of the user’s device.

    - Be able to change player/ username so my friends can try to play it on the same device.  
       * A Change Player button is conventionally positioned at the top left of the Landing Page, and using a person icon, which is a common icon for login. 
    
    - Play a game with sound effects which will enhance the gaming experience.  
       * Sound effects are played on many parts of the game, which include:  when the wheel spins when a modal pop up, and when an answer is clicked.  
    
    - Toggle the sound on and off.  
       * The user can toggle the sound on and off by clicking the sound toggle button, inside the footer, that is available on all pages.  
    

 - **Returning Visitor Goal**  
   As a returning / frequent visitor, I want to:  
   - Resume the playing that I did before, with my achievement still saved in the game.   
      * When the users open the game again on the same device, the game automatically loads up the data of the last player that played the game before.  
      * If the user was not the last player that played the game on that device, the user can click the Change Player button on the top right of the landing page, and input the username there.   

   - Send suggestions to the developer to improve the game.  
      * To send suggestions or other messages to the developer, the user can use the contact form on the Contact Page. After a valid form is sent, the Send button will turn to “Sent”, and the user will receive a confirmation email in their inbox.  

   - Know in which topics I have full achievements.  
      * The user can go to the Achievement Page to see all-stars that they have achieved. For full achievement (3 stars) in a topic, there will be an additional “complete” sign below the stars.   

   - To be challenged with different difficulty levels.  
      * The difficulty level goes up every time the users get a star in that topic (0 star : medium, 1 star: medium, >=2 stars : hard).  

<br/>  

## **Manual Testing**
### **Responsiveness Testing**  

### **Links Testing**
The links were tested to ensure that:  
- All navigation links are linking correctly.   
- The social media buttons are working and opening in a new tab.  
-  Hovering and active states are working.  
I did the testing of all buttons and any clickable elements in the game. Below is the result.  
  
![Buttons and links testing result](assets/testing/buttons-and-links-test.png "Buttons and links testing result")  

### **Game Play Testing**
The game play was tested to ensure that:
- All modals are showing as intended.
- The progress bar is working perfectly without a glitch.
- All points and stars calculations are working.
- All features of the game itself function properly.  

![Game play testing result](assets/testing/game-play-test.png "Game play testing result") 
