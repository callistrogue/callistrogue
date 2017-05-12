// Common coding practice is to declare variables at the top. These two are for navigating the poem linearly with the space bar, with counter keeping track of the line of the poem and using it to get the right line from poemText below
var counter = 0;
var poemText = ["James Brown Gives Me a Poetry Solo, and I Realize That This Is 'My Moment'", "<span style='font-size:5em'>HAH</span>","Playing russian roulette with a turkey baster full of 'I can’t believe it’s not butter'","with 5 stuffed animals in the basement of my childhood home,","and soon, none of us can believe what we’re NOT covered in","<span style='font-size:4em'>C'MON</span>","Like a salamander on a waterslide","I wanna coat my skin with astroglide","and watch the world smear around me","as I’m carried to my wet destiny of freefall and misbehavior.","And won’t you love the slick lanes I leave in your hallways and underwear,","don’t be afraid of the thunder","that’s just the youthful exuberance leaving my body","<span style='font-size:5em'>OOH</span>","And can I scream<br>about double indemnity clauses and the state of modern packaging materials","And can I scream<br>about the growing number of invalid ways to live","And can I scream<br>about the corporate graveyards where the endless mountains of dead businessman are shrouded in the most beautiful fog","And can I scream<br>for the hungry and alone and the ones without a home","And can I scream<br>for whatever it is inside of me that needs a scream to be set free","And can I scream<br>And can I scream","And can <span style='font-size:1.3em'>AAAOHHHWWWW</span>","<span style='font-size:5em'>WOO</span>","Baby, if I was a newspaperman","I’d be inclined to write a headline cover story","about that time you doubted me and I exceeded expectations,","but then I’d probably get fired from the newwwspaper and be unable to pay child support","once you divorce me (after we’re married of course,","because of my lingering drinking problem, which I’d always promise to kick", "but eventually succomb to, like I did to you","Oh,<br>things were nice once weren’t they?","<span style='font-size:5em'>HAH</span>","Touching the tall thin pines and smelling their air-freshener smell","and getting cant-touch-other-people sticky in the sap","let’s lie down on the ground where there can never, no never, be leaves"]

//Hotkey bindings, Mousetrap is a small javascript library that makes it easy to make things happen when you press a certain key
Mousetrap.bind("q", function(){
    //showText is a function that shows the text inside the parentheses (see full function at the at the bottom)
    showText("there’s something about islands that’s always intrigued me");
    //playSound is a basic function I use in most pieces for playing sound files, in this case it plays a recording of me reading the line from showText
    playSound("1")
})
Mousetrap.bind("w", function(){
    //I wanted the exclamations like 'HAH' to show up bigger so I put them inside a span, with increased font size. Spans don't mean anything in and of themselves, but are just ways to style with css in a more specific way
    showText("in seventh grade they were one of the only things i would (or could) draw in my sketchbook")
    playSound("2")
})
Mousetrap.bind("e", function(){
    showText("i think part of it is because white perceptions of islands always concern escapism or exoticism, ")
    playSound("3")
})
Mousetrap.bind("r", function(){
    showText("a consideration always within the context of the mainland, of the normative")
    playSound("4")
})
Mousetrap.bind("t", function(){
    showText("(and god knows i was an escapist child)")
    playSound("5")
})
Mousetrap.bind("y", function(){
    showText("but i think there’s more")
    playSound("6")
})
Mousetrap.bind("u", function(){
    showText("the idea of containment")
    playSound("7")
})
Mousetrap.bind("i", function(){
    showText("is")
    playSound("8")
})
Mousetrap.bind("o", function(){
    showText("exciting")
    playSound("9")
})
Mousetrap.bind("p", function(){
    showText("to exist in a limited space")
    playSound("10")
})
Mousetrap.bind("[", function(){
    $('#writingDiv').append("<br>")
    showText("doing the most with what you have, your limited resources")
    playSound("11")
})
Mousetrap.bind("]", function(){
    showText("digging down instead of sprinting out")
    playSound("12")
})
Mousetrap.bind("\\", function(){
    showText("touching every inch of the map")
    playSound("13")
})
Mousetrap.bind("a", function(){
    showText("getting to know a location as well as your own body")
    playSound("14")
})
Mousetrap.bind("s", function(){
    //In this section I wanted all the 'And can I screams' to be on their own line to emphasize the repetition, so I put a line break (<br>) after each
    showText("until it becomes an extension of that body");
    playSound("15")
})
Mousetrap.bind("d", function(){
    showText("like your childhood home");
    playSound("16")
})
Mousetrap.bind("f", function(){
    //This is the longest line of the poem and often runs off-screen, so I added a little span to shrink the font size, this is not necessarily the best solution but it works and that's fine
    showText("where you are the only one who knows the best hiding places");
    playSound("17")
})
Mousetrap.bind("g", function(){
    showText("the secret compartments");
    playSound("18")
})
Mousetrap.bind("h", function(){
    showText("the ghosts in the walls");
    playSound("19")
})
Mousetrap.bind("j", function(){
    showText("And can I scream<br>And can I scream")
    playSound("20")
})
Mousetrap.bind("k", function(){
    showText("And can <span style='font-size:1.3em'>AAAOHHHWWWW</span>")
    playSound("21")
})
Mousetrap.bind("l", function(){
    showText("<span style='font-size:5em'>WOO</span>")
    playSound("22")
})
Mousetrap.bind(";", function(){
    showText("Baby, if I was a newspaperman")
    playSound("23")
})
Mousetrap.bind("\'", function(){
    showText("I’d be inclined to write a headline cover story")
    playSound("24")
})


//Space bar, as in almost all the pieces, plays the piece linearly, see more below
Mousetrap.bind("space", playLinear);

//Now we enter the functions, these are what the hotkeys call to do various things in the piece

//The showText function uses the library jQuery (that's what that $ means) to change the text of an h1 tag (the largest basic text element) as well as its orientation. The '(string)' inside the parens refers to the line of the poem put inside the parens when the function is called above 
function showText(string) {
    //First we change the contents of the h1 to the line of our poem aka 'string'
    $('h1').html(string)
    //Then we do some specific styling things based on which line of the poem it is
    //So if it's the title of the poem, we change the bg image to James Brown and make sure the text is on the right
    if(string == "James Brown Gives Me a Poetry Solo, and I Realize That This Is 'My Moment'"){
        $('html').css('background-image','url(jamesbrownBG.jpg)')
        $('h1').addClass("text-right").removeClass("text-left")
    }
    //Here we check for spans to find the big exclamation texts so we can change the bg image to yelling face and move text to the left, but also we don't want to change effect the one where we made the text smaller so we make sure it doesn't contain the word 'corporate', this is objectively pretty sloppy code but that is ok! It is ok to write bad code!  
    else if(string.indexOf("span") != -1 && string.indexOf("corporate") == -1){
        $('html').css('background-image','url(toddCloseup.png)')
        $('h1').addClass("text-left").removeClass("text-right")
    } 
    //If the text isn't the title or big, this is what we do to it
    else {
        $('html').css('background-image','url(toddBG.png)')
        $('h1').addClass("text-left").removeClass("text-right")
    }
};
//Here's playSound, as mentioned above it's a function used in a lot of these pieces for playing sound files
function playSound(id) {
    //this first line isn't relevent to sound playing, but just sets the linear counter to whatever line was last played, so if you press one of the letter keys you can still go back to linear from that spot
    counter = parseInt(id);
    //here we check for any other sounds tha are playing and pause/reset them since we dont want two lines said on top of each other
    $(".played").each(function(){
        this.pause();
        this.currentTime = 0
    });
    //Here we use jQuery do find the sound in the html file
    sound = $("#jb" + id).addClass("played")[0]
    //Set the playhead to the beginning it its already been played
    if (sound.ended){sound.currentTime = 0};
    //If the sound is currently playing replay it from the beginning (this makes pressing the same button over and over really fun)
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } 
    //Play the sound
    else {
        sound.play()
    }
}

//The playLinear function exists in almost all pieces to let you go through the piece sequentially by pressing space bar, it uses a counter as an index to reference an array containing the poem, and gradually adds to the counter to show more lines of the poem as you press space
function playLinear(){
    //here we find the line of the poem with the index 'counter' and showText it
    showText(poemText[counter]);
    //Then we add one to counter (++) to get to the next line for the next one
    counter++;
    //Then we play the sound associated with that line (the counters for the sounds are one more than the counters for the lines, this is sloppy and fine but probably dont do it like this yourself)
    playSound((counter).toString());
    //When we reach the end of the poem, reset the counter to 0 aka pressing space again will start over, and then play 'I Feel Good' after 8 seconds
    if (counter >= 34){
        setTimeout(function(){playSound("feelGood")},8000);
        counter = 0;
    }
}

