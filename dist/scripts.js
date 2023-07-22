// Also, consider using classes for each language to make changing colours and styles and stuff easier

const stackwich = document.querySelector("#Stackwich");
const start_menu = document.querySelector("#Title");
const start_button = document.querySelector("button");


// Maybe try adding different bun colours

const front_end_languages = [

    {name: "React", text_colour: "text-[#61DBFB]"},
    {name: "Angular", text_colour: "text-[white]"},
    {name: "Vue", text_colour: "text-[#42b883]"},
    {name: "Svelte", text_colour: "text-[#f73f07]"}

]





let bun_framework = 0;

// Fade out

start_button.parentElement.addEventListener("click", ()=>{

    // Makes menu disappear
    start_menu.classList.add("start_menu_after")

    // removes menu html content from site after menu has disappeared
    setTimeout(()=>{

        start_menu.innerHTML = ""
        stackwich.classList.remove("hidden")
    }, 1500)

})

stackwich.addEventListener("click", event=>{

    const arrow = event.target;
    const top_text = stackwich.querySelector("#Top-text")

    if(arrow.id.includes("1") || arrow.parentElement.id.includes("1")){

        const bun_text = document.querySelector("#Bun-text")

        if(arrow.id === "rb-1"){

            bun_framework += 1;
            bun_text.textContent = `${front_end_languages[bun_framework % front_end_languages.length].name}`
            top_text.textContent = `${front_end_languages[bun_framework % front_end_languages.length].name[0]}`
            
            const html = `inside-text ${front_end_languages[bun_framework % front_end_languages.length].text_colour}`
            bun_text.setAttribute("class", `${html}`)

        }else{

            bun_framework -= 1; // Changes value of image every time button is clicked
            bun_framework = bun_framework % front_end_languages.length; //Keeps value of bun_framework between 0 and -3
            bun_framework = front_end_languages.length + bun_framework; //Adds value to length, meaning all values will be between 3 and 0
            
            bun_text.textContent = `${front_end_languages[bun_framework % front_end_languages.length].name}`
            top_text.textContent = `${front_end_languages[bun_framework % front_end_languages.length].name[0]}`
            
            const html = `inside-text ${front_end_languages[bun_framework % front_end_languages.length].text_colour}`

            bun_text.setAttribute("class", `${html}`)

            

        }

    }

})



