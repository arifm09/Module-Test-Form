let name_box = document.getElementById("name");
let profession_box = document.getElementById("profession");
let age_box = document.getElementById("age");

let addUserBtn = document.getElementById("add-user");

let employeeSet = new Set();

let count = 1;
addUserBtn.addEventListener("click", () =>{
    let name = name_box.value;
    let profession = profession_box.value;
    let age = age_box.value;

    if(name=="" || profession=="" || age==""){
        let message = document.getElementById("error-success");
        message.innerText = "Error : Please Make sure All details are filled before adding in an employee !"
        message.style.color = "red";
    }
    else{
        let message = document.getElementById("error-success");
        message.innerText = "Success : Employee Added!"
        message.style.color = "green";
        
        let employees = document.getElementById("employees");

        let superDiv = document.createElement("div");
        superDiv.className = "employee-div";
        superDiv.id = "employee-div1";
        let id = count++;

        let objTag = document.createElement("div");
        objTag.id = "obj" + id;
        objTag.className = "obj";
        objTag.innerHTML = `${id}. &nbsp;&nbsp;Name: ${name} ;\&nbsp;&nbsp;Profession: ${profession}&nbsp;&nbsp;Age: ${age}`;

        let deleteBtn = document.createElement("Button");
        deleteBtn.id = "btn" + id;
        deleteBtn.className = "btn";
        deleteBtn.innerText = "Delete";

        deleteBtn.addEventListener("click",(e) =>{
            let delBtn = document.getElementById(e.target.id);
            let empdiv = delBtn.parentElement;
            empdiv.remove();
            employeeSet.delete(empdiv);

            if(employeeSet.size===0){
                emp0.innerText = "You have 0 Employees."
            }

        })

        superDiv.append(objTag);
        superDiv.append(deleteBtn);
        employeeSet.add(superDiv);
        
        employees.append(superDiv);

        let emp0 = document.getElementById("emp0");
        emp0.innerText = "";
    }
})