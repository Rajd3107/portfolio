document.addEventListener('DOMContentLoaded', function () {
    const sentenceElement = document.getElementById('sentence');
    const sentences = ["Computer Science Enthusiast", "Problem solver","Passionate Programmer", "Software Developer",];
    let currentSentenceIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // Speed of typing
    const deletingSpeed = 50; // Speed of deleting
    const delayBetweenSentences = 1500; // Delay between sentences
    
    function type() {
        const currentSentence = sentences[currentSentenceIndex];
        if (isDeleting) {
            sentenceElement.textContent = currentSentence.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            if (currentCharIndex == 0) {
                isDeleting = false;
                currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
                setTimeout(type, delayBetweenSentences);
            } else {
                setTimeout(type, deletingSpeed);
            }
        } else {
            sentenceElement.textContent = currentSentence.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            if (currentCharIndex == currentSentence.length) {
                isDeleting = true;
                setTimeout(type, delayBetweenSentences);
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }
    
    type();
});
function openImage(button) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const img = button.querySelector('.imgpre');
    modal.style.display = "block";
    modalImg.src = img.src;
  }
  
  function closeImage() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
  }
  