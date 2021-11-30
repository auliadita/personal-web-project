const emailReceived = "rhomairama@gmail.com";

let nameSender = document.getElementById("input-name");
let email = document.getElementById("input-email");
let phone = document.getElementById("input-phone");
let subject = document.getElementById("input-subject");
let message = document.getElementById("input-message");

//function nama-function(){}
function submitForm() {
    // Lempar data / ambil data

    // value adalah sebuah data yang berada dalam form
    let nameData = nameSender.value;
    let emailData = email.value;
    let phoneData = phone.value;
    let subjectData = subject.value;
    let messageData = message.value;

    // menampilkan data menggunakan alert dengan menggunakan konsep backtick
    // alert(`
    //     name : ${nameData}
    //     email : ${emailData}
    //     phone : ${phoneData}
    //     subject : ${subjectData}
    //     message : ${messageData}
    //     `);

    if (nameData == "") {
        return alert("Please input name field must be not empty");
    }else if (emailData == "") {
        return alert("Please input email field must be not empty");
    }else if (phoneData == "") {
        return alert("Please input phone number field must be not empty")
    }else if (subjectData == "") {
        return alert("Please input email field must be not empty")
    }else if (messageData == "") {
        return alert("Please input email field must be not empty")
    }

    // Generate mail to
    const a = document.createElement("a");
    a.href = `mailto:${emailReceived}?subject=${subjectData}&body=Hello my name 
    ${nameData}, ${subjectData}, ${messageData}` ;
    a.target = "_blank";
    a.click();
}