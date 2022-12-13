// document.querySelector("#fileupload").addEventListener('change',e=>{
//     var file = e.target.files[0];
// 	if (file.type != '.pdf') {
// 		console.error('It is not a pdf file.');
// 		return;
// 	}
// })


// var form=document.querySelector("#selectFile");
// var fileInput=document.querySelector("#fileInput");

// // form.addEventListenerp("submit",()=>{

// // })

// form.addEventListener("submit",e=>{
//     var file=e.target.files[0];
//     if(file.type!='.pdf')
//     {
//         console.log("It is not a pdf file.");
//         return;
//     }
// })
// fileInput.onchange=e=>{
//     console.log(e); 
// }


console.log($);

// $('#button').click(function(){
//     console.log("button is clicked");
//     if(file.type!=".pdf")
//     {
//         console.log("not pdf");
//         alert("it is not a pdf ");
//     }
// })


function mypdf() {
  $('form').submit(function (e) {
    e.preventDefault();
    // $('input[type="file"]');
    window.open(mypdf,"_blank");
    this.submit();
  });
};
