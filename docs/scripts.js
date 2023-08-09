const stackwich = document.querySelector("#Stackwich");
const start_menu = document.querySelector("#Title");
const start_button = document.querySelector("button");
const banner = document.querySelector("#Banner")
const logo = document.querySelector(".logo");

let layer_one_increment = 0;
let layer_two_increment = 0;
let layer_three_increment = 0;

const front_end_languages = [
    {name: "React", text_colour: "text-[#61DBFB]"},
    {name: "Angular", text_colour: "text-[#c3002f]"},
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

class Layer{
    constructor(array){
        this.array = array
        this.colour = this.array[0].text_colour
        this.text = this.array[0].name
    }
    right_arrow(array_increment){
        array_increment = Math.abs(array_increment)
        this.text = `${this.array[array_increment % this.array.length].name}`
        this.colour = `${this.array[array_increment % this.array.length].text_colour}`
        this.letter = this.text[0]
    }
    left_arrow(array_increment){
        array_increment = array_increment % this.array.length; //Keeps value of bun_framework between 0 and -3
        array_increment = array_increment + this.array.length; //Adds value to length, meaning all values will be between 3 and 0
        this.text = `${this.array[array_increment % this.array.length].name}`
        this.colour = `${this.array[array_increment % this.array.length].text_colour}`
        this.letter = this.text[0]
    }
}

const layerOne = new Layer(front_end_languages, layer_one_increment)
const layerTwo = new Layer(hosting_services, layer_two_increment)
const layerThree = new Layer(back_end_languages, layer_three_increment)

stackwich.addEventListener("click", event=>{

    const arrow = event.target;

    if(arrow.id.includes("1") || arrow.parentElement.id.includes("1")){
        const firstLetter = stackwich.querySelector("#First-letter")
        const text = document.querySelector("#Top-bun-text")

        if(arrow.id === "rb-1"){
            layer_one_increment += 1
            layerOne.right_arrow(layer_one_increment)
            text.textContent = layerOne.text
            firstLetter.textContent = layerOne.letter
            firstLetter.setAttribute("class", `inside-text ${layerOne.colour}`)

        }else{
            layer_one_increment -= 1
            layerOne.left_arrow(layer_one_increment)
            text.textContent = layerOne.text
            firstLetter.textContent = layerOne.letter
            firstLetter.setAttribute("class", `inside-text ${layerOne.colour}`)
        }
    }else if(arrow.id.includes("2") || arrow.parentElement.id.includes("2")){
        const first_letter = stackwich.querySelector("#Second-letter")
        const text = document.querySelector("#Patty-text")
        if(arrow.id === "rb-2"){
            layer_two_increment += 1
            layerTwo.right_arrow(layer_two_increment)
            text.textContent = layerTwo.text
            first_letter.textContent = layerTwo.letter
            first_letter.setAttribute("class", `inside-text ${layerTwo.colour}`)

        }else{
            layer_two_increment -= 1
            layerTwo.left_arrow(layer_two_increment)
            text.textContent = layerTwo.text
            first_letter.textContent = layerTwo.letter
            first_letter.setAttribute("class", `inside-text ${layerTwo.colour}`)
        }
    }else if(arrow.id.includes("3") || arrow.parentElement.id.includes("3")){
        const first_letter = stackwich.querySelector("#Third-letter")
        const text = document.querySelector("#Bot-bun-text")
        if(arrow.id === "rb-3"){
            layer_three_increment += 1
            layerThree.right_arrow(layer_three_increment)
            text.textContent = layerThree.text
            first_letter.textContent = layerThree.letter
            first_letter.setAttribute("class", `inside-text ${layerThree.colour}`)

        }else{
            layer_three_increment -= 1
            layerThree.left_arrow(layer_three_increment)
            text.textContent = layerThree.text
            first_letter.textContent = layerThree.letter
            first_letter.setAttribute("class", `inside-text ${layerThree.colour}`)
        }
    }
})

