//what do i want to know about this person
// imageObj.stopImage(true);
const apiKey = 'd32d201c9306106f11295d2a8bca1f59'
const oneMusicApikey = '98469c06f048091e3e22f7b824397095'

// let playlistArr = [
//   artist: "kanye west",
//   song: 'good life'
// ];



let happyMusicArr = ['8821d2ea-2854-44fc-b14f-007b507da034 ', '25d8de5e-3662-4ffd-8dea-511a696ac3e7 ', '2f14c941-e61c-4e6d-8465-48dbbda0cac9 ',
  'cec593ff-0591-4cb4-abf2-42103e905e27 ', '0dc4f937-ed9a-453e-bc9b-9cf669090012 ', '4ee9425e-0be1-476f-b64b-94a7295b4b87 ', '1938b0e1-0a66-429c-9592-20f32ad74627 ',
  '3e78afb0-8a3c-419a-8cac-6a592d9b83a8 ', '7dcbc1be-4257-4d64-b915-045dfb23ae88 ', '8685ccf1-c0a9-49f6-89ba-91780bf5d951'
]


let happyRes = document.querySelector('#happy-artist')


let artists = [];
let promiseArr = [];
// for (let i = 0; i < happyMusicArr.length; i++) {
//   promiseArr.push(fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey}&mbid=${happyMusicArr[i]}&format=json`));
// }

for (let i = 0; i < happyMusicArr.length; i++) {
  promiseArr.push(getTrack1());
}

getTrack2().then(result => {
  console.log('result: ', result);
  let videoAction = document.getElementsByClassName('.hoverable');
  let videosArr = ['https://www.youtube.com/embed/IpwHB2U3J1s',
    'https://www.youtube.com/embed/vt1Pwfnh5pc', 'https://www.youtube.com/embed/jo505ZyaCbA', 'https://www.youtube.com/embed/zDKO6XYXioc',
    'https://www.youtube.com/embed/CEIeb85DkCs', 'https://www.youtube.com/embed/7VBex8zbDRs', 'https://www.youtube.com/embed/0DdCoNbbRvQ', 'https://www.youtube.com/embed/yTCDVfMz15M',
    'https://www.youtube.com/embed/fLexgOxsZu0', 'https://www.youtube.com/embed/d-diB65scQU'
  ]



  for (let i = 0; i < result.length; i++) {

    result[i].track.video = videosArr[i];
    createTrackHTML(result[i].track)


  }
})

// Promise.all(promiseArr)
// .then(valuesArr => {
//   let responseArray = []
//   // for (let response of valuesArr) {
//   //   //responseArray.push(response.json());
//   //
//   // }
//   console.log('valuesArr: ', valuesArr);
//   Promise.all(responseArray).then(artists => {
//     //console.log('artist: ',artists.name);
//      //artist;
//
//
//     let videoAction = document.getElementsByClassName('.hoverable');
//     let videosArr = ['https://www.youtube.com/embed/IpwHB2U3J1s',
//    'https://www.youtube.com/embed/vt1Pwfnh5pc','https://www.youtube.com/embed/jo505ZyaCbA','https://www.youtube.com/embed/zDKO6XYXioc',
//    'https://www.youtube.com/embed/CEIeb85DkCs','https://www.youtube.com/embed/7VBex8zbDRs','https://www.youtube.com/embed/0DdCoNbbRvQ','https://www.youtube.com/embed/yTCDVfMz15M',
//    'https://www.youtube.com/embed/fLexgOxsZu0','https://www.youtube.com/embed/d-diB65scQU']
//
//
//
//     for(let i = 0; i < artists.length; i++) {
//
//       artists[i].track.video = videosArr[i];
//       createTrackHTML(artists[i].track)
//
//
//     }
//     console.log('artists: ',artists);
//
//
//
//   });
//
// });

function createTrackHTML(track) {
  let newRow = document.createElement('tr');
  let artistField = document.createElement('td')
  let songField = document.createElement('td')
  let durationField = document.createElement('td')
  let linkField = document.createElement('td')
  let linkAnchorTag = document.createElement('a')





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


  newRow.addEventListener('click', () => {
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
