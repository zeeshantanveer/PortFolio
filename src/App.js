import './App.css'; // Make sure to add your CSS for the classes

const App = () => {
  // const words = ["React Developer", "React  Developer", " & UX &nbsp; Designer"]; // Replace with your actual words
  // const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // useEffect(() => {
  //   // Split words into letters and wrap them in spans on component mount
  //   const wordElements = document.querySelectorAll('.word');
  //   wordElements.forEach((word) => {
  //     let letters = word.textContent.split("");
  //     word.textContent = "";
  //     letters.forEach((letter) => {
  //       let span = document.createElement("span");
  //       span.textContent = letter;
  //       span.className = letter;
  //       word.appendChild(span);
  //     });
  //   });

  //   // Set the opacity of the first word
  //   if (wordElements[0]) {
  //     wordElements[0].style.opacity = "1";
  //   }

  //   // Set up interval for text change
  //   const interval = setInterval(() => {
  //     changeText();
  //   }, 4000); // Change text every 4 seconds

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, [currentWordIndex]);

  // const changeText = () => {
  //   const wordElements = document.querySelectorAll('.word');
  //   const maxWordIndex = wordElements.length - 1;

  //   const currentWord = wordElements[currentWordIndex];
  //   const nextWord = currentWordIndex === maxWordIndex ? wordElements[0] : wordElements[currentWordIndex + 1];

  //   Array.from(currentWord.children).forEach((letter, i) => {
  //     setTimeout(() => {
  //       letter.className = "Letter out";
  //     }, i * 80);
  //   });

  //   nextWord.style.opacity = "1";
  //   Array.from(nextWord.children).forEach((letter, i) => {
  //     letter.className = "Letter behind";
  //     setTimeout(() => {
  //       letter.className = "Letter in";
  //     }, 340 + i * 80);
  //   });

  //   setCurrentWordIndex(currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1);
  // };

  // return (
  //   <div className="word-container">
  //     {words.map((word, index) => (
  //       <div className="word" key={index} style={{ opacity: index === 0 ? 1 : 0 }}>
  //         {word}
  //       </div>
  //     ))}
  //   </div>
  // );

//   const word = document.querySelectorAll(".word");
//   const changeWord = () => {
//     setTimeout(() => {
//       word.wordContent = "React&nbsp;Developer";
//     }, 0);
//     setTimeout(() => {
//       word.wordContent = "Frontend &nbsp; React &nbsp; Developer ";
//     }, 400);
//     setTimeout(() => {
//       word.wordContent = " UI & UX &nbsp; Designer ";
//     },800);
//     setTimeout(() => {
//       word.wordContent = "  Web &nbsp; Designer ";
//     }, 1200);
//   }
//   changeWord();

const circles = document.querySelectorAll('circle');
circles.forEach(elem =>{
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor(dots*marked/100);
  var points = "";
  var rotate = 360/dots;


  for(let i = 0; i < dots; i++) {
    points += `<div className="points" style={style='--i:${i}; --rot:${rotate}deg'}></div>`;
  }
  elem.innerHTML = points;
})
};



export default App;
