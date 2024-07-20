// Student Information Form:-

let Submit=document.getElementById('Submit')
let userName=document.getElementById('userName')
let userEmail=document.getElementById('userEmail')
let userAge=document.getElementById('userAge')
let serialNumber=1
let generateId=1654
let keynoChange=0
Submit.addEventListener('click',()=>{
    let storeUsername=userName.value.trim()
    let storeUseremail=userEmail.value.trim()
    let storeUserage=userAge.value.trim()
    let upSno=serialNumber++
    let upgenId=generateId++
    if(storeUsername==='' || storeUseremail==='' || storeUserage===''){
        alert('Please Enter Empty Field!')
        return;
    }
    const storetheValue={upSno,storeUsername,storeUseremail,storeUserage,upgenId}  // object:-
        let show=document.getElementById('show')
        show.innerHTML+=`<table>
        <tr >
                <td class="td-1">${storetheValue.upSno}</td>
                <td class="td-2">${storetheValue.storeUsername}</td>
                <td class="td-3">${storetheValue.storeUseremail}</td>
                <td class="td-4">${storetheValue.storeUserage}</td>
                <td class="td-5">${storetheValue.upgenId}</td>
                <td class="td-6"><button id="edit" onclick="edit()">Edit</button></td>
                <td class="td-7"><button id="del" onclick="del(this)">Del</button></td>
            </tr>
        </table>`
        keynoChange++
       localStorage.setItem(`Student ${keynoChange}`,JSON.stringify(storetheValue))
    userName.value=''
    userEmail.value=''
    userAge.value=''
 

})
let delCount=0
function del(btn) {
    delCount++
    let del1row=btn.parentNode.parentNode
    del1row.remove()
}

function edit() {
    let editInputs=`<input type="text"  id="userName" placeholder="Edit YourName" maxlength="16"><br><br>
            <input type="email"  id="userEmail" placeholder="Edit Your Email" maxlength="20"><br><br>
            <input type="text"  id="userAge" placeholder="Edit Your Age" maxlength="2"><br>`
        Swal.fire({
            title: 'Edit Your Input Fields 🖊',
            html:editInputs,
        })
        let show=document.getElementById('show')
        show.textContent=editInputs


    }
    










    
