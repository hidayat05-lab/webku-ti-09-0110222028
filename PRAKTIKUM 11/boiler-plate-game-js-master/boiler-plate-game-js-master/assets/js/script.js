// menangkapnelemen a dengan menggunakan looping
document.querySelectorAll('#option a').forEach((anchor) => {
    anchor.addEventListener('click', (element) => {
        computerChoice(element);
    })
})

function computerChoice(element){
    //menangkap pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap pilihann komputer pada result
    let pilihanKomputer = document.querySelector('#result');

    // membuat pilahan untuk komputer
    let choices = ['Rock','Paper','Scissors']

    // membuat pilihan random pada komputer
    pilihanKomputer.innerHTML = choices[Math.floor(Math.random() * choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika user menang
    if (pilihanUser == 'Rock' && pilihanKomputer == 'Scissors'){
        setTimeout(alert('You Win!'),100);
    }
    if (pilihanUser == 'Paper' && pilihanKomputer == 'Rock'){
        setTimeout(alert('You Win!'),100);
    }
    if (pilihanUser == 'Scissors' && pilihanKomputer == 'Paper'){
        setTimeout(alert('You Win!'),100);
    }

    //jika komputer yang menang

    if (pilihanUser == 'Scissors' && pilihanKomputer == 'Rock'){
        setTimeout(alert('You lose!'),100);
    }
    if (pilihanUser == 'Rock' && pilihanKomputer == 'Paper'){
        setTimeout(alert('You lose!'),100);
    }
    if (pilihanUser == 'Paper' && pilihanKomputer == 'Scissors'){
        setTimeout(alert('You lose!'),100);
    }

    // jika draw atau seri
    if (pilihanUser == pilihanKomputer){
        setTimeout(alert('Draw!'), 100);
    }

}