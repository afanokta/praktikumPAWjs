let data = [{ // penyimpanan data
    id: 1,
    firstname: "Harry",
    lastname: "Potter",
    age: 40
  },
  {
    id: 2,
    firstname: "John",
    lastname: "Deep",
    age: 39
  },
]


var dashboard = document.getElementById("dashboard") // mengambil element dari id "dashboard"
function showData() { // menampilkan data
  var table = document.getElementById("table")
  let str = `
  <th>No</th>
  <th>Firstname</th>
  <th>Lastname</th>
  <th>Age</th>
  <th>Aksi</th>
  </tr>
  `
  data.forEach(element => {
    str += `<tr>
    <td>${element.id}</td>
    <td>${element.firstname}</td>
    <td>${element.lastname}</td>
    <td>${element.age}</td>
    <td>
        <button class="btn btn-primary text-white" onclick="detail(${element.id})">Show</button>
        <button class="btn btn-success text-white" onclick="showEdit(${element.id})">Edit</button>
        <button class="btn btn-danger text-white" onclick="hapus(${element.id})">Delete</button>
    </td>
    </tr>
    `
  });
  // console.log(str)
  table.innerHTML = str
}

function detail(id) { //menampilkan halaman detail data
  let detail = data.find(x => x.id === id )
  // console.log(data.find(x => x.id === id))
  let str = `
  <h2>Detail Data</h2>
    <p>Id : ${detail.id}</p>
    <p>Firstname : ${detail.firstname}</p>
    <p>Lastname : ${detail.lastname}</p>
    <p>Age : ${detail.age}</p>
    <button class="btn btn-primary text-white" onclick="showDefault()">Back to Home</button>
  `
 dashboard.innerHTML = str   
}

function showDefault() { //menampilkan halaman default
  str = 
  `<div id="dashboard">
  <button onclick="showAddData()" class="btn btn-success my-4 text-white">Add Data Mahasiswa</button>
  <button onclick="showData()" class="btn btn-primary my-4 ">Tampilkan Data</button>
  <table class="table table-striped" id="table">
  <tr>  
  <th>No</th>
  <th>Firstname</th>
  <th>Lastname</th>
  <th>Age</th>
  <th>Aksi</th>
  </tr>
          <tr id="data"></tr>
          </table>
    </div>`
  dashboard.innerHTML = str
  showData()
}

function showEdit(id) { // menampilkan form edit
  let detail = data.find(x => x.id === id )
  let str = 
    `
    <h2>Edit Data</h2>
    <label>
    id
    <input class="form-control" type="number" value="${detail.id}" name="id">
    </label>
    <label>
    Firstname
    <input class="form-control" type="text" value="${detail.firstname}" name="firstname">
    </label>
    <label>
    lastname
    <input class="form-control" type="text" value="${detail.lastname}" name="lastname">
    </label>
    <label>
    age
    <input class="form-control" type="number" value="${detail.age}" name="age">
    </label>
    <button class="btn btn-success" onclick="showDefault()">Back to Home</button>
    `
    dashboard.innerHTML = str
  }
  
function showAddData() {
  let str = 
    `
    <h2>Tambah Data</h2>
    <label>
      id
      <input id="id" class="form-control" type="number" value="" name="id" required>
    </label>
    <label>
      Firstname
      <input id="firstname" class="form-control" type="text" value="" name="firstname" required>
    </label>
    <label>
      lastname
      <input id="lastname" class="form-control" type="text" value="" name="lastname" required>
    </label>
    <label>
      age
      <input id="age" class="form-control" type="number" value="" name="age" required>
    </label>
    <button class="btn btn-success" onclick="addData()">SIMPAN</button>
    `
    dashboard.innerHTML = str
}

function addData() { //fungsi untuk menambah data
  let id = document.getElementById("id").value
  let fname = document.getElementById("firstname").value
  let lname = document.getElementById("lastname").value
  let age = document.getElementById("age").value
  
  if (!id && !fname && !lname && !age) { //checking jika ada value yang kosong
    alert("ada data yang belum diisi!")
    return showDefault()
  }

  data.push({
    id: id,
    firstname: fname,
    lastname: lname,
    age: age,
  })
  showDefault()
}

function saveEdit(params) {
  // silahkan dilanjutkan :)) 
}

function hapus(id){
  // silahkan dilanjutkan :)) 
}
