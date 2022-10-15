window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });
function savetoLS(e) {
 
  const obj = {
    amount: e.target.amount.value,
    desc: e.target.desc.value,
    cat: e.target.cat.value,
    key: e.timeStamp,
  };

  const objJSON = JSON.stringify(obj);
  localStorage.setItem(obj.key, objJSON);
  Object.keys(localStorage).forEach((key) => {
    stringifiedData = localStorage.getItem(key);
    details = JSON.parse(stringifiedData);
    listall();
  });
}

listall();
function listall() {
  document.getElementById("listdata").innerHTML = null;
  Object.keys(localStorage).forEach((key) => {
    stringifiedData = localStorage.getItem(key);
    details = JSON.parse(stringifiedData);
    addlines(details);
  });
}

document.addEventListener;

function deleteItem(e) {
  console.log("delete called on " + e.target.value);
  localStorage.removeItem(e.target.value);
  listall();
}

function editItem(e) {
  var editteditem = localStorage.getItem(e.target.value);
  editteditem = JSON.parse(editteditem);
  localStorage.removeItem(editteditem.key);
  listall();
  const am = document.getElementById('amount');
  am.value = editteditem.amount;
 const de =  document.getElementById('desc');
 de.value = editteditem.desc;
  const ca =document.getElementById('cat');
  ca.value = editteditem.cat;

  
}

function addlines(obj) {
  const parentUL = document.getElementById("listdata");

  const childLi = `<li> ${obj.amount}  -> ${obj.desc} -> ${obj.cat} <form> <button onclick="editItem(event)" value="${obj.key}" type="reset">Edit</button> </form> <form>  <button onclick="deleteItem(event)" value="${obj.key}" type="reset">Delete</button> </form><br>`;
  parentUL.innerHTML = parentUL.innerHTML + childLi;
}
