// ---------------- SCORES ----------------
let mathScore = 0;
let scienceScore = 0;
let correctMathAnswer;
let correctScienceAnswer;

// ---------------- GENERATE MATH ----------------
function generateMath() {
  const topic = document.getElementById("mathTopic").value;
  const level = document.getElementById("mathLevel").value;

  switch(topic){
    case "linear": generateLinear(level); break;
    case "quadratic": generateQuadratic(level); break;
    case "functions": generateFunction(level); break;
    case "simultaneous": generateSimultaneous(level); break;
    case "polynomials": generatePolynomial(level); break;
    case "trigonometry": generateTrigonometry(level); break;
  }
}

// ----- Linear -----
function generateLinear(level){
  let a,x,b;
  if(level==="easy"){a=Math.floor(Math.random()*5)+1;x=Math.floor(Math.random()*5)+1;}
  else if(level==="medium"){a=Math.floor(Math.random()*10)+1;x=Math.floor(Math.random()*10)+1;}
  else{a=Math.floor(Math.random()*20)+5;x=Math.floor(Math.random()*20)+5;}
  b=a*x;
  correctMathAnswer=x;
  document.getElementById("mathQuestion").innerText=`Solve for x: ${a}x = ${b}`;
  document.getElementById("mathFeedback").innerText="";
  document.getElementById("mathAnswer").value="";
}

// ----- Quadratic -----
function generateQuadratic(level){
  let a,x,b,c;
  if(level==="easy"){a=1;x=Math.floor(Math.random()*5)+1;}
  else if(level==="medium"){a=Math.floor(Math.random()*5)+1;x=Math.floor(Math.random()*10)+1;}
  else{a=Math.floor(Math.random()*10)+1;x=Math.floor(Math.random()*20)+5;}
  b=-2*a*x;c=a*x*x;
  correctMathAnswer=x;
  document.getElementById("mathQuestion").innerText=`Solve for x: ${a}x² + ${b}x + ${c} = 0`;
  document.getElementById("mathFeedback").innerText="";
  document.getElementById("mathAnswer").value="";
}

// ----- Functions -----
function generateFunction(level){
  let m,c,x;
  if(level==="easy"){m=Math.floor(Math.random()*5)+1;x=Math.floor(Math.random()*5)+1;c=Math.floor(Math.random()*5);}
  else if(level==="medium"){m=Math.floor(Math.random()*10)+1;x=Math.floor(Math.random()*10)+1;c=Math.floor(Math.random()*10);}
  else{m=Math.floor(Math.random()*20)+1;x=Math.floor(Math.random()*20)+5;c=Math.floor(Math.random()*20);}
  correctMathAnswer=m*x+c;
  document.getElementById("mathQuestion").innerText=`f(x) = ${m}x + ${c}. Find f(${x})`;
  document.getElementById("mathFeedback").innerText="";
  document.getElementById("mathAnswer").value="";
}

// ----- Simultaneous -----
function generateSimultaneous(level){
  let x,y;
  if(level==="easy"){x=Math.floor(Math.random()*5)+1;y=Math.floor(Math.random()*5)+1;}
  else if(level==="medium"){x=Math.floor(Math.random()*10)+1;y=Math.floor(Math.random()*10)+1;}
  else{x=Math.floor(Math.random()*20)+5;y=Math.floor(Math.random()*20)+5;}
  let a1=1,b1=1,c1=x+y;
  let a2=2,b2=1,c2=2*x+y;
  correctMathAnswer=x;
  document.getElementById("mathQuestion").innerText=`Solve:\n${a1}x + ${b1}y = ${c1}\n${a2}x + ${b2}y = ${c2}`;
  document.getElementById("mathFeedback").innerText="";
  document.getElementById("mathAnswer").value="";
}

// ----- Polynomials -----
function generatePolynomial(level){
  let x,a,b;
  if(level==="easy"){x=Math.floor(Math.random()*5)+1;a=Math.floor(Math.random()*5)+1;b=Math.floor(Math.random()*5)+1;}
  else if(level==="medium"){x=Math.floor(Math.random()*10)+1;a=Math.floor(Math.random()*10)+1;b=Math.floor(Math.random()*10)+1;}
  else{x=Math.floor(Math.random()*20)+5;a=Math.floor(Math.random()*20)+5;b=Math.floor(Math.random()*20)+5;}
  correctMathAnswer=a*x*x+b*x;
  document.getElementById("mathQuestion").innerText=`Evaluate: ${a}x² + ${b}x for x = ${x}`;
  document.getElementById("mathFeedback").innerText="";
  document.getElementById("mathAnswer").value="";
}

// ----- Trigonometry -----
function generateTrigonometry(level){
  let angle,sinVal;
  if(level==="easy"){angle=30;}
  else if(level==="medium"){angle=45;}
  else{angle=60;}
  sinVal=Math.sin(angle*Math.PI/180).toFixed(2);
  correctMathAnswer=parseFloat(sinVal);
  document.getElementById("mathQuestion").innerText=`Find sin(${angle}°)`;
  document.getElementById("mathFeedback").innerText="";
  document.getElementById("mathAnswer").value="";
}

// ---------------- CHECK MATH ----------------
function checkMath(){
  let answer=parseFloat(document.getElementById("mathAnswer").value);
  if(answer===correctMathAnswer){
    mathScore++;
    document.getElementById("mathScore").innerText=mathScore;
    document.getElementById("totalScore").innerText=mathScore+scienceScore;
    document.getElementById("mathFeedback").innerText="✅ Correct! Well done!";
  } else {
    document.getElementById("mathFeedback").innerText=`❌ Incorrect. Correct answer is ${correctMathAnswer}`;
  }
}

// ---------------- GENERATE SCIENCE ----------------
function generateScience(){
  const topic=document.getElementById("scienceTopic").value;
  const level=document.getElementById("scienceLevel").value;
  switch(topic){
    case "speed": generateSpeed(level); break;
    case "newton": generateNewton(level); break;
    case "ohm": generateOhm(level); break;
    case "workpower": generateWorkPower(level); break;
    case "pressure": generatePressure(level); break;
    case "kinematics": generateKinematics(level); break;
  }
}

// ----- Speed -----
function generateSpeed(level){
  let distance,time;
  if(level==="easy"){distance=Math.floor(Math.random()*200)+50;time=Math.floor(Math.random()*10)+1;}
  else if(level==="medium"){distance=Math.floor(Math.random()*400)+100;time=Math.floor(Math.random()*20)+5;}
  else{distance=Math.floor(Math.random()*1000)+200;time=Math.floor(Math.random()*50)+10;}
  correctScienceAnswer=(distance/time).toFixed(2);
  document.getElementById("scienceQuestion").innerText=`A car travels ${distance} m in ${time} s. What is speed (m/s)?`;
  document.getElementById("scienceFeedback").innerText="";
  document.getElementById("scienceAnswer").value="";
}

// ----- Newton -----
function generateNewton(level){
  let m,a;
  if(level==="easy"){m=Math.floor(Math.random()*10)+1;a=Math.floor(Math.random()*5)+1;}
  else if(level==="medium"){m=Math.floor(Math.random()*20)+5;a=Math.floor(Math.random()*10)+1;}
  else{m=Math.floor(Math.random()*50)+10;a=Math.floor(Math.random()*20)+5;}
  correctScienceAnswer=(m*a).toFixed(2);
  document.getElementById("scienceQuestion").innerText=`A mass of ${m} kg is accelerated at ${a} m/s². Calculate force (N).`;
  document.getElementById("scienceFeedback").innerText="";
  document.getElementById("scienceAnswer").value="";
}

// ----- Ohm -----
function generateOhm(level){
  let I,R;
  if(level==="easy"){I=Math.floor(Math.random()*5)+1;R=Math.floor(Math.random()*10)+1;}
  else if(level==="medium"){I=Math.floor(Math.random()*10)+1;R=Math.floor(Math.random()*20)+1;}
  else{I=Math.floor(Math.random()*20)+5;R=Math.floor(Math.random()*50)+5;}
  correctScienceAnswer=(I*R).toFixed(2);
  document.getElementById("scienceQuestion").innerText=`Current ${I} A through resistance ${R} Ω. Voltage (V)?`;
  document.getElementById("scienceFeedback").innerText="";
  document.getElementById("scienceAnswer").value="";
}

// ----- Work / Power / Energy -----
function generateWorkPower(level){
  let F,d;
  if(level==="easy"){F=Math.floor(Math.random()*10)+1;d=Math.floor(Math.random()*5)+1;}
  else if(level==="medium"){F=Math.floor(Math.random()*20)+5;d=Math.floor(Math.random()*10)+1;}
  else{F=Math.floor(Math.random()*50)+10;d=Math.floor(Math.random()*20)+5;}
  correctScienceAnswer=(F*d).toFixed(2);
  document.getElementById("scienceQuestion").innerText=`Work done by force ${F} N over distance ${d} m. Calculate work (J).`;
  document.getElementById("scienceFeedback").innerText="";
  document.getElementById("scienceAnswer").value="";
}

// ----- Pressure -----
function generatePressure(level){
  let F,A;
  if(level==="easy"){F=Math.floor(Math.random()*50)+10;A=Math.floor(Math.random()*5)+1;}
  else if(level==="medium"){F=Math.floor(Math.random()*100)+20;A=Math.floor(Math.random()*10)+1;}
  else{F=Math.floor(Math.random()*200)+50;A=Math.floor(Math.random()*20)+5;}
  correctScienceAnswer=(F/A).toFixed(2);
  document.getElementById("scienceQuestion").innerText=`Force ${F} N over area ${A} m². Calculate pressure (Pa).`;
  document.getElementById("scienceFeedback").innerText="";
  document.getElementById("scienceAnswer").value="";
}

// ----- Kinematics -----
function generateKinematics(level){
  let u,t;
  if(level==="easy"){u=Math.floor(Math.random()*5)+1;t=Math.floor(Math.random()*5)+1;}
  else if(level==="medium"){u=Math.floor(Math.random()*10)+1;t=Math.floor(Math.random()*10)+1;}
  else{u=Math.floor(Math.random()*20)+5;t=Math.floor(Math.random()*20)+5;}
  let a=9.8;
  correctScienceAnswer=(u*t + 0.5*a*t*t).toFixed(2);
  document.getElementById("scienceQuestion").innerText=`An object moves with u=${u} m/s for t=${t}s. Distance? (Free fall a=9.8 m/s²)`;
  document.getElementById("scienceFeedback").innerText="";
  document.getElementById("scienceAnswer").value="";
}

// ---------------- CHECK SCIENCE ----------------
function checkScience(){
  let answer=parseFloat(document.getElementById("scienceAnswer").value).toFixed(2);
  if(answer==correctScienceAnswer){
    scienceScore++;
    document.getElementById("scienceScore").innerText=scienceScore;
    document.getElementById("totalScore").innerText=mathScore+scienceScore;
    document.getElementById("scienceFeedback").innerText="✅ Correct! Excellent!";
  } else {
    document.getElementById("scienceFeedback").innerText=`❌ Incorrect. Correct answer is ${correctScienceAnswer}`;
  }
}

// ---------------- RESET PROGRESS ----------------
function resetProgress(){
  mathScore=0;
  scienceScore=0;
  document.getElementById("mathScore").innerText=0;
  document.getElementById("scienceScore").innerText=0;
  document.getElementById("totalScore").innerText=0;
  document.getElementById("mathFeedback").innerText="";
  document.getElementById("scienceFeedback").innerText="";
  document.getElementById("mathQuestion").innerText="Click 'New Question'";
  document.getElementById("scienceQuestion").innerText="Click 'New Question'";
  document.getElementById("mathAnswer").value="";
  document.getElementById("scienceAnswer").value="";
}
