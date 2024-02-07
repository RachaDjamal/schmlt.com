document.addEventListener('DOMContentLoaded', () => {
    const subtitles = [
      "I'm a <span>tireless</span> ultra cyclist.",
      "I'm <span>incorrigibly</span> curious.",
      "I'm a <span>born</span> tinkerer.",
      "I'm a <span>quick</span> learner.",
      "I'm an <span>energetic</span> co-worker.",
      "I'm a <span>perpetual</span> maker.",
      "I'm a <span>huge</span> 'The Office' fan.",
      "I'm an <span>aspiring</span> web developer."
  ];
    let index = 0;

    const changeHeading = () => {
        const headingElement = document.getElementById('Subtitle');
        anime({
            targets: headingElement,
            opacity: [1, 0],
            translateY: [0 , 50],
            duration: 1000,
            easing: 'easeInOutQuad',
            complete: () => {
                index = (index + 1) % subtitles.length;
                headingElement.innerHTML = subtitles[index];
                anime({
                    targets: headingElement,
                    opacity: [0, 1],
                    translateY: [50 , 0],
                    duration: 1000,
                    easing: 'easeInOutQuad'
                });
            }
        });
    };

    setInterval(changeHeading, 5000);
});