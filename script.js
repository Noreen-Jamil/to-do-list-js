let itemArray = []; 
let checkBox;
let orderedList;
let inputs;
let listItem;
let newItem;
let deleteButton =document.querySelector('#delete');
let removeButton =document.querySelector('#remove');
let totalAddItems = 0;

function addItem(){
	
	document.querySelector('input').innerHTML= "";
	newItem = document.querySelector('input').value;

	if(newItem != ""){

		++totalAddItems;

		deleteButton.style.display = "none";
		removeButton.style.display = "inline-block";//to enable remove button again

		itemArray.push(newItem);
		document.querySelector('input').value = ''; // to clear input field on button click

		// showList();
		

		orderedList = document.querySelector('ol');
		orderedList.style.listStyleType = "decimal";
		orderedList.innerHTML = "";

		itemArray.forEach(function(item , index){
			
			listItem = document.createElement('li');
			listItem.setAttribute('id', `liitem${index}`);
			listItem.style.width="100%";
			orderedList.appendChild(listItem);

			checkBox = document.createElement('input');
			checkBox.setAttribute("type",'checkbox');
			checkBox.setAttribute('id', `checkitem${index}`);
			checkBox.style.marginRight = "20px";
			checkBox.style.width = "18px";
			checkBox.style.height = "18px";

			listItem.appendChild(checkBox);

			let label = document.createElement('label');
			label.htmlFor = `checkitem${index}`;
			label.setAttribute('id',`labelitem${index}`);
			label.style.width="100%";
			label.appendChild(document.createTextNode(item));

			listItem.appendChild(label);
			checkBox.style.display ="none";
		});
	}
	console.log('arraylength '+ itemArray.length);
	
	if(itemArray.length != 0){
			document.querySelector('h2').style.display = "block";
		}
}

function removeItem(){

	if(itemArray != ""){
		deleteButton.style.display = "inline-block";
		removeButton.style.display = "none";
	}

	inputs = document.querySelectorAll('input');
		
	for(let i=1; i<=itemArray.length; i++){
		inputs[i].style.display ="inline-block";
	}

	orderedList.style.listStyleType = "none";

}


let indexes = [];
function deleteItem(){
	
	console.log("total add items "+ totalAddItems);
	console.log('button pressed');
	// let labels = document.querySelectorAll('label');
	

		for(let i=1; i<=totalAddItems; i++){
			console.log('input '+ i);
			console.log(inputs[i].checked);
			if(inputs[i].checked == true){

				let elementRemoved = document.getElementById(`labelitem${i-1}`).textContent;
				itemArray.forEach(function(item,index){
					
					if(item == elementRemoved){
						itemArray.splice(index,1);
					}
				});
				console.log(itemArray);
				// orderedList.removeChild(orderedList.childNode[i-1]);
				
				let itemToRemove = document.getElementById(`liitem${(i-1)}`);
				itemToRemove.parentNode.removeChild(itemToRemove);
				
				inputs[i].checked = false;

			}
		}
		if(itemArray.length == 0){
			document.querySelector('h2').style.display = "none";
		}
		console.log('arraylength '+ itemArray.length);
	}