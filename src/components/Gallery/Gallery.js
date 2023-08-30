import React from 'react'

 img1  = 'https://media.istockphoto.com/id/804652886/photo/indian-elephant-festival.jpg?s=1024x1024&w=is&k=20&c=cTiCtuymsFTwgPZzpKPjmZ_IY_i1liipH8aobQow3ts='
 img2  = 'https://media.istockphoto.com/id/849238122/photo/tiger-dance-of-kerala.jpg?s=2048x2048&w=is&k=20&c=loB6udnyQ4KrIMCgNwnSu37Gmk_UdUnsX-b-00RMJ1c='
 img3  = 'https://media.istockphoto.com/id/1205880882/photo/kathakali-the-most-beautiful-art-form-of-kerala-gods-own-country.jpg?s=2048x2048&w=is&k=20&c=2Pt5GAEREg3cpRnGC2C_UHIVm7FOog3gRtzkaDGUTs4='
 img4  = 'https://media.istockphoto.com/id/1178984568/photo/indian-couple-making-flower-rangoli-on-diwali-or-onam-festival-taking-selfie-or-holding-sweets.jpg?s=2048x2048&w=is&k=20&c=KjrgEU7txAwDGK-GKoy1T74MEKS3-AuEqt2CIGYW-u0='
 img5  = 'https://media.istockphoto.com/id/1159749056/photo/keralas-snake-boat-races.jpg?s=2048x2048&w=is&k=20&c=fEx07qKwEFh9Y5qyCMdb1eheCl8epOSugyqJMjL3JJM='
 img6  = 'https://www.shutterstock.com/shutterstock/photos/1137475730/display_1500/stock-vector-onam-south-indian-festival-boat-race-vallam-kali-team-kerala-1137475730.jpg'
 img7  = 'https://thumbs.dreamstime.com/z/band-people-dressed-onam-festival-kerala-india-107795410.jpg?w=768'
 img8  = 'https://thumbs.dreamstime.com/z/onam-flower-decoration-kerala-traditional-festival-celebration-design-atham-pookalam-44420060.jpg?w=768'
 img9  = 'https://thumbs.dreamstime.com/z/onam-festival-sweet-food-semiya-payasam-kerala-onam-festival-sweet-food-semiya-payasam-vermicelli-kheer-palada-payasam-dessert-193589563.jpg?w=992'
 img10 = 'https://media.gettyimages.com/id/841874464/photo/india-festival-boat-race.jpg?s=1024x1024&w=gi&k=20&c=h-rMbkoKYy3VWsPU0Z9OoBKQeF9aaQK-kuASwiwT514='
 img11 = 'https://imgs.search.brave.com/u2nLe35KeVA6aySQSQ5bxzku3Sit6hMBoaYWiGgcg0o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9vbmFtLW1haGFi/YWxpLWNoYXJhY3Rl/ci1pbWFnZS1yZW5k/ZXJfNjYxMzIzLTY3/LmpwZz9zaXplPTYy/NiZleHQ9anBn'
 img12 = 'https://imgs.search.brave.com/x-njhN2luefse4LZDCsXuBx7PZAOvEFUzxzvjrB_I-E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9vbmFtLW1hdmVs/aS1jaGFyYWN0ZXIt/M2QtcmVuZGVyLWlt/YWdlanBnXzY2MTMy/My02Ni5qcGc'





function Gallery() {
  let data = [
    {id: 1, imgSrc: img1},
    {id: 2, imgSrc: img2},
    {id: 3, imgSrc: img3},
    {id: 4, imgSrc: img4},
    {id: 5, imgSrc: img5},
    {id: 6, imgSrc: img6},
    {id: 7, imgSrc: img7},
    {id: 8, imgSrc: img8},
    {id: 9, imgSrc: img9},
    {id: 10, imgSrc: img10},
    {id: 11, imgSrc: img11},
    {id: 12, imgSrc: img12},
  ]


  return (
    <div className='gallery'>
      {img1}
      <svg>
        <image href='https://media.istockphoto.com/id/804652886/photo/indian-elephant-festival.jpg?s=1024x1024&w=is&k=20&c=cTiCtuymsFTwgPZzpKPjmZ_IY_i1liipH8aobQow3ts=' />
      </svg>
    </div>
  )
}

export default Gallery