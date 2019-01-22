
var ul = document.getElementById('list');              //global variable ul for unordered list
var li;                                                // for li

var addButton = document.getElementById('add');			//action for add button
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove')     // action for remove button
removeButton.addEventListener('click', removeItem);

var removeallButton = document.getElementById('removeall')  // action for remove all buttton
removeallButton.addEventListener('click', removeallItem);

function addItem(){                                        // function for add button
	
	var inputText = document.getElementById('input');      //input value
	var myvalue = inputText.value;
	var text = document.createTextNode(myvalue);
	if (myvalue === ""){                                   //if input is null then it shows alert message
		
		alert("Enter your todo")
	}

	else{                                                //else it appends one more item in todo list
		li = document.createElement('li');
		var checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.setAttribute('id','check');

		var label = document.createElement('label')
		label.setAttribute('for', 'item')

		ul.appendChild(li);
		li.appendChild(checkbox);
		label.appendChild(text)
		li.appendChild(label)
		ul.insertBefore(li,ul.childNodes[0])
		setTimeout(() => {
			li.className = 'visual';
		},4);

		inputText.value = "";



	}
	

}

function removeallItem(){                     //function for remove all button

		while(ul.firstChild)
		{
			ul.removeChild(ul.firstChild);
		}
	
}

function removeItem(){                              //function for remove button
	li = ul.children
	for (let i = 0; i <li.length ; i++) {
		while(li[i] && li[i].children[0].checked){
			ul.removeChild(li[i])

		}
	}
}