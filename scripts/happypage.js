//what do i want to know about this person
// imageObj.stopImage(true);
const apiKey = 'd32d201c9306106f11295d2a8bca1f59'
const oneMusicApikey = '98469c06f048091e3e22f7b824397095'



let happyMusicArr =['a90c6e4a-0438-4da9-9a9f-355723d946ae', '548bfe47-8d1c-4a4d-8a0f-2f9a4ee6af5b','f5141c2a-48aa-4e16-ae38-007f8e4a877b',
'455732fa-77b5-4ac5-bfa8-18dea06451d7','0bf0dfd3-34e2-4f7e-b9f3-2eadbf3cdd0c','9656e1b2-87c1-4208-8a33-fa814961fc9e','38f529e9-92d5-407a-82e3-0c87b0ae906c',
'0a92482c-4cd4-4464-a859-441b710c9c2b','84953e50-8236-491b-980e-c658993c81a2','27164e3a-a7dc-4570-9569-ebe9d89d1b60']


let happyRes = document.querySelector('#happy-artist')

console.log('Happy response', happyRes);

let artists = [];
let promiseArr = [];
for (let i = 0; i < happyMusicArr.length; i++) {
  promiseArr.push(fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey}&mbid=${happyMusicArr[i]}&format=json`));
}


Promise.all(promiseArr)
.then(valuesArr => {
  let responseArray = []
  for (let response of valuesArr) {
    responseArray.push(response.json());
  }

  Promise.all(responseArray).then(artists => {


    let videosArr = ['https://www.youtube.com/embed/jZhQOvvV45w',
   'https://www.youtube.com/embed/u57d4_b_YgI','https://www.youtube.com/embed/ehu3wy4WkHs','https://www.youtube.com/embed/ZbZSe6N_BXs',
   'https://www.youtube.com/embed/9n5G0qFBsHM','https://www.youtube.com/embed/6JCLY0Rlx6Q','https://www.youtube.com/embed/OkyrIRyrRdY','https://www.youtube.com/embed/Y66j_BUCBMY',
   'https://www.youtube.com/embed/fLexgOxsZu0','https://www.youtube.com/embed/d-diB65scQU']

    for(let i = 0; i < artists.length; i++) {
      artists[i].track.video = videosArr[i];
      createTrackHTML(artists[i].track)
    }
    console.log('artist: ',artists);


  });

});

function createTrackHTML(track) {
  let newRow = document.createElement('tr');
  //console.log('newRow: 'newRow.classList.add(''));
  let artistField = document.createElement('td')
  let songField = document.createElement('td')
  let durationField = document.createElement('td')
  let linkField = document.createElement('td')
  let linkAnchorTag = document.createElement('a')


  //console.log('row: ',newRow);
  artistField.innerText = track.artist.name;
  songField.appendChild(linkAnchorTag);
  linkAnchorTag.innerText = track.name;
  durationField.innerText = millisToMinutesAndSeconds(track.duration)
  linkAnchorTag.href = track.url;


  newRow.className = 'hoverable'
  newRow.appendChild(artistField)
  newRow.appendChild(songField)
  newRow.appendChild(durationField)
  newRow.appendChild(linkField)

  newRow.addEventListener('click',()=>{
    let videoFrame = document.querySelector('iframe')
    videoFrame.src = track.video;
  })

  let trackList = document.getElementById('list-tracks')
  trackList.appendChild(newRow)
}

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
