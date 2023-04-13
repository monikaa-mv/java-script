const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2"); //another way to get the element
console.log(view2);

//changing the style
view1.style.display = "flex";
view2.style.display = "flex";

const views = document.getElementsByClassName("view");
console.log(views);

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

//html has more nodes than anything else(used with help of DOM)

const divs = view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-child(even)");
console.log(evenDivs);

for( let i = 0; i < evenDivs.length; i++ ){
    evenDivs[i].style.backgroundColor = "red";
    evenDivs[i].style.width = "200px";
}

const navtext =  document.querySelector("nav h1");
console.log(navtext);
navtext.style.color = "red";
navtext.textContent = "Hello World";

const navBar = document.querySelector("nav");
navBar.innerHTML = "<h1>Hello!</h1>  <p>HTML</p>";
console.log(navBar);

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].parentElement.nextElementSibling);


view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexwrap = "wrap";
view2.style.margin = "10px";

while(view2.lastChild){
    view2.lastChild.remove();
}

const createDivs = (parent, itr) => {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "black";
    newDiv.textContent = itr;
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    // newDiv.style.color = "black";
    
    // newDiv.style.fontSize = "30px";
    // newDiv.style.fontWeight = "bold";
    parent.append(newDiv);
};

for(let i = 1; i <=12; i++){
    createDivs(view2, i);
}
