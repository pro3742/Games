//player 1

let randomNumber = Math.ceil(Math.random()*6)
//console.log(randomNumber);

let randomDiceImage = 'dice' + randomNumber + '.jpg'

let randomImageSource = 'images/' + randomDiceImage

let image = document.querySelectorAll('img')[0]
image.setAttribute('src', randomImageSource )

//player2

let randomNumber1 = Math.ceil(Math.random() * 6)

let randomDiceImage1 = 'dice' + randomNumber1 + '.jpg'

let randomImageSource1 = 'images/' + randomDiceImage1

let image1 = document.querySelectorAll('img')[1]
image1.setAttribute('src', randomImageSource1 )

//conditional statement

if(randomNumber > randomNumber1){
    document.querySelector('h1').innerText = 'Player 1 wins 🎈'
} else if(randomNumber < randomNumber1) {
    document.querySelector('h1').innerText = 'Player 2 wins 🎈'
}
else
{document.querySelector('h1').innerText = 'Draw 👫'}

    



