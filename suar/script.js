function yesClicked() {
    document.getElementById("question").style.display = "none";
    document.getElementById("buttons").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerText = "Awlele Motu Suarr😂";
    document.getElementById("resultImage").style.display = "block";
  }
  
  function moveNoButton() {
    const noBtn = document.getElementById("noBtn");
    const sound = document.getElementById("boingSound");
  
    const container = document.querySelector(".btn-container");

  const containerRect = container.getBoundingClientRect();
  const maxWidth = container.clientWidth - noBtn.offsetWidth;
  const maxHeight = container.clientHeight - noBtn.offsetHeight;

    noBtn.style.position = "absolute";
    const x = Math.random() * maxWidth;
    const y = Math.random() * maxHeight;
  
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  
    noBtn.classList.add("bounce");
    setTimeout(() => noBtn.classList.remove("bounce"), 500);
  
    sound.currentTime = 0;
    sound.play();
  }
  
