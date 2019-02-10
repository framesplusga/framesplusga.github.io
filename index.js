function submitUsername() {
  const usernameBox = document.getElementById("usernameInput");
  const username = usernameBox.value;
  window.open(`https://purchase.sk1er.club/checkout/packages/add/3227693/single/gift?username=${username}`, "_self");
};
