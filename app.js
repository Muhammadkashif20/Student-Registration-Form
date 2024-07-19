// Student Information Form:-

let Submit=document.getElementById('Submit')
let userName=document.getElementById('userName')
let userEmail=document.getElementById('userEmail')
let userAge=document.getElementById('userAge')
let serialNumber=1
let generateId=111
Submit.addEventListener('click',()=>{
    let upSno=serialNumber++
    let upgenId=generateId++
    let storeUsername=userName.value
    let storeUseremail=userEmail.value
    let storeUserage=userAge.value
    const storetheValue={upSno,storeUsername,storeUseremail,storeUserage,upgenId}
        let show=document.getElementById('show')
        show.innerHTML+=`<table border="1px solid black">
        <tr>
                <td>${storetheValue.upSno}</td>
                <td>${storetheValue.storeUsername}</td>
                <td>${storetheValue.storeUseremail}</td>
                <td>${storetheValue.storeUserage}</td>
                <td>${storetheValue.upgenId}</td>
            </tr>
        </table>`
        if(storeUsername==''){
            alert('Please Enter UserName!')
            show.innerHTML=''
        }
        if(storeUseremail==''){
                 alert('Please Enter UserEmail!')
            show.innerHTML=''
        }
        if(storeUserage==''){
                 alert('Please Enter UserAge!')
            show.innerHTML=''
    }   
})
// function add() {
    
// }

// function del() {
//     let show=document.getElementById('show')
//     let changeValue=Object.values(show)
//     let Del=changeValue
// }
    
