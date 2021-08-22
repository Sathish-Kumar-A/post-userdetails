//Async

async function niceMessage(){
    try{
      const data=await fetch("https://611f26339771bf001785c728.mockapi.io/users");
    const people=await data.json();
    console.log(people.length)
    section.innerHTML=``;
      for(var x of people){
        createElement(x);
      }
    }
    catch{
      console.log("Please try again")
    }
    
  }

  niceMessage()

  //DOM for divs
  let section=document.createElement('div');
  section.setAttribute("class",'section');
  document.body.append(section);

  function createElement(content){
    let division=document.createElement('div');
    division.setAttribute('class','outerdiv');

    let image=document.createElement('div');
    image.setAttribute('class','image');
    image.innerHTML=`<img src="${content.avatar}">`

    let smalldiv=document.createElement('div');
    smalldiv.setAttribute('class','innerdiv');
    smalldiv.innerHTML=`<h4>${content.name}</h4>
    <p>${new Date(content.createdAt).toDateString()}
    <button class="deleteuser" onclick="deleteuser(${content.id})">delete</button>`

    division.append(image,smalldiv);
    section.append(division);
  }
let len;
  async function deleteuser(id){
    const deleteitem = await fetch("https://611f26339771bf001785c728.mockapi.io/users/"+id,{method:"DELETE"});
    const user=await deleteitem.json();
    niceMessage();
  }


  //post---------------------------------
let usernamevar=document.querySelector('.username');
let avatarvar=document.querySelector(".avatar");
 async function post(){
   console.log(usernamevar.value,avatarvar.value)
  const postitem=await fetch("https://611f26339771bf001785c728.mockapi.io/users",{method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body: JSON.stringify({
    createdAt: new Date().toISOString(),
    name:usernamevar.value,
    avatar:avatarvar.value,
  })
})
niceMessage();
usernamevar.value=``;
avatarvar.value=``
 }
  