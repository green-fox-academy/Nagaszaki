const postcontainer = document.querySelector('.postcontainer')
window.onload = () => {
  fetch('http://localhost:3000/posts')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(post => {
      const currentpost = document.createElement('div');
      const voting = document.createElement('div');
      const postcontent = document.createElement('div');

      voting.classList='voting';
      postcontent.classList='postcontent'
      currentpost.classList='post';

      const img1 = document.createElement('img');
      img1.setAttribute('src','./upvote.png');
      voting.appendChild(img1);
      img1.onclick = () =>{
        fetch('http://localhost:3000/posts/'+post.id+'/upvote',{
          method:'PUT',
          redirect: 'follow'
        }).then((response) =>{
          if (response.redirected) {
            window.location.href = response.url;
        }
        })
      }

      const score = document.createElement('p');
      score.innerText=post.score;
      voting.appendChild(score);


      const img2 = document.createElement('img');
      img2.setAttribute('src','./downvote.png');
      voting.appendChild(img2);
      img2.onclick = () =>{
        fetch('http://localhost:3000/posts/'+post.id+'/downvote',{
          method:'PUT',
          redirect: 'follow'
        }).then((response) =>{
          if (response.redirected) {
            window.location.href = response.url;
        }
        })
      }

      const title = document.createElement('h1');
      const link = document.createElement('a');
      link.setAttribute('href',post.url);
      link.setAttribute('target','__blank');
      link.appendChild(title);
      title.textContent = post.title;
      postcontent.appendChild(link);

      const submitted = document.createElement('p');
      submitted.textContent = 'Submitted: '+post.timestamp.substring(0,10)+' '+post.timestamp.substring(11,19);
      postcontent.appendChild(submitted);


      currentpost.appendChild(voting);
      currentpost.appendChild(postcontent);
      postcontainer.appendChild(currentpost);
    })
  })
}