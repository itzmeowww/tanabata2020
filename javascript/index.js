var firebaseConfig = {
  apiKey: "AIzaSyAzpnkmJ5G3yF0wx25Rgjqdq7GDMomuxNk",
  authDomain: "tanabata-5380a.firebaseapp.com",
  databaseURL: "https://tanabata-5380a.firebaseio.com",
  projectId: "tanabata-5380a",
  storageBucket: "tanabata-5380a.appspot.com",
  messagingSenderId: "532544675239",
  appId: "1:532544675239:web:710da3967111eb99ecaa82",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

$(document).ready(() => {
  let myWish = "";
  $("#my-form").submit((e) => {
    e.preventDefault();
    let wishlist = [
      "#wish1",
      "#wish2",
      "#wish3",
      "#wish4",
      "#wish5",
      "#wishopt",
    ];
    let color = "";
    for (i in wishlist) {
      let wishId = wishlist[i];
      if ($(wishId).prop("checked")) {
        if (wishId != "#wishopt") {
          myWish = $(wishId).val();
          break;
        } else {
          myWish = $("#opt").val();
          break;
        }
      }
    }
    color = $("#color").val();
    let name = $("#name").val();
    if (myWish == "") {
      alert("Please enter your wish =)");
    } else {
      console.log(myWish, color);
      db.collection("wishes")
        .add({
          name: name,
          color: color,
          wish: myWish,
        })
        .then(() => {
          console.log("Added");
        });
    }
  });
});
