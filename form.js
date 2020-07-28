class Form{
    constructor(){
        this.about= createElement("H1")
        this.Fname1= createInput("First Name")
        this.Fname= createElement("H4")
        this.Lname= createElement("H4")
        this.Lname1= createInput("Last Name")
        this.description= createElement("H4")
        this.Email= createElement ("H4")
        this.Email1= createInput ("Email ID")
        this.Age= createElement("H4")
        this.Age1= createInput("Age")
        this.question= createElement("H4")
        this.yes= createButton("Yes")
        this.no = createButton("No")
    }

    display(){
        this.about.html(" Survey To Bring Change")
        this.about.position(500,100)

        this.description.html("As per the National Crime Records Bureau of India, 28 students die by suicide every day and that number is climbing.Schools play a very critical part in the foundation of a young person both physically and mentally. While we take measures to watch over the physical health of a youngster, are we doing enough to say the same about their mental health?  With the world changing so rapidly the factors that influence a youngster today are very different. Youngsters are surrounded by emotional pressure from their parents, teachers and peers and to intensify the same we live in the era of social media. Evolved times call for evolved measures for our generations to cope. COVID-19 has made us realise this and it's time we asked more of our educational system. The solution to this needs to start from our primitive years, every school in this country government or private should have a mandatory “Mental Wellness Hour”. It is a fact that physical education brought about various benefits into our lives, traits like discipline, passion, fitness and more were nurtured thanks to it. Our minds are no less complicated, just like the benefits physical education brought about in students, the same can be expected of mental wellness hours if they are to be incorporated into our curriculums.")
this.description.position(100,200)

this.Fname.html("First Name: ")
this.Fname.position(400,400)
this.Fname1.position(400,450)


this.Lname.html("Last Name: ")
this.Lname.position(800,400)
this.Lname1.position(800,450)


this.Email.html("Email ID:")
this.Email.position(400,480)
this.Email1.position(480,500)

this.Age.html("Age: ")
this.Age.position(800,480)
this.Age1.position(840,500)

this.question.html("Do you think schools should take classes on Mental Health?")
this.question.position(400,550)


this.yes.position(400,600)
this.no.position(400,650)


    }
}
