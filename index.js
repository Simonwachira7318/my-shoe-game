const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
const qt = document.querySelector(".qt")

let a=1; 
plus.addEventListener("click",function(){
	 a++;
	 a=(a<10)? "0"+a:a;
	 num.innerHTML=a;
	 qt.innerHTML=a;
	 
	 
 });

 minus.addEventListener("click",function(){
	if(a>1){
		a--;
		a=(a<10) ? "0" + a:a;
		num.innerHTML=a;
		qt.innerHTML=a;
	}
	
	
});
// const cart = document.querySelector(".cart-nav");
// const checkout = document.querySelector(".checkout");

// cart.addEventListener("click",function(){
// 	if(checkout.style.display=="none"){
// 		checkout.style.display="block";
// 	}else{
// 		checkout.style.display="none";
// 	}
		    	
	
// });
const navmenu = document.querySelector("#nav-menu");
const menumedia = document.querySelector(".menu-media");

navmenu.addEventListener("click",function() 
 {
	 if(menumedia.style.display=="none"){
		 menumedia.style.display="block";
	 }else{
		menumedia.style.display="none";
	 }
});

const close2 = document.querySelector("#close");
close2.addEventListener("click",function() {
	menumedia.style.display="none"
	
});
 
// page switching from index to add-product page 
function redirectToAdd_product() {
  window.location.href = 'Add_product.html';
}
//----------------------------------

// pages authorification feature 
function authorizeAndRedirect1() {
  const password = prompt("Enter authorization password:");

  // Check if the entered password is correct
//   use- simon -as password 

  if (password === "simon") {
	// Redirect to the desired page
	window.location.href = "Add_product.html";
  } else {
	// Password is incorrect, show an error message or perform any other action
	alert("Authorization failed. Please try again.");
  }
}
// end of Authorification


// add image file 
  function openFileInput() {
    document.getElementById('fileInput').click();
  }

  function handleFileUpload(event) {
    const file = event.target.files[0];
    const uploadStatus = document.getElementById('uploadStatus');

    if (file) {
      // File is uploaded successfully
      uploadStatus.textContent = 'File uploaded successfully!';
    } else {
      // No file selected or upload failed
      uploadStatus.textContent = 'File upload failed!';
    }
  }


// end 

// implementing the hidden feature of edit/delete section div 
function authorizeAndRedirect() {
  const password = prompt("Enter authorization password:");

  // Check if the entered password is correct
  if (password === "simon") {
    // Show the hidden document
    document.querySelector('.product-page').classList.remove('hidden');
    alert("Authorization successful‼️ CHECK THE EDIT/DELETE PAGE BELOW🤝⬇️⬇️");
  } else {
    // Password is incorrect, show an error message or perform any other action
    alert("Authorization failed❌❌❌‼️. Please try again.");
  }
}



// end 