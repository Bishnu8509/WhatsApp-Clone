let border_btns = document.querySelectorAll(".bottom_header_content button");
// console.log(border_btns);
let status_area = document.querySelector(".status_area");
let conatact_list = document.querySelector(".conatact_list");
let call_area = document.querySelector(".call_area");
let community_area = document.querySelector(".community_area");

let chatBtn = document.querySelector(".chatBtn");
let status_btns = document.querySelector(".status_btns");
let call_btn = document.querySelector(".call_btn");


border_btns.forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    if (element.id === "status") {
      status_area.style.left = "0";
      conatact_list.style.left = "-100%";
      call_area.style.left = "100%";
      community_area.style.left = "-100%";
      element.classList.add("active");
      chatBtn.style.display = "none";
      status_btns.style.display="block"
      call_btn.style.display="none"

    } else if (element.id === "chats") {
      conatact_list.style.left = "0%";
      status_area.style.left = "100%";
      call_area.style.left = "100%";
      community_area.style.left = "-100%";
      element.classList.add("active");
      chatBtn.style.display = "block";
      status_btns.style.display="none"
      call_btn.style.display="none"

    } else if (element.id === "calls") {
      call_area.style.left = "0";
      status_area.style.left = "-100%";
      conatact_list.style.left = "-100%";
      community_area.style.left = "-100%";
      element.classList.add("active");
      chatBtn.style.display = "none";
      status_btns.style.display="none"
      call_btn.style.display="block"

    } else {
      community_area.style.left = "0";
      call_area.style.left = "100%";
      status_area.style.left = "100%";
      conatact_list.style.left = "100%";
      element.classList.add("active");
      chatBtn.style.display = "none";
      status_btns.style.display="none"
      call_btn.style.display="none"

    }
  });
});
