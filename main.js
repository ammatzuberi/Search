persons = [
  {
    id: 325326,
    firstname: "Dan",
    lastname: "Tiger",
    image: src = "https://i.pinimg.com/236x/ff/e5/c7/ffe5c7867c2b9529b62a529ffcc567aa--mens-suits-gorgeous-men.jpg",
    age: 21,
    gender: "Male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland"
  },
  {
    id: 325326,
    firstname: "Fan",
    lastname: "Tiger",
    image: src = "https://i.pinimg.com/236x/de/48/ba/de48ba806e40c99022972656808dd956.jpg",
    age: 30,
    gender: "Male",
    hobbie: ["Football", "Reading"],
    nationality: "america"
  },
  {
    id: 325330,
    firstname: "Frank",
    lastname: "Lion",
    image: src = "https://media.istockphoto.com/photos/portrait-of-a-real-crying-man-picture-id646876580?k=20&m=646876580&s=612x612&w=0&h=Un8dFNb0ekAczRUVgv4nZPoON6vfxb1oeX7MM3X1W7g= ",
    age: 43,
    gender: "male",
    hobbie: ["walking", "basketball"],
    nationality: "germani"
  },
  {
    id: 325334,
    firstname: "Bilal",
    lastname: "Zakki",
    image: src = "https://loveshayariimages.in/wp-content/uploads/2021/10/Men-Whatsapp-Dp-Profile-Images-wallpaper-download.jpg",
    age: 15,
    gender: "male",
    hobbie: ["swimming", "walking"],
    nationality: "pakistan"
  },

]



// console.log(persons[3].hobbie[0])

//search and Filter data 



function search() {
  var x = document.getElementById('mySearch').value;
  var y = document.getElementById('filterjson').value;
  //  document.getElementById('returnvalue').innerHTML= alert(x +"Data NOT Found Please Entre Correct Value")

  let data_all = persons.filter(item =>
     item[y].toString().toLowerCase() == x.toString().toLowerCase()
  
     );
  let render_data = document.getElementById('all_cards');
    
  for (var i = 0; i < persons.length; i++) {
    for (var key = 0; key < persons[i].hobbie.length; key++) {

      if (persons[i].hobbie[key] == x) {
        console.log(persons[i].hobbie[key])
        render_data.innerHTML += `<br>
        <div class="card">
  
          <div class="container">
       
     
      
              <img class ="image" src= ${persons[i].image}>
              <h4> ${persons[i].firstname} ${persons[i].lastname}</h4>
              <p>  ${persons[i].age}</p>
              <p>  ${persons[i].gender}</p>
              <p> ${persons[i].nationality}</p>
           
              
          </div>
      </div>
      `

      }

    }
  }


  // console.log(data_all[0].hobbie)

  // console.log(data_all)

  for (var index = 0; index < data_all.length; index++) {

    // console.log(data_all)     

    // for( var j= 0; j<data_all[index].hobbie.length ;j++){

    //   console.log(data_all[j])
    //  }


    render_data.innerHTML += `
          <div class="card">
    
            <div class="container">
            <img class ="image" src= ${data_all[index].image}>
       
                <h4> ${data_all[index].firstname} ${data_all[index].lastname}</h4>
                <p>${data_all[index].age}</p>

                <p> ${data_all[index].nationality}</p>
                <p>${data_all[index].gender}</p>
          
            </div>
        </div>
        `
  }
  // for(var i =0 ; i<data_all.[hobbie].length; i++){
  //   console.log(data_all)

  // }

}
