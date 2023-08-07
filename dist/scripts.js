// Also, consider using classes for each language to make changing colours and styles and stuff easier

const stackwich = document.querySelector("#Stackwich");
const start_menu = document.querySelector("#Title");
const start_button = document.querySelector("button");
const banner = document.querySelector("#Banner")
const logo = document.querySelector(".logo");

let top_bun_framework = 0;
let patty_framework = 0;
let bot_bun_framework = 0;

// Maybe try adding different bun colours

const front_end_languages = [

    {name: "React", text_colour: "text-[#61DBFB]"},
    {name: "Angular", text_colour: "text-[white]"},
    {name: "Vue", text_colour: "text-[#42b883]"},
    {name: "Svelte", text_colour: "text-[#f73f07]"},
    {name: "Ember", text_colour: "text-[#E04E39]"}

]

const hosting_services = [

    {name: "AWS", text_colour: "text-[#FF9900]"},
    {name: "Firebase", text_colour: "text-[#F5820D]"},
    {name: "Azure", text_colour: "text-[#007FFF]"},
    {name: "Google Cloud", text_colour: "text-[#4885ed]"}

]

const back_end_languages = [

    {name: "Django", text_colour: "text-[#092e20]"},
    {name: "ExpressJS", text_colour: "text-[#215732]"},
    {name: "Laravel", text_colour: "text-[#fb503b]"},
    {name: "CakePHP", text_colour: "text-[#C92735]"},
    {name: "Flask", text_colour: "text-[#FACB33]"},
    {name: "Spring Boot", text_colour: "text-[#39781d]"}

]

logo.addEventListener("click", ()=>{

    location.reload()

})

// Fade out

start_button.parentElement.addEventListener("click", ()=>{

    // Makes menu disappear
    start_menu.classList.add("start_menu_after")

    // removes menu html content from site after menu has disappeared
    setTimeout(()=>{

        start_menu.remove()
        stackwich.classList.remove("hidden")
        console.log(start_menu)

    }, 1500)

})

stackwich.addEventListener("click", event=>{

    const arrow = event.target;


    if(arrow.id.includes("1") || arrow.parentElement.id.includes("1")){
        const first_letter = stackwich.querySelector("#First-letter")
        const inner_text = document.querySelector("#Top-bun-text")

        if(arrow.id === "rb-1"){

            top_bun_framework += 1;
            inner_text.textContent = `${front_end_languages[top_bun_framework % front_end_languages.length].name}`
            first_letter.textContent = `${front_end_languages[top_bun_framework % front_end_languages.length].name[0]}`
            
            const html = `inside-text ${front_end_languages[top_bun_framework % front_end_languages.length].text_colour}`
            inner_text.setAttribute("class", `${html}`)

        }else{

            top_bun_framework -= 1; // Changes value of image every time button is clicked
            top_bun_framework = top_bun_framework % front_end_languages.length; //Keeps value of bun_framework between 0 and -3
            top_bun_framework = front_end_languages.length + top_bun_framework; //Adds value to length, meaning all values will be between 3 and 0
            
            inner_text.textContent = `${front_end_languages[top_bun_framework % front_end_languages.length].name}`
            first_letter.textContent = `${front_end_languages[top_bun_framework % front_end_languages.length].name[0]}`
            
            const html = `inside-text ${front_end_languages[top_bun_framework % front_end_languages.length].text_colour}`
            inner_text.setAttribute("class", `${html}`)

        }

    }else if(arrow.id.includes("2") || arrow.parentElement.id.includes("2")){

        const second_letter = stackwich.querySelector("#Second-letter")
        const inner_text = document.querySelector("#Patty-text")

        if(arrow.id === "rb-2"){

            patty_framework += 1;
            inner_text.textContent = `${hosting_services[patty_framework % hosting_services.length].name}`
            second_letter.textContent = `${hosting_services[patty_framework % hosting_services.length].name[0]}`
            
            const html = `inside-text ${hosting_services[patty_framework % hosting_services.length].text_colour}`
            inner_text.setAttribute("class", `${html}`)

        }else{

            patty_framework -= 1; // Changes value of image every time button is clicked
            patty_framework = patty_framework % hosting_services.length; //Keeps value of bun_framework between 0 and -3
            patty_framework = hosting_services.length + patty_framework; //Adds value to length, meaning all values will be between 3 and 0


            inner_text.textContent = `${hosting_services[patty_framework % hosting_services.length].name}`
            second_letter.textContent = `${hosting_services[patty_framework % hosting_services.length].name[0]}`
            
            const html = `inside-text ${hosting_services[patty_framework % hosting_services.length].text_colour}`
            inner_text.setAttribute("class", `${html}`)



        } 
    }else if(arrow.id.includes("3") || arrow.parentElement.id.includes("3")){
        const third_letter = stackwich.querySelector("#Third-letter")
        const inner_text = document.querySelector("#Bot-bun-text")

        if(arrow.id === "rb-3"){

            bot_bun_framework += 1;
            inner_text.textContent = `${back_end_languages[bot_bun_framework % back_end_languages.length].name}`
            third_letter.textContent = `${back_end_languages[bot_bun_framework % back_end_languages.length].name[0]}`
            
            const html = `inside-text ${back_end_languages[bot_bun_framework % back_end_languages.length].text_colour}`
            inner_text.setAttribute("class", `${html}`)

        }else{

            bot_bun_framework -= 1; // Changes value of image every time button is clicked
            bot_bun_framework= bot_bun_framework % back_end_languages.length; //Keeps value of bun_framework between 0 and -3
            bot_bun_framework = back_end_languages.length + bot_bun_framework; //Adds value to length, meaning all values will be between 3 and 0

            
            inner_text.textContent = `${back_end_languages[bot_bun_framework % back_end_languages.length].name}`
            third_letter.textContent = `${back_end_languages[bot_bun_framework % back_end_languages.length].name[0]}`

            const html = `inside-text ${back_end_languages[bot_bun_framework % back_end_languages.length].text_colour}`
            inner_text.setAttribute("class", `${html}`)

        }

    }

})



