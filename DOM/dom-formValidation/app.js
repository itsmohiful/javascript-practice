function validateForm(){
    const form = document.forms['thisform'];
    const value = form['fname'].value;
    console.log(value);
    return false
}

// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
// }