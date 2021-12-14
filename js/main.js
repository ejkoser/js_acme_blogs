//1
function createElemWithText(elemType = "p", textContent = "", className){
  const myElem = document.createElement(elemType);
  myElem.textContent = textContent;
  if(className) myElem.classList.add(className);
  return myElem;
}

//2
function createSelectOptions(users){
  if(!users) return;
  let a = [];
  for(let element of users){
    let option = document.createElement("option");
    option.value = element.id;
    option.textContent = element.name;
    a.push(option);
  }
  return a;
}

//3
function toggleCommentSection(postId){
    if(!postId) return;
    const section = document.querySelector(`section[data-post-id='${postId}']`);
    section.classList.toggle("hide");
    return section;
}

//4
function toggleCommentButton(postId){
  if(!postId) return;
  const button = document.querySelector(`button[data-post-id='${postId}']`);
  button.textContent = button.textContent === 'Show Comments'?'Hide Comments':'Show Comments';
  return button;
}

//5
function deleteChildElements(parentElement) {
  if(!parentElement?.tagName) return;
  let child = parentElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  } 
  return parentElement;
}

//6
function addButtonListeners() {
  const button = document.querySelectorAll("main button");
  if(button){
    //button.addEventListener("click", function (e) {toggleComments(e, postId)}, false);
  }
  return button;
}

//7
function removeButtonListeners() {
  const button = document.querySelectorAll("main button");
  if(button){
    for(let i = 0; i < button.length; i++){
      
    }
  }
  return button;
}

//8
function createComments(commentsData){
  if(!commentsData) return;
  const fragment = document.createDocumentFragment();
  commentsData.forEach(function(comment){
    const article = document.createElement('article');
    const h3Element = createElemWithText('h3', comment.name);
    const p1Element = createElemWithText('p', comment.body);
    const p2Element = createElemWithText('p', `From: ${comment.email}`);
    article.append(h3Element);
    article.append(p1Element);
    article.append(p2Element);
    fragment.append(article);
  });
  return fragment;
}

//9
function populateSelectMenu(usersData){
  if(!usersData) return;
  const selectMenu = document.getElementById('selectMenu');
  return selectMenu;
}

//10
const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
  } catch (err) {
    console.error(err);
  }
  
};

//11
const getUserPosts = async (userId) => {
  if(!userId) return;
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

//12
const getUser = async (userId) => {
  if(!userId) return;
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

//13
const getPostComments = async (postId) => {
  if(!postId) return;
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

//14
const displayComments = async (postId) => {
  if(!postId) return;
  const section = document.createElement("section");
  
  return section;
};

//15
const createPosts = async (posts) => {
  if(!posts) return;
  const fragment = document.createDocumentFragment();
  return fragment;
};

//16
const displayPosts = async (posts) => {
  if(!posts) return;
  const main = document.getElementById("main");
  const element = !posts ? await createPosts(posts): document.createElement('p');
  main.append(element);
  return element;
};

//17
function toggleComments(){
  
}

//18
const refreshPosts = async (posts) => {
  removeButtonListeners();
  deleteChildElements('main');
};

//19
const selectMenuChangeEventHandler = async () => {
  const refreshPostsArray = [];
  return refreshPostsArray;
};

//20
const initPage = async () => {
  const users = await getUsers();

};

//21
function initApp(){
  
}
