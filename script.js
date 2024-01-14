const arrayOfJokes = [
    `Why don't scientists trust atoms? Because they make up everything!`,
    `What did one plate say to another? Tonight, dinner's on me!`,
    `Why did the scarecrow win an award? Because he was outstanding in his field!`,
    `How does a penguin build its house? Igloos it together!`,
    `I told my computer I needed a break, and now it won't stop sending me vacation ads.`
];
let index = Math.floor(Math.random() * (arrayOfJokes.length));
console.log(index)
x=arrayOfJokes[index]
jokes.innerHTML=arrayOfJokes[index]

let generatebutton = document.getElementById("yxz")
generatebutton.addEventListener("click",function(){
    let main = document.getElementById("main")
    
    var selectElement = document.getElementById("options");
    var selectedValue = selectElement.value;
    if (selectedValue=="coding"){
        selectedValue=selectedValue.replace("coding","ProgrammingHumor")
    }
    else if(selectedValue=="wholesome"){
        selectedValue=selectedValue.replace("wholesome","wholesomememes")
    }
    else if(selectedValue=="history"){
        selectedValue=selectedValue.replace("history","HistoryMemes")
    }
    else if(selectedValue=="dank"){
        selectedValue=selectedValue.replace("dank","DankMemes")
    }
    console.log(selectedValue)
    generateMemes(selectedValue)
});


async function generateMemes(selectedValue){
    redditData.innerHTML=""
    const response = await fetch(`https://www.reddit.com/r/${selectedValue}.json`);
    const apiData = await response.json();
    console.log(apiData)
    if(apiData.data.children.length!=0){
        main.style="height:760vh;";
    }
    
    console.log("Data length : ",apiData.data.children.length)
    for (let i=0; i<apiData.data.children.length;i++){
        console.log(apiData.data.children[i].data.title)
        if((apiData.data.children[i].data.url).includes(".jpeg")||(apiData.data.children[i].data.url).includes(".jpg")||(apiData.data.children[i].data.url).includes(".png")||(apiData.data.children[i].data.url).includes(".gif")){
        redditData.innerHTML+=`<div style="height:350px; width:280px;margin:20px;background-color:black;display:flex;flex-direction:column;align-items:center;justify-content:space-around;text-align:center;border-radius:30px;padding:5px ">
                                    <div>
                                    ${apiData.data.children[i].data.title}
                                    </div>
                                    <div>
                                    <img src='${apiData.data.children[i].data.url}' width="200px" height="220px">
                                    </div>
                                    <div>
                                    by - u/${apiData.data.children[i].data.author}
                                    </div>
                                </div>`
        }
    }
}
