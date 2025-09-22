window.onload = function() {
  document.getElementById("bannerModal").style.display = "flex";
};

// Close modal when clicking ×
document.querySelector(".close-btn").onclick = function() {
  document.getElementById("bannerModal").style.display = "none";
};

// Proceed button closes modal
document.getElementById("proceedBtn").onclick = function() {
  document.getElementById("bannerModal").style.display = "none";
};

// Prevent closing when clicking inside modal-content
document.querySelector(".modal-content").onclick = function(event) {
  event.stopPropagation();
};

// Optional: prevent outside click from closing (force button use)
// Comment this block if you want outside click to also close
document.getElementById("bannerModal").onclick = function() {
  // do nothing
};
