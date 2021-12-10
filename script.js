
const checklist = document.getElementById("checklist")
const inputBox = document.getElementById("inputBox")
const addBtn = document.getElementById("addBtn")
showList()

addBtn.onclick = ()=>{
   let userValue = inputBox.value
   let storedValue = localStorage.getItem("list")
   if(storedValue == null){ //if localstorage has no data
    listArray = []; //create a blank array
  }else{
    listArray = JSON.parse(storedValue);  //transforming json string into a js object
  }
  listArray.push(userValue); //pushing or adding new value in array
  localStorage.setItem("list", JSON.stringify(listArray));
  showList()


}
function showList(){
    let storedValue = localStorage.getItem("list")
    if(storedValue == null){ //if localstorage has no data
      listArray = []; //create a blank array
    }else{
      listArray = JSON.parse(storedValue);  //transforming json string into a js object
    }
    showList()
    
}

function showList(){
  let storedValue = localStorage.getItem("list")
  if(storedValue==null){
    listArray = []
  }else{
    listArray = JSON.parse(storedValue)
  }
  let newListTag =''
  listArray.forEach((element,index) => {
    newListTag += `
      <div class="checklist-item" >
          <input type="checkbox" id="${element}" >
          <label for="${element}" class="strikethrough">${element}</label>
          <span class="icon" onclick="deleteList(${index})"><i class ="fa fa-trash"></i> </span>

      </div>
  `  
  });
  checklist.innerHTML= newListTag
  inputBox.value=""

}

function deleteList(index){
  let storedData = localStorage.getItem("list")
  listArray = JSON.parse(storedData)
  listArray.splice(index, 1)
  localStorage.setItem("list", JSON.stringify(listArray))
  showList()
}

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

