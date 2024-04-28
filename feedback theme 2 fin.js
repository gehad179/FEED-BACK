document.addEventListener("DOMContentLoaded", function() {
  const stars = document.querySelectorAll('.rating input');

  stars.forEach((star) => {
    star.addEventListener('click', function() {
      const rating = this.value;
      document.getElementById('result').innerText = `You rated this ${rating} stars.`;
    }); 
  });

  document.getElementById('submitBtn').addEventListener('click', function() {
    var rating = document.querySelector('input[name="rating"]:checked');
    var feedbackText = document.getElementById("feedbackText").value.trim();

    // Set feedbackText to local storage
    localStorage.setItem('feedback', feedbackText);

    if (!rating) {
      alert("Please select a star rating before submitting.");
    } else if (feedbackText === "") {
      alert("Please enter your feedback before submitting.");
    } else {
      document.getElementById('thanks').style.display = 'block';
      setTimeout(function() {
        location.reload();
      }, 1500); 
    }
  });
});