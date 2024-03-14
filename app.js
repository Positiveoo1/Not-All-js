 const round1 = document.getElementById('round1');
 const round2 = document.getElementById('round2');
 const round3 = document.getElementById('round3');
 const btn1 = document.getElementById('btn1');
 const btn2 = document.getElementById('btn2');
 const btn3 = document.getElementById('btn3');

 function toggle1 () {
     round1.classList.toggle('toggles1');
     btn1.style.backgroundColor = round1.classList.contains('toggles1') ? 'purple' : '#D1D1D0';
     round1.style.transition = round1.classList.contains('toggles1') ? '.6s transform ease': '.6s ease';

   if (round1.classList.contains('toggles1')) {
        round2.classList.remove('toggles3');
        btn2.style.backgroundColor = '#D1D1D0';
    }
 }
 function toggle2 () {
     round2.classList.toggle('toggles3');
     btn2.style.backgroundColor = round2.classList.contains('toggles3') ? 'purple' : '#D1D1D0';
     round2.style.transition = round2.classList.contains('toggles2') ? '.6s transform ease': '.6s ease';

if (round2.classList.contains('toggles3')) {
    round3.classList.remove('toggles2');
    btn3.style.backgroundColor = '#D1D1D0';
}

 }
 function toggle3 () {
     round3.classList.toggle('toggles2');
     btn3.style.backgroundColor = round3.classList.contains('toggles2') ? 'purple' : '#D1D1D0';
     round3.style.transition = round3.classList.contains('toggles3') ? '.6s transform ease': '.6s ease';

if (round3.classList.contains('toggles2')) {
    round1.classList.remove('toggles1');
    btn1.style.backgroundColor = '#D1D1D0';
}

 }






