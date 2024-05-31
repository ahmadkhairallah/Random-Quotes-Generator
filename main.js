const generationBtn = document.querySelector(".generattion");
const AutoBtn = document.querySelector(".Auto");
const StopBtn = document.querySelector(".Stop");
const Textquote = document.querySelector(".text-quote");
const counter = document.querySelector(".quote-id");
const statusgeneration = document.querySelector(".status-quotes");
let intervalid;

generationBtn.onclick = GenerationData;
AutoBtn.onclick = autoplay;
StopBtn.onclick = cleargeneration;

async function getdata () {
    const quotes = await fetch("quotes.json");
    const data = await quotes.json();
    return data;
}
console.log(getdata());

async function GenerationData () {
    const quotes = await getdata();
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    Textquote.innerHTML = quote.text;
    counter.innerHTML = quote.id;
}

function autoplay () {
    intervalid = setInterval(GenerationData, 2000);
    statusgeneration.innerHTML = "AUTO: ON"
}

function cleargeneration () {
     clearInterval(intervalid);
    statusgeneration.innerHTML = "";
}


