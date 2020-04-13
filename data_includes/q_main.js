PennController.ResetPrefix(null); // Initiates PennController

// QUESTIONS TRIALS

Sequence("intro","consent", "demo","instructions", "familiarize1", "familiarize2","familiarize3","familiarize4","instructions1", "trainF","trainT","trainthink1","trainthink2", "end_train", randomize("trial"), "send", "final")

newTrial("intro",
    defaultText
        .center()
        .print()
    ,
    newText("<p>Welcome to the Experiment!</p>")
    ,
    newText("<p>This experiment requires the use of a keyboard to register responses.</p>") 
    ,
    newText("<p>To participate in this experiment you MUST be on a laptop, desktop computer, or tablet device with a detachable keyboard.</p>")
    ,
    newText("<p>Do not use a cell phone, or tablet without detachable keyboard.</p>")
    ,
    newButton("Proceed to the Consent Form")
        .center()
        .print()
        .wait()
)

newTrial("consent",
    newHtml("consent.html")
        .log()
        .print()
    ,
    newTextInput("ID")
        .log()
        .before( newText("before", "<p>Please enter your unique participant ID</p>") )
        .center()
        .print()
    ,
    newText("warning", "Please enter your ID first")
        .color("red")
        .bold()
    ,
    newButton("consent button", "By clicking this button I indicate my consent")
        .center()
        .print()
        .wait(  // Make sure the TextInput has been filled
            getTextInput("ID")
                .testNot.text("")
                .failure( getText("warning").print() )
        )
    ,   // Create a Var element before going to the next screen
    newVar("ID")
        .global()          // Make it globally accessible
        .set( getTextInput("ID") )
)
.log( "ID" , getVar("ID") )

newTrial("demo",
    defaultText
        .center()
        .print()
    ,
    newTextInput("NativeLang")
        .log()
        .before( newText("before", "Please enter your native language.") )
        .center()
        .print()
    ,
    newText("warning", "Please enter your native language.")
        .color("red")
        .bold()
    ,
    newTextInput("OtherLangs")
        .before( newText("before", "Do you speak any other languages?") )
        .center()
        .print()
    ,
    newButton("Start")
        .center()
        .print()
        .wait(  // Make sure the TextInput has been filled
            getTextInput("NativeLang")
                .testNot.text("")
                .failure( getText("warning").print() )
        )
    ,
    newVar("NativeLang")
        .global()
        .set( getTextInput("NativeLangs") )
    ,
    newVar("OtherLangs")
        .global()
        .set( getTextInput("OtherLangs") )
)
.log( "NativeLang" , getVar("NativeLang") )
.log( "OtherLangs" , getVar("OtherLangs") )

// What is in Header happens at the beginning of every single trial
Header(
    // We will use this global Var element later to store the participant's name
    newVar("ID")
        .global()
    ,
    // Delay of 250ms before every trial
    newTimer(250)
        .start()
        .wait()
)
.log( "ID" , getVar("ID") )
.log( "NativeLang" , getVar("NativeLang") )
.log( "OtherLangs" , getVar("OtherLangs") )
// This log command adds a column reporting the participant's name to every line saved to the results

newTrial("instructions",
    defaultText
        .center()
        .print()
    ,
    newText("<p>In this experiment, we will ask you to decide whether you agree or disagree with a statement.</p>")
    ,
    newButton("Continue")
        .center()
        .print()
        .wait()
)

newTrial("familiarize1",
    defaultText
        .center()
        .print()
    ,
    newText("<p>Before we begin, please take a moment to familiarize yourself with a deck of cards over the next few pages.</p>")
    ,
    newText("<p>There are 52 cards in a deck. Some of the cards are numbered, and some of the cards have faces.</p>")
    ,
    newImage("fam_numbface", "fam_numbface.png")
        .size(400,150)
        .center()
        .print()
    ,  
    newButton("Continue")
        .center()
        .print()
        .wait()
)


newTrial("familiarize2",
    defaultText
        .center()
        .print()
    ,
    newText("<p>There are four suits in a deck, clubs, diamonds, spades, and hearts: </p>")
    ,
    newImage("fam_face", "fam_face.png")
        .size(400,150)
        .center()
        .print()
    ,
    newButton("Continue")
        .center()
        .print()
        .wait()
)

newTrial("familiarize3",
    defaultText
        .center()
        .print()
    ,
    newText("<p>Each suit has numbered cards from 2 to 10:</p>") 
    ,
    newImage("fam_nums", "fam_nums.png")
        .size(400,150)
        .center()
        .print()
    ,
    newButton("Continue")
        .center()
        .print()
        .wait()
)

newTrial("familiarize4",
    defaultText
        .center()
        .print()
    ,
    newText("<p>And each suit has three face cards (a king, a queen, and a jack), and an ace:</p>") 
    ,
    newImage("fam_royal", "fam_royal.png")
        .size(400,400)
        .center()
        .print()
    ,
    newButton("Continue")
        .center()
        .print()
        .wait()
)

newTrial( "instructions1",
    defaultText
        .center()
        .print()
    , 
    newTimer(500)
        .start()
        .wait()
    ,
    newText("<p>Now that you are familiar with the deck of cards, we can proceed to the experiment.</p>")
    ,
    newText("<p>Some friends have gotten together to play a game of cards.</p>")
    ,
    newText("<p>Dana and Melissa have never played cards before, so your job is to help them learn about the cards.</p>")
    ,
    newText("<p>We will ask Dana a question, she will give an answer, and then Melissa will say something about what Dana said.</p>")
    ,
    newText("<p>Your task is to say whether you agree or disagree with what Melissa says about Dana.</p>")
    ,
    newButton("Continue")
        .center()
        .print()
        .wait()
    ,
    newTimer(500)
        .start()
        .wait()

)

newTrial( "trainF",
        newTimer(500)
            .start()
            .wait()
        ,
        newText("<p>On each trial, you will see a picture that shows what cards everyone has.</p>")
            .center()
            .print()
        ,
        newText("<p>A question will be asked, Dana will answer, and Melissa will say something about what Dana answered.</p>")
            .center()
            .print()
        ,
        newImage("train_report1", "train_report1.png")
            .size(500,300)
            .center()
            .print()
        ,
        newText( `"Who has a 4?"` )
            .center()
            .print()
        ,
        newText(`Dana: "F."`)
            .center()
            .print()
        ,
        newText( `Melissa: "Dana got it right!"` )
            .center()
            .print()
        ,
        newText("<p> If you <strong>Agree</strong> with Melissa, press <strong>F</strong>. If you <strong>Disagree</strong>, then press <strong>J</strong><p>")
            .center()
            .print()
        ,
        newText("<p>Since Melissa's statement is <strong>incorrect</strong>, you should press <strong>J</strong> on the keyboard to disagree.<p>")
            .center()
            .print()
        ,
        newSelector()
            .add( newText("Agree"), newText("Disagree"))
            .center()
            .keys("F", "J")
            .log()
            .wait()
        ,
        newTimer(500)
            .start()
            .wait()
)

newTrial( "trainT",
        newTimer(500)
            .start()
            .wait()
        ,
        newText("<p>Practice.</p>")
            .center()
            .print()
        ,
        newImage("train_report2", "train_report2.png")
            .size(500,300)
            .print()
        ,
        newText( `"Who has a Jack?"` )
            .center()
            .print()
        ,
        newText(`Dana: "B."`)
            .center()
            .print()
        ,
        newText( `Melissa: "Dana got it right!"` )
            .center()
            .print()
        ,
        newText("<p> If you <strong>Agree</strong> with the sentence, press <strong>F</strong>. If you <strong>Disagree</strong>, then press <strong>J</strong><p>")
            .center()
            .print()
        ,
        newText("<p>Since this statement is <strong>correct</strong>, you should press <strong>F</strong> on the keyboard to agree.<p>")
            .center()
            .print()
        ,
        newSelector()
            .add( newText("Agree"), newText("Disagree"))
            .center()
            .keys("F", "J")
            .log()
            .wait()
        ,
        newTimer(500)
            .start()
            .wait()
)

newTrial( "trainthink1",
        newTimer(500)
            .start()
            .wait()
        ,
        newText("<p>Practice.</p>")
            .center()
            .print()
        ,
        newImage("train_think1", "train_think1.png")
            .size(500,300)
            .print()
        ,
        newText( `"Who has a five?"` )
            .center()
            .print()
        ,
        newText(`Dana: "B and E."`)
            .center()
            .print()
        ,
        newText( `Melissa: "Dana thinks that B and E have fives."` )
            .center()
            .print()
        ,
        newText("<p> If you <strong>Agree</strong> with the sentence, press <strong>F</strong>. If you <strong>Disagree</strong>, then press <strong>J</strong><p>")
            .center()
            .print()
        ,
        newText("<p>Since this statement is <strong>correct</strong>, you should press <strong>F</strong> on the keyboard to agree.<p>")
            .center()
            .print()
        ,
        newSelector()
            .add( newText("Agree"), newText("Disagree"))
            .center()
            .keys("F", "J")
            .log()
            .wait()
        ,
        newTimer(500)
            .start()
            .wait()
)

newTrial( "trainthink2",
        newTimer(500)
            .start()
            .wait()
        ,
        newText("<p>Practice.</p>")
            .center()
            .print()
        ,
        newImage("train_think2", "train_think2.png")
            .size(500,300)
            .print()
        ,
        newText( `"Who has a two?"` )
            .center()
            .print()
        ,
        newText(`Dana: "B."`)
            .center()
            .print()
        ,
        newText( `Melissa: "Dana thinks that D has a two."` )
            .center()
            .print()
        ,
        newText("<p> If you <strong>Agree</strong> with the sentence, press <strong>F</strong>. If you <strong>Disagree</strong>, then press <strong>J</strong><p>")
            .center()
            .print()
        ,
        newText("<p>Since this statement is <strong>incorrect</strong>, you should press <strong>J</strong> on the keyboard to disagree.<p>")
            .center()
            .print()
        ,
        newSelector()
            .add( newText("Agree"), newText("Disagree"))
            .center()
            .keys("F", "J")
            .log()
            .wait()
        ,
        newTimer(500)
            .start()
            .wait()
)

newTrial("end_train",
    defaultText
        .center()
        .print()
    ,    
    newText("<p>Great Job!</p>")
    ,
    newText("<p>Remember, press the <strong>F</strong> key to Agree, or the <strong>J</strong> key to Disagree.</p>")
    ,
    newButton("Click here to start the experiment!")
        .center()
        .print()
        .wait()
)

// BEGIN TEST TRIALS
Template( "q_table.csv", row =>
    newTrial( "trial",
        newTimer(500)
            .start()
            .wait()
        ,
        newImage("ImageName",row.ImageName)
            .size(500,300)
            .center()
            .print()
        ,
        newText( `"W${row[row.WhichQuestion+'Question']}?"` )
            .center()
            .print()
        ,
        newText(`Dana: "${row[row.WhichAnswer+'Answer']}"`)
            .center()
            .print()
        ,
        newText( `Melissa: "${row.Matrix} w${row[row.WhichQuestion+'Question']}."` )
            .center()
            .print()
        ,
        newText("<p> Press <strong>F</strong> to <strong>Agree</strong> or <strong>J</strong> to <strong>Disagree</strong><p>")
            .center()
            .print()
        ,
        newSelector()
            .add(newText("Agree"), newText("Disagree"))
            .keys("F", "J")
            .log()
            .wait()
        ,
        newTimer(500)
            .start()
            .wait()
    )
    .log( "ID" , getVar("ID") )
    .log( "QuestType" , row.QuestType )
    .log( "WhichQuestion" , row.WhichQuestion )
    .log( "WhichAnswer" , row.WhichAnswer )
    .log( "verb" , row.verb )
    .log( "Matrix" , row.Matrix )
    .log( "ImageName" , row.ImageName )
    .log( "Group"  , row.Group  )
)

SendResults( "send" )

newTrial("end",
    newText("<p>Thank you for your participation!</p>")
        .center()
        .print()
    ,
    newText("Your participation code is: 3bc8068f")
        .center()
        .print()
    ,
    newText("<p><a href='https://rutgerslinguistics.sona-systems.com/Default.aspx?ReturnUrl=%2f'>Click here to validate your participation.</a></p>")
        .center()
        .print()
    ,
    newButton("void")
        .wait()
)
.setOption( "countsForProgressBar" , false )
// Make sure the progress bar is full upon reaching this last (non-)trial


