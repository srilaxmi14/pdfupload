// document.querySelector("#fileupload").addEventListener('change',e=>{
//     var file = e.target.files[0];
// 	if (file.type != '.pdf') {
// 		console.error('It is not a pdf file.');
// 		return;
// 	}
// })


var form=document.querySelector("#selectFile");
var fileInput=document.querySelector("#fileInput");

// form.addEventListenerp("submit",()=>{

// })

fileInput.onchange=e=>{
    console.log(e);
}
