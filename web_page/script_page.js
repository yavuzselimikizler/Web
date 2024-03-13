

class User {
    constructor(city, name, expertise, profile_photo,age) {
        this.city = city;
        this.name = name;
        this.expertise = expertise;
        this.profile_photo = profile_photo;
        this.age=age
    }

    get_username() {
        return this.name;
    }

    get_city() {
        return this.city;
    }

    get_expertise() {
        return this.expertise;
    }

    get_profile_photo() {
        return this.profile_photo;
    }
    get_age(){
        return this.age;
    }
}






var section1=0,section2=1,section3=2;
var section_counter=0;


var clicked='0';





function fetchData3(callback){

    fetch("http://127.0.0.1:8080/data.json")
    .then(response=>response.json())
    .then(jsonData=>{
        const dataList = [];
        for(data of jsonData){
            dataList.push(data);
        }
        callback(null,dataList);
    })
    .catch(error=>{
        callback(error,null);
    });
}

fetchData3((error,dataList)=>{
    if(error){

    }
    else{
         // Now you can access the fetched data here in dataList
 console.log(dataList);

 // Accessing the first item after data is fetched
 console.log(dataList[0]);
 var users=[];
 for(let i=0;i<dataList.length;i++){
    let user_map=new User(dataList[i].city,dataList[i].name,dataList[i].expertise,dataList[i].profile_photo,dataList[i].age);
    users.push(user_map);
 }

var container=document.querySelector('.links');
let button_list=[];
const prev_button=document.createElement('button');
prev_button.textContent="<";
container.appendChild(prev_button);

if(section1>0){

 prev_button.disabled=false;
}
else{
 prev_button.disabled=true;
}

for(let i=0;i<3 && i<users.length/4;i++){

 const new_button = document.createElement('button');
 new_button.textContent=(i+1).toString();
 new_button.setAttribute('id','page_buttons');
 button_list.push(new_button);
}




button_list.forEach(function(button) {
 container.appendChild(button);
});
let l=0;
const next_button=document.createElement('button');
next_button.textContent=">";
container.appendChild(next_button);
if(section3<users.length/4){
 next_button.disabled=false;
}
else{
 next_button.disabled=true;
}
next_button.addEventListener('click',function(){
 
 const children=container.children;
 section_counter+=1;
 section1+=1;
 section2+=1;
 section3+=1;
 let button_list=[];
 if(section1>0){

     children[0].disabled=false;
 }
 else{
     children[0].disabled=true;
 }

 for(let i=0;i<3 && i<((users.length-(section_counter*12))/4);i++){
    
     let new_button=(i+1+section_counter*3).toString();
     
     button_list.push(new_button);
 }

 let remove_indexes=[];

 for(let j=0;j<children.length;j++){
     
     if((children[j].textContent!='<' && children[j].textContent!='>') && j>=button_list.length+1){
         remove_indexes.push(children[j].textContent);
     }
    
      if((children[j].textContent!='<' && children[j].textContent!='>') && j<button_list.length+1){

         children[j].textContent=button_list[j-1];

     }
 }
 console.log(remove_indexes);
 if(section3<(users.length-(section_counter*12))/4){

     children[children.length-1].disabled=false;
 }
 else{
     children[children.length-1].disabled=true;
 } 

 for(const index of remove_indexes){
     
     const childToRemove = Array.from(container.children).find(child => child.textContent.trim() == index);
     
     
         container.removeChild(childToRemove);
     
 }
});

prev_button.addEventListener('click',function(){
 const children=container.children;
 section_counter-=1;
 section1-=1;
 section2-=1;
 section3-=1;
 let button_list=[];
 if(section1>0){

     children[0].disabled=false;
 }
 else{
     children[0].disabled=true;
 }

 for(let i=0;i<3 && i<((users.length-(section_counter*12))/4);i++){
    
     let new_button=(i+1+section_counter*3).toString();
     
     button_list.push(new_button);
 }

 let remove_indexes=[];

 for(let j=0;j<children.length;j++){
     
     if((children[j].textContent!='<' && children[j].textContent!='>') ){
         remove_indexes.push(children[j].textContent);
     }
    
     
 }
 for(const index of remove_indexes){
     
     const childToRemove = Array.from(container.children).find(child => child.textContent.trim() == index);
     
     
         container.removeChild(childToRemove);
     
 }


 for(let k=0;k<button_list.length;k++){

     const referenceNode = container.children[k+1];
     const new_button = document.createElement('button');
     new_button.textContent=button_list[k];
     new_button.setAttribute('id','page_buttons');
     // Insert the new child element before the reference node
     container.insertBefore(new_button, referenceNode);
 }

 console.log(remove_indexes);
 if(section3<(users.length-(section_counter*12))/4){

     children[children.length-1].disabled=false;
 }
 else{
     children[children.length-1].disabled=true;
 } 

 
});
const block_container=document.querySelector('.block_area');
/*
const block_container=document.querySelector('.block_area');



 var infoBlocks = document.querySelectorAll('.user_info');
 infoBlocks.forEach(function(infoBlock) {
     infoBlock.addEventListener('click', click_method);
 });

function click_method() {
 alert("a");
}
*/
/*
$('.user_info').click(function() {
 // Code to execute when the button is clicked
 alert('Button clicked!');
});
*/

/*
$(document).on('click', '.user_info', function() {
 // Code to execute when an element with class "user_info" is clicked
 alert('Element clicked!');
});
*/
/*
$('#click_id').on('click','.user_info',click_method);
*/


var button = document.getElementById('click_id');

button.addEventListener('click',function(){
 alert("abc");
});

var menu_button= document.getElementById('ana');


menu_button.addEventListener('click',function(){

 var user_info=document.querySelectorAll('.user_info');
 user_info.forEach(function(info){

     var text_user=info.querySelectorAll('p');
     text_user.forEach(function(text){
         text.textContent="ana";
     })
     
 });
 
});
var menu_button2= document.getElementById('prof');


menu_button2.addEventListener('click',function(){

 var user_info=document.querySelectorAll('.user_info');
 user_info.forEach(function(info){

     var text_user=info.querySelectorAll('p');
     text_user.forEach(function(text){
         text.textContent="prof";
     })
     
 });
 
});

var menu_button3=document.getElementById('diyet');

menu_button3.addEventListener('click',function(){

 var user_info= document.querySelectorAll('.user_info');
 user_info.forEach(function(info){

     var text_user=info.querySelectorAll('p');
     text_user.forEach(function(text){
         text.textContent="diyet";
     });
 });
});



const menu_icons = document.getElementsByClassName('menu_icon');

for (let i = 0; i < menu_icons.length; i++) {
 if (menu_icons[i].offsetWidth < 450) {
     menu_icons[i].style.display = 'flex';
     menu_icons[i].style.backgroundColor = '#92ac5c';
 }
}

var clicked_menu=0;


let menu_item=document.getElementById('show_menu');

menu_item.addEventListener('click',function(){
 if(clicked_menu==0){
     var new_item = document.createElement('ul');

 let item_list=['anasayfa','profil','diyetim','diyetisyenim'];

 item_list.forEach(function(items){

     const list_comp=document.createElement('div');
     list_comp.setAttribute('id','ana');

     const lielement=document.createElement('li');

     lielement.textContent=items;
     lielement.appendChild(list_comp);

     new_item.appendChild(lielement);

 });

 menu_icons[0].appendChild(new_item);
 clicked_menu=1;
 }

 

});

var menu_button4=document.getElementById('diyetisyen');

menu_button4.addEventListener('click',function(){

 var user_info=document.querySelectorAll('.user_info');
 user_info.forEach(function(index){

     var text_content=index.querySelectorAll('p');
     text_content.forEach(function(text){
         text.textContent="diyetisyen";
     });
     
 });

});


/*
menu_button.addEventListener('click',function(){

 var user_info=document.querySelectorAll('.user_info');
 user_info.forEach(function(info){

    info.innerHTML='<p>new_content</p>';
     
 });
 
});
*/
/*
menu_button.addEventListener('click',function(){

 var user_infos=document.querySelectorAll('.user_info');
 user_infos.forEach(function(user_info) {
     var new_text = user_info.querySelector('p');
     new_text.textContent="new_text";
 });
});
*/
/*
menu_button.addEventListener('click',function(){

 var user_infos=document.querySelectorAll('.user_info');
 alert("aaa");
     var new_text = user_infos[0].querySelector('p');
    
     new_text.textContent="njwxhjw";
});
*/


container.children[2].addEventListener('click', updateBlockContainer1);
container.children[1].addEventListener('click', updateBlockContainer2);
container.children[3].addEventListener('click', updateBlockContainer3);

const refreshInterval = 1000; 


updateBlockContainer1();
updateBlockContainer2();
updateBlockContainer3();
const intervalId = setInterval(updateBlockContainer1, refreshInterval);
const intervalId2 = setInterval(updateBlockContainer2, refreshInterval);
const intervalId3 = setInterval(updateBlockContainer3, refreshInterval);
function updateBlockContainer2(){
 if(container.children[2].textContent==clicked){
     container.children[2].disabled=true;
 }
 else{
     container.children[2].disabled=false;
 }
 if(container.children.length>3){
     container.children[2].addEventListener('click',function(){
 
     clicked=container.children[2].textContent;
         while (block_container.firstChild) {
             block_container.removeChild(block_container.firstChild);
         }
         
         for(let j =section_counter*12+4;j<12*section_counter+8 && j<users.length;j++){
            
             // Create the outermost div with class "blocks"
     const blocksDiv = document.createElement('div');
     blocksDiv.className = 'blocks';
     
     // Create the first inner div with class "profile_info"
     const profileInfoDiv = document.createElement('div');
     profileInfoDiv.className = 'profile_info';
     
     // Create the profile photo div with class "pp"
     const profilePhotoDiv = document.createElement('div');
     profilePhotoDiv.className = 'pp';
     
     // Create an img element for the profile photo
     const profilePhotoImg = document.createElement('img');
     profilePhotoImg.src = users[j].get_profile_photo('profile_photo');
     
     // Append the img element to the profile photo div
     profilePhotoDiv.appendChild(profilePhotoImg);
     
     // Create the user info div with class "user_info"
     const userInfoDiv1 = document.createElement('div');
     userInfoDiv1.className = 'user_info';
     
     // Create a paragraph element for the user's name
     const nameParagraph = document.createElement('p');
     nameParagraph.textContent = users[j].get_username('name');
     
     // Create the age and experience div with class "age"
     const ageExperienceDiv = document.createElement('div');
     ageExperienceDiv.className = 'age';
     
     // Create paragraph elements for age and experience
     const ageParagraph = document.createElement('p');
     ageParagraph.textContent = 'Age'+users[j].get_age('age');
     const experienceParagraph = document.createElement('p');
     experienceParagraph.textContent = 'Tecrube:'+users[j].get_expertise('expertise');
     
     // Append age and experience paragraphs to the ageExperienceDiv
     ageExperienceDiv.appendChild(ageParagraph);
     ageExperienceDiv.appendChild(experienceParagraph);
     
     // Append name paragraph and ageExperienceDiv to the first user info div
     userInfoDiv1.appendChild(nameParagraph);
     userInfoDiv1.appendChild(ageExperienceDiv);
     
     // Create the second user info div with class "user_info"
     const userInfoDiv2 = document.createElement('div');
     userInfoDiv2.className = 'user_info';
     
     // Create a paragraph element for the user's city
     const cityParagraph = document.createElement('p');
     cityParagraph.textContent = 'City'+users[j].get_city('city');
     
     // Create an img element for stars
     const starsImg = document.createElement('img');
     starsImg.src = 'stars.jpg';
     
     // Create an anchor element for the profile link
     const profileLink = document.createElement('a');
     profileLink.href = 'day6_profile.html';
     profileLink.textContent = 'Profili Goruntule';
     
     // Append city paragraph, stars img, and profile link to the second user info div
     userInfoDiv2.appendChild(cityParagraph);
     userInfoDiv2.appendChild(starsImg);
     userInfoDiv2.appendChild(profileLink);

     profileInfoDiv.appendChild(profilePhotoDiv);
     
     // Append both user info divs to the profile info div
     profileInfoDiv.appendChild(userInfoDiv1);
     profileInfoDiv.appendChild(userInfoDiv2);
     
     // Append the profile photo div and user info divs to the outermost blocks div
     blocksDiv.appendChild(profileInfoDiv);
     block_container.appendChild(blocksDiv);
         }
     
     
     });
 
 
     
 }
}

function updateBlockContainer1(){
 if(container.children[1].textContent==clicked){
     container.children[1].disabled=true;
 }
 else{
     container.children[1].disabled=false;
 }
 container.children[1].addEventListener('click',function(){

     clicked=container.children[1].textContent;
 
     while (block_container.firstChild) {
         block_container.removeChild(block_container.firstChild);
     }
     
     for(let j =section_counter*12;j<12*section_counter+4 && j<users.length;j++){
        console.log(j);
         // Create the outermost div with class "blocks"
 const blocksDiv = document.createElement('div');
 blocksDiv.className = 'blocks';
 
 // Create the first inner div with class "profile_info"
 const profileInfoDiv = document.createElement('div');
 profileInfoDiv.className = 'profile_info';
 
 // Create the profile photo div with class "pp"
 const profilePhotoDiv = document.createElement('div');
 profilePhotoDiv.className = 'pp';
 
 // Create an img element for the profile photo
 const profilePhotoImg = document.createElement('img');
 profilePhotoImg.src = users[j].get_profile_photo('profile_photo');
 
 // Append the img element to the profile photo div
 profilePhotoDiv.appendChild(profilePhotoImg);
 
 // Create the user info div with class "user_info"
 const userInfoDiv1 = document.createElement('div');
 userInfoDiv1.className = 'user_info';
 
 // Create a paragraph element for the user's name
 const nameParagraph = document.createElement('p');
 nameParagraph.textContent = users[j].get_username('name');
 
 // Create the age and experience div with class "age"
 const ageExperienceDiv = document.createElement('div');
 ageExperienceDiv.className = 'age';
 
 // Create paragraph elements for age and experience
 const ageParagraph = document.createElement('p');
 ageParagraph.textContent = 'Age'+users[j].get_age('age');
 const experienceParagraph = document.createElement('p');
 experienceParagraph.textContent = 'Tecrube:'+users[j].get_expertise('expertise');
 
 // Append age and experience paragraphs to the ageExperienceDiv
 ageExperienceDiv.appendChild(ageParagraph);
 ageExperienceDiv.appendChild(experienceParagraph);
 
 // Append name paragraph and ageExperienceDiv to the first user info div
 userInfoDiv1.appendChild(nameParagraph);
 userInfoDiv1.appendChild(ageExperienceDiv);
 
 // Create the second user info div with class "user_info"
 const userInfoDiv2 = document.createElement('div');
 userInfoDiv2.className = 'user_info';
 
 // Create a paragraph element for the user's city
 const cityParagraph = document.createElement('p');
 cityParagraph.textContent = 'City'+users[j].get_city('city');
 
 // Create an img element for stars
 const starsImg = document.createElement('img');
 starsImg.src = 'stars.jpg';
 
 // Create an anchor element for the profile link
 const profileLink = document.createElement('a');
 profileLink.href = 'day6_profile.html';
 profileLink.textContent = 'Profili Goruntule';
 
 // Append city paragraph, stars img, and profile link to the second user info div
 userInfoDiv2.appendChild(cityParagraph);
 userInfoDiv2.appendChild(starsImg);
 userInfoDiv2.appendChild(profileLink);
 
 // Append both user info divs to the profile info div
 profileInfoDiv.appendChild(profilePhotoDiv);
 profileInfoDiv.appendChild(userInfoDiv1);
 profileInfoDiv.appendChild(userInfoDiv2);
 
 // Append the profile photo div and user info divs to the outermost blocks div
 blocksDiv.appendChild(profileInfoDiv);
 block_container.appendChild(blocksDiv);
 
     }
 
 
 });
}

function updateBlockContainer3(){
 
 if(container.children.length==5){
     if(container.children[3].textContent==clicked){
         container.children[3].disabled=true;
     }
     else{
         container.children[3].disabled=false;
     }
     container.children[3].addEventListener('click',function(){
 
     clicked=container.children[3].textContent;
         while (block_container.firstChild) {
             block_container.removeChild(block_container.firstChild);
         }
         
         for(let j =section_counter*12+8;j<12*section_counter+12 && j<users.length;j++){
            
             // Create the outermost div with class "blocks"
     const blocksDiv = document.createElement('div');
     blocksDiv.className = 'blocks';
     
     // Create the first inner div with class "profile_info"
     const profileInfoDiv = document.createElement('div');
     profileInfoDiv.className = 'profile_info';
     
     // Create the profile photo div with class "pp"
     const profilePhotoDiv = document.createElement('div');
     profilePhotoDiv.className = 'pp';
     
     // Create an img element for the profile photo
     const profilePhotoImg = document.createElement('img');
     profilePhotoImg.src = users[j].get_profile_photo('profile_photo');
     
     // Append the img element to the profile photo div
     profilePhotoDiv.appendChild(profilePhotoImg);
     
     // Create the user info div with class "user_info"
     const userInfoDiv1 = document.createElement('div');
     userInfoDiv1.className = 'user_info';
     
     // Create a paragraph element for the user's name
     const nameParagraph = document.createElement('p');
     nameParagraph.textContent = users[j].get_username('name');
     
     // Create the age and experience div with class "age"
     const ageExperienceDiv = document.createElement('div');
     ageExperienceDiv.className = 'age';
     
     // Create paragraph elements for age and experience
     const ageParagraph = document.createElement('p');
     ageParagraph.textContent = 'Age'+users[j].get_age('age');
     const experienceParagraph = document.createElement('p');
     experienceParagraph.textContent = 'Tecrube:'+users[j].get_expertise('expertise');
     
     // Append age and experience paragraphs to the ageExperienceDiv
     ageExperienceDiv.appendChild(ageParagraph);
     ageExperienceDiv.appendChild(experienceParagraph);
     
     // Append name paragraph and ageExperienceDiv to the first user info div
     userInfoDiv1.appendChild(nameParagraph);
     userInfoDiv1.appendChild(ageExperienceDiv);
     
     // Create the second user info div with class "user_info"
     const userInfoDiv2 = document.createElement('div');
     userInfoDiv2.className = 'user_info';
     
     // Create a paragraph element for the user's city
     const cityParagraph = document.createElement('p');
     cityParagraph.textContent = 'City'+users[j].get_city('city');
     
     // Create an img element for stars
     const starsImg = document.createElement('img');
     starsImg.src = 'stars.jpg';
     
     // Create an anchor element for the profile link
     const profileLink = document.createElement('a');
     profileLink.href = 'day6_profile.html';
     profileLink.textContent = 'Profili Goruntule';
     
     // Append city paragraph, stars img, and profile link to the second user info div
     userInfoDiv2.appendChild(cityParagraph);
     userInfoDiv2.appendChild(starsImg);
     userInfoDiv2.appendChild(profileLink);
     
     // Append both user info divs to the profile info div
     profileInfoDiv.appendChild(profilePhotoDiv);
     profileInfoDiv.appendChild(userInfoDiv1);
     profileInfoDiv.appendChild(userInfoDiv2);
     
     // Append the profile photo div and user info divs to the outermost blocks div
     blocksDiv.appendChild(profileInfoDiv);
    
     block_container.appendChild(blocksDiv);
    
         }
     
     
     });
 }
 
}

    }
});

    

/*
function fetchData2() {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch("http://127.0.0.1:8080/data.json");
            const jsonData = await response.json();
            
            const dataList = []; // Create an array to hold the data
            
            for (const item of jsonData) {
                dataList.push(item);
            }
            
            resolve(dataList);
        } catch (error) {
            reject(error);
        }
    });
}

fetchData2().then(()=>{


}).catch(error => {
    console.error('Error:', error.message);
});

*/
/*
async function fetchData() {
    try {
        const response = await fetch("http://127.0.0.1:8080/data.json");
        const jsonData = await response.json();
        
        for (const item of jsonData) {
            dataList.push(item);
        }
    } catch (error) {
        console.error("Error fetching JSON:", error);
    }
}

fetchData().then(() => {
   




/*
button_list[0].addEventListener('click',function(){
       l=0; 
        while (block_container.firstChild) {
            block_container.removeChild(block_container.firstChild);
        }
        
        for(let j =l*4;j<(l+1)*4;j++){
            console.log('l:', l, 'j:', j); // Debugging output
            // Create the outermost div with class "blocks"
    const blocksDiv = document.createElement('div');
    blocksDiv.className = 'blocks';

    // Create the first inner div with class "profile_info"
    const profileInfoDiv = document.createElement('div');
    profileInfoDiv.className = 'profile_info';

    // Create the profile photo div with class "pp"
    const profilePhotoDiv = document.createElement('div');
    profilePhotoDiv.className = 'pp';

    // Create an img element for the profile photo
    const profilePhotoImg = document.createElement('img');
    profilePhotoImg.src = users[4*l+j].get('profile_photo');

    // Append the img element to the profile photo div
    profilePhotoDiv.appendChild(profilePhotoImg);

    // Create the user info div with class "user_info"
    const userInfoDiv1 = document.createElement('div');
    userInfoDiv1.className = 'user_info';

    // Create a paragraph element for the user's name
    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = users[4*l+j].get('name');

    // Create the age and experience div with class "age"
    const ageExperienceDiv = document.createElement('div');
    ageExperienceDiv.className = 'age';

    // Create paragraph elements for age and experience
    const ageParagraph = document.createElement('p');
    ageParagraph.textContent = 'Age'+users[4*l+j].get('age');
    const experienceParagraph = document.createElement('p');
    experienceParagraph.textContent = 'Tecrube:'+users[4*l+j].get('expertise');

    // Append age and experience paragraphs to the ageExperienceDiv
    ageExperienceDiv.appendChild(ageParagraph);
    ageExperienceDiv.appendChild(experienceParagraph);

    // Append name paragraph and ageExperienceDiv to the first user info div
    userInfoDiv1.appendChild(nameParagraph);
    userInfoDiv1.appendChild(ageExperienceDiv);

    // Create the second user info div with class "user_info"
    const userInfoDiv2 = document.createElement('div');
    userInfoDiv2.className = 'user_info';

    // Create a paragraph element for the user's city
    const cityParagraph = document.createElement('p');
    cityParagraph.textContent = 'City'+users[4*l+j].get('city');

    // Create an img element for stars
    const starsImg = document.createElement('img');
    starsImg.src = 'stars.jpg';

    // Create an anchor element for the profile link
    const profileLink = document.createElement('a');
    profileLink.href = 'day6_profile.html';
    profileLink.textContent = 'Profili Goruntule';

    // Append city paragraph, stars img, and profile link to the second user info div
    userInfoDiv2.appendChild(cityParagraph);
    userInfoDiv2.appendChild(starsImg);
    userInfoDiv2.appendChild(profileLink);

    // Append both user info divs to the profile info div
    profileInfoDiv.appendChild(userInfoDiv1);
    profileInfoDiv.appendChild(userInfoDiv2);

    // Append the profile photo div and user info divs to the outermost blocks div
    blocksDiv.appendChild(profileInfoDiv);

    // Append the blocks div to the desired parent element in the DOM
    
    block_container.appendChild(blocksDiv);
    button_list.forEach(function(button) {
        container.appendChild(button);
      });       
        }
        
    });

    button_list[1].addEventListener('click',function(){
        l=1;
        while (block_container.firstChild) {
            block_container.removeChild(block_container.firstChild);
        }
        
        for(let j =l*4;j<(l+1)*4;j++){
            console.log('l:', l, 'j:', j); // Debugging output
            // Create the outermost div with class "blocks"
    const blocksDiv = document.createElement('div');
    blocksDiv.className = 'blocks';

    // Create the first inner div with class "profile_info"
    const profileInfoDiv = document.createElement('div');
    profileInfoDiv.className = 'profile_info';

    // Create the profile photo div with class "pp"
    const profilePhotoDiv = document.createElement('div');
    profilePhotoDiv.className = 'pp';

    // Create an img element for the profile photo
    const profilePhotoImg = document.createElement('img');
    profilePhotoImg.src = users[j].get('profile_photo');

    // Append the img element to the profile photo div
    profilePhotoDiv.appendChild(profilePhotoImg);

    // Create the user info div with class "user_info"
    const userInfoDiv1 = document.createElement('div');
    userInfoDiv1.className = 'user_info';

    // Create a paragraph element for the user's name
    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = users[j].get('name');

    // Create the age and experience div with class "age"
    const ageExperienceDiv = document.createElement('div');
    ageExperienceDiv.className = 'age';

    // Create paragraph elements for age and experience
    const ageParagraph = document.createElement('p');
    ageParagraph.textContent = 'Age'+users[j].get('age');
    const experienceParagraph = document.createElement('p');
    experienceParagraph.textContent = 'Tecrube:'+users[j].get('expertise');

    // Append age and experience paragraphs to the ageExperienceDiv
    ageExperienceDiv.appendChild(ageParagraph);
    ageExperienceDiv.appendChild(experienceParagraph);

    // Append name paragraph and ageExperienceDiv to the first user info div
    userInfoDiv1.appendChild(nameParagraph);
    userInfoDiv1.appendChild(ageExperienceDiv);

    // Create the second user info div with class "user_info"
    const userInfoDiv2 = document.createElement('div');
    userInfoDiv2.className = 'user_info';

    // Create a paragraph element for the user's city
    const cityParagraph = document.createElement('p');
    cityParagraph.textContent = 'City'+users[j].get('city');

    // Create an img element for stars
    const starsImg = document.createElement('img');
    starsImg.src = 'stars.jpg';

    // Create an anchor element for the profile link
    const profileLink = document.createElement('a');
    profileLink.href = 'day6_profile.html';
    profileLink.textContent = 'Profili Goruntule';

    // Append city paragraph, stars img, and profile link to the second user info div
    userInfoDiv2.appendChild(cityParagraph);
    userInfoDiv2.appendChild(starsImg);
    userInfoDiv2.appendChild(profileLink);

    // Append both user info divs to the profile info div
    profileInfoDiv.appendChild(userInfoDiv1);
    profileInfoDiv.appendChild(userInfoDiv2);

    // Append the profile photo div and user info divs to the outermost blocks div
    blocksDiv.appendChild(profileInfoDiv);

    // Append the blocks div to the desired parent element in the DOM
    
      
        }
         
    });

});
*/