window.onload = () => {
    let main = document.getElementById("main")
    let images = ['url("images/image1.jpg")','url("images/image2.jpg")','url("images/image3.jpg")','url("images/image4.jpg")','url("images/image5.jpg")']
    main.style.backgroundImage = images[Math.floor(Math.random() * images.length)];
  }
  