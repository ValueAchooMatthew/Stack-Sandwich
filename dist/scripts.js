// Should definitely clean this up

// Also, consider using classes for each language to make changing colours and styles and stuff easier


const start_button = document.querySelector("#Start-button");
const main = document.querySelector("#Stackwich");
const bun = document.querySelector("#Bun");
const right_button_bun = document.querySelector("#right-button-bun");
const left_button_bun = document.querySelector("#left-button-bun")
const title = document.querySelector("#title")

const bun_text = document.querySelector("#Bun-text")


let val_bun = 0;


const buns = ["./img/bun_one.png", "./img/bun_two.png"]
const buns_frameworks = ["React", "Angular"];

start_button.addEventListener("click", () =>{


    start_button.setAttribute("class", "hidden");
    main.classList.remove("hidden");
    main.classList.add("flex");
    title.classList.add("hidden")



});

right_button_bun.addEventListener("click", () =>{

    if((val_bun+1) < buns.length){
        val_bun++;
    }else{

        val_bun = 0;
    };

    console.log(buns[val_bun]);
    bun.innerHTML =`<img class = "w-40 mx-8 inline-block" src = "${buns[val_bun]}">`
    bun_text.textContent = `${buns_frameworks[val_bun]}`
});

left_button_bun.addEventListener("click", () =>{

    if(val_bun > 0){
        val_bun--;
    }else{

        val_bun = (buns.length - 1);
    };
    console.log(val_bun)

    console.log(buns[val_bun]);
    bun.innerHTML =`<img class = "w-40 mx-8 inline-block" src = "${buns[val_bun]}">`
    bun_text.textContent = `${buns_frameworks[val_bun]}`

});