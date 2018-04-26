# Session 1: Intro to JavaScript

## The Code

1. Start by going into the `main.js` file in the `starter` folder. This is where we'll be doing all our coding. The `final` folder is just so you can compare and troubleshoot later!

   ![Screen Shot 2018-04-25 at 4.40.15 PM](/Users/dustinnewman/Desktop/Screen Shot 2018-04-25 at 4.40.15 PM.png)

2. Everything we'll be coding will go above the comment titled "BOILERPLATE CODE". Don't worry if you don't understand it! Boilerplate code is ready out of the box!

3. We'll start by declaring our first three variables. This will give us the proper variables to access everything we need on the HTML document!

4. You can call them `time`, `hex`, and `body`. And assign them like so:

   ```JavaScript
   var time = document.getElementById("clock");
   var hex = document.getElementById("hex");
   var body = document.getElementById("body");
   ```

   Think of `document` as one big object that represents the entire HTML page and `getElementById` is just a property of this object. Remember to put this **above** the boilerplate marker.

   ![Screen Shot 2018-04-25 at 4.52.23 PM](/Users/dustinnewman/Desktop/Screen Shot 2018-04-25 at 4.52.23 PM.png)

5. Go ahead and declare a function called `updateClock()` that takes no parameters.

6. Inside `updateClock()` declare a new `date` variable equal to `new Date()`. Don't worry about the `new` keyword. For now, just think of it as we are creating a *new* Date object!

   So far, everything above the boilerplate should look like this:

   ![Screen Shot 2018-04-25 at 4.55.22 PM](/Users/dustinnewman/Desktop/Screen Shot 2018-04-25 at 4.55.22 PM.png)

7. Now we're going to use ourly newly created `date` object and access some very useful properties it has! Namely, the hours, minutes, and seconds!

8. Go ahead and create three variables called `hours`, `minutes`, and `seconds` and assign them like this:

   ```javascript
   var hours = date.getHours();
   var minutes = date.getMinutes();
   var seconds = date.getSeconds();
   ```

9. If you plan on making your clock in 12-hour time, you're going to need an additional variable titled `ampm` which will initialize to an empty string.

   ```javascript
   var ampm = "";
   ```

10. Now, time for our first use of these variables! If you are using 12-hour time, then you'll need an if-statement that accounts for that! Go ahead and enter this into your code:

    ```javascript
    if (hours >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }
    ```

    What this does is, if the `hours` variable we got from our `Date` object is greater than or equal to 12, we're going to say that it is PM. And if it's not PM, then it must be AM!

    So, at this point your code should look like this:

    ![Screen Shot 2018-04-25 at 5.06.41 PM](/Users/dustinnewman/Desktop/Screen Shot 2018-04-25 at 5.06.41 PM.png)

11. Now some more formatting things to take care of! Most clocks put a "0" in front of the minute or second if it's less than 10 (i.e. it's "5:09:09 PM" not "5:9:9 PM"). So, to account for this, we're going to insert the following code:

    ```javascript
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    ```

    This does exactly what I described above: **if** seconds is less than 10, **then** we're going to add a "0" to the beginning of it.

12. We're going to a similar thing for hours, but *only* if you're going by the 12-hour clock. If not, then you can omit this part without affecting anything.

    ```javascript
    if (hours != 12) {
        hours %= 12;
    }
    ```

13. Code check-in! All of your code should look like this by now:

    ![Screen Shot 2018-04-25 at 5.18.40 PM](/Users/dustinnewman/Desktop/Screen Shot 2018-04-25 at 5.18.40 PM.png)

14. Alright, now time to finally change something on our page! We're going to do this with the `innerHTML` property of the `time` variable we declared a ways back.

    ```javascript
    time.innerHTML = hours + ":" + minutes + ":" + seconds + " " + ampm;
    ```

15. If you go to your page now and highlight the middle, you'll see the time is changing!

16. Now put this handy function called `time2color` underneath your existing function `updateClock()`:

    ```javascript
    function time2color(dateFormat, hours, minutes, seconds) {
        var result = [];
        for (var i=0; i < dateFormat.length; i++) {
            if (dateFormat[i] === 'h') {
                result.push(dec2hex(hours / 24));
            } else if (dateFormat[i] === 'm') {
                result.push(dec2hex(minutes / 60));
            } else if (dateFormat[i] === 's') {
                result.push(dec2hex(seconds / 60));
            }
        };
        return result.join('');
    }
    ```

17. We're going to call this new function by inserting the following call **inside** your `updateClock` function.

    ```javascript
    var dateFormat = ['h', 'm', 's'];
    var color = time2color(dateFormat, hours, minutes, seconds);
    ```

    It is **very important** that this goes **underneath** your declaration of `ampm` as a variable and before your first if statement!

    Your code should look like this by now:

    ![Screen Shot 2018-04-25 at 5.24.34 PM](/Users/dustinnewman/Desktop/Screen Shot 2018-04-25 at 5.24.34 PM.png)

18. Now, we're going to finish this off by finally using that `color` variable we declared earlier. Put the following snippet at the **bottom** of your `updateClock` function:

    ```javascript
    hex.innerHTML = "#" + color;

    body.style.backgroundColor = color;
    ```

19. And finally, put these two lines after your `updateClock` function to actually call and make use of it!

    ```JAVASCRIPT
    updateClock();
    setInterval(updateClock, 1000);
    ```

20. And there you have it! Your hex clock is finished!