//Task 1
async function displayImg()
{
    const img = await fetch('https://source.unsplash.com/collection/190727/600x400');
    const sender = await img.blob();
    document.getElementById('food').src = URL.createObjectURL(sender);
}

displayImg().then(img =>{
    console.log("Image displayed");
})
.catch(error =>{
    console.log("Image error");
})

//Task 2
async function arrayImg()
{
    const images = [4];
    const container = document.getElementById('array');
    for(let x = 0; x < 4; x++)
    {
        const img = await fetch('https://source.unsplash.com/collection/190727/600x400');
        const sender = await img.blob();
        images[x] = document.createElement('img');
        images[x].src = URL.createObjectURL(sender);
        container.appendChild(images[x]);
    }
}

arrayImg().then(img =>{
    console.log("Array displayed");
})
.catch(error =>{
    console.log("Array error");
})

//Task 3
async function writePoem()
{
    const txt = await fetch('poem.txt');
    const sender = await txt.text();
    console.log(sender);
    document.getElementById("poetry").innerHTML = sender;
}

writePoem().then(text =>{
    console.log("Text displayed");
})
.catch(error =>{
    console.log("Text error");
})