const container = document.getElementById('container')
const details = document.getElementById('details')
const requestUrl = 'https://api.github.com/users/hiteshchoudhary';
const xhr = new XMLHttpRequest();
let profilePhoto;


xhr.open('GET', requestUrl);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText);
        console.log(data.followers);
        profilePhoto = data.avatar_url;
        console.log(profilePhoto);
        console.log(typeof profilePhoto);
        container.innerHTML = `
        <img class="avatar" src="${profilePhoto}" alt="profilePhoto" width="200px">`
        details.innerHTML = `
        <h2>Name : ${data.name}</h2>
        <h2>Followers : ${data.followers}</h2>
        <h2>Profile Link : <a target="_blank" href="${data.html_url}">Click Here</a></h2>`

    }
}


xhr.send();


