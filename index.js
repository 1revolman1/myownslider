document.addEventListener("DOMContentLoaded", function () {
  let block = document.querySelector("[img-slide]");
  let img = document.querySelector("[img-slide] img");
  let img2 = img.cloneNode(true);
  img.after(img2);
  let slide_mover = document.querySelector("[img-slide] .block");
  console.log(slide_mover);
  slide_mover.addEventListener("mousedown", mouseDown);
  // function mouseLeave(e) {
  //   console.log("Leave ", e);
  //   if (window.event.stopPropagation) window.event.stopPropagation();
  //   window.event.cancelBubble = true;
  //   e.cancelBubble = true;
  //   slide_mover.removeEventListener("mousemove", mouseMove);
  //   block.removeEventListener("mouseup", mouseUp);
  //   slide_mover.removeEventListener("mouseleave", mouseLeave);
  // }
  function mouseUp(e) {
    console.log("Up ", e);
    // if (window.event.stopPropagation) window.event.stopPropagation();
    // window.event.cancelBubble = true;
    // e.cancelBubble = true;
    slide_mover.removeEventListener("mousemove", mouseMove);
    block.removeEventListener("mouseup", mouseUp);
    slide_mover.removeEventListener("mouseleave", mouseLeave);
  }
  function mouseMove(e) {
    console.log("Move", event);
    // if (window.event.stopPropagation) window.event.stopPropagation();
    // window.event.cancelBubble = true;
    // e.cancelBubble = true;
    let mainIMG = document.querySelectorAll("[img-slide] img")[1];
    let mainIMG_width = mainIMG.offsetWidth;
    let mainIMG_height = mainIMG.offsetHeight;
    let residual = getCursorPos(event, block);
    mainIMG.style.clip = `rect(0, ${residual}px, ${mainIMG_height}px, 0)`;
    if (residual <= mainIMG_width - 25)
      slide_mover.style.left = `${residual}px`;
  }
  function mouseDown(e) {
    console.log("Down ", e);
    // if (window.event.stopPropagation) window.event.stopPropagation();
    // window.event.cancelBubble = true;
    // e.cancelBubble = true;
    slide_mover.addEventListener("mousemove", mouseMove);
    block.addEventListener("mouseup", mouseUp);
    slide_mover.addEventListener("mouseleave", mouseLeave);
  }
  slide_mover.addEventListener("mousedown", mouseDown);

  function getCursorPos(e, block) {
    var a,
      x = 0,
      e = e || window.event;
    /* Get the x and y positions of the image: */
    a = block.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    return x;
  }
});
