  let imageObj = {
  imgArr: ['dead_battery.jpg', 'evolution.jpg', 'funny_cat_pic.jpg', 'funny_paper_guys.jpg', 'happy_image1.jpg', 'wood_garden.jpg'],
  currentImg: 0,
  changeImage: (image) => {
    let counter = 0;
    imageCycle = setInterval(() => {

        let randomNum = Math.floor(Math.random() * 6);
        image.src = `/images/${imageObj.imgArr[randomNum]}`;
        console.log('Times Ran: ', counter);
      },
      3000);
  },
  stopImage: (terminate) => {
    if (terminate) clearInterval(imageObj.imageCycle);
    //console.log('INTERVAL STOPPED');
    //console.log(imageObj.imgArr[3]);
  },
  imageCycle: null

  } //end of obj

  let images = document.querySelector('img');
  let terminate = false;

  imageObj.changeImage(images);


  //console.log(images.src = `/images/${imageObj.imgArr[3]}`);

  console.log(images);
  let nextPage = document.querySelector('#learn-button');
  console.log('nextPage: ', nextPage);
  nextPage.href='/pages/questions.html';

  let button = document.querySelector('a').addEventListener('click', () => {

  imageObj.stopImage(true);




  })
