const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

var jobs = [["Customer Service Representative - Seasonal", 
"The Maryland-National Capital Park & Planning Commission", 
"Greenbelt, MD", 
"The Maryland-National Capital Park and Planning Commission, Prince George's County, Parks and Recreation, Aquatics and Athletic Facilities Division is seeking Customer Service Representatives for the Tucker Road Ice Rink. Candidates will responsible for the operation of the front desk. Knowledge of facility software, schedules, programs, fees and policies preferred. The schedule will be days evenings and weekends. The salary range will be $15.00/hr-$15.52/hr dependent on experience, qualifications, and certifications."],
["SLA Manager/Data Analyst ProjM3 (Government) Jobs",
"AT&T Government Solutions",
"Columbia, MD",
"AT&T Global Public Sector is a trusted provider of secure, IP enabled, cloud-based, network solutions and professional services to the Department of Defense. We are dedicated to recruiting, developing and empowering a diverse, high-performing workforce that is passionate about what they do, committed to our shared values and dedicated to our customers' mission. RIS I is the delivery of regional IT services to the end user. We offer support of end user devices including desktop, workplace peripherals, and voice and video devices. We support local and campus area networks, including wireless and cable plant. AT&T has an opening for a SLA Manager/Data Analyst to be responsible for SLA Measurement & Reporting, Improvement of Service quality, Root Cause Analysis of service levels and other service delivery metrics, Auditing and Risk Management for a large IT services contract."],
["Government Information Specialist - FOIA",
"Federal Reserve System--Board of Governors",
"Washington, DC",
"The Senior Information Disclosure Specialist performs a variety of functions in support of the Board's Information Disclosure Section (IDS) and works to ensure the Board's compliance with the Freedom of Information Act (FOIA) and Privacy Act (PA), the Board's Rules Regarding Availability of Information (Board Rules), and relevant Department of Justice (DOJ) guidance."],
["Senior Knowledge Analyst - Center for Digital Government",
"Boston Consulting Group",
"Washington, DC",
"As a Senior Knowledge Analyst (SKA) within BCG's Center for Digital Government (CDG), a part of the Public Sector and Technology & Digital Advantage Practice, you will work in a growing global team, providing digital government expertise and insights whilst working together with case and proposal teams to provide knowledge assets, analysis and expert advisory. You'll serve as a thought partner and content expert to case teams and topic leaders, helping structure and solve complex issues. Some weeks you'll help many different case teams work through challenging digital government Issues, while others you might 'go deep' at a single client, sometimes directly with client counterparts. Additionally, you will support the CDG in developing existing & new intellectual property and knowledge assets. You will work on commercialization efforts in conjunction with business leaders, supporting marketing efforts, conferences and publications. As a Senior Knowledge Analyst you will assist with on-boarding, training and guiding junior colleagues and share best practices within the team."],
["Data Analyst (Advanced) Government Jobs",
"AT&T Government Solutions",
"Springfield, VA",
"AT&T Global Public Sector is a trusted provider of secure, IP enabled, cloud-based, network solutions and professional services to the Federal Government. We are dedicated to recruiting, developing, and empowering a diverse, high-performing workforce that is passionate about what they do, committed to our shared values, and dedicated to our customers' mission. AT&T has an opening for an Data Analyst (Advanced) to support the Intelligence Sector. The Data Analyst examines data from multiple disparate sources with the goal of providing security and privacy insight. Designs and implements custom algorithms, workflow processes and layouts for complex, enterprise-scale data sets used for modeling, data mining, and research purposes."],
["Technical Project Manager",
"City of Alexandria",
"Alexandria, VA",
"Are you interested in utilizing your civil engineering experience and project management skills to deliver impactful and meaningful infrastructure solutions for the City of Alexandria, this is the position for you! The City's Department of Project Implementation is looking for a Technical Project Manager who will be responsible for managing projects throughout the design, planning, and construction phases. The employee will manage a wide variety municipal infrastructure projects that may include flood mitigation, stormwater and water quality improvements, sanitary sewer infrastructure, roadway improvements, transit projects, bicycle and pedestrian improvements and parks."]];

const stop = ['a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any', 'are', 'as', 'at', 'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but', 'by', 'could', 'did', 'do', 'does', 'doing', 'down', 'during', 'each', 'few', 'for', 'from', 'further', 'had', 'has', 'have', 'having', 'he', "he'd", "he'll", "he's", 'her', 'here', "here's", 'hers', 'herself', 'him', 'himself', 'his', 'how', "how's", 'i', "i'd", "i'll", "i'm", "i've", 'if', 'in', 'into', 'is', 'it', "it's", 'its', 'itself', "let's", 'me', 'more', 'most', 'my', 'myself', 'nor', 'of', 'on', 'once', 'only', 'or', 'other', 'ought', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'same', "she'd", "she'll", "she's", 'should', 'so', 'some', 'such', 'than', 'that', "that's", 'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there', "there's", 'these', 'they', "they'd", "they'll", "they're", "they've", 'this', 'those', 'through', 'to', 'too', 'under', 'until', 'up', 'very', 'was', 'we', "we'd", "we'll", "we're", "we've", 'were', 'what', "what's", 'when', "when's", 'where', "where's", 'which', 'while', 'who', "who's", 'whom', 'why', "why's", 'with', 'would', 'you', "you'd", "you'll", "you're", "you've", 'your', 'yours', 'yourself', 'yourselves'];
function search(){
  let jobsFinal = [];
  let information = document.getElementById("information").value;
  information = information.toLowerCase();
  let informationArray = information.split(" ");
  let informationArrayFinal = [];
  for (let i = 0; i < informationArray.length; i++){
    if (!stop.includes(informationArray[i])){
      informationArrayFinal.push(informationArray[i]);
    }
  }
  for (let i = 0; i < jobs.length; i++){

    let description = jobs[i][3].split(" ");
    let counter = 0;
    for (let j = 0; j < informationArrayFinal.length; j++){
      if (!description.includes(informationArrayFinal[j])){
        counter++;
      }
    }
    jobs[i].push(counter);
  }

  let maximum = 0;
  for (let i = 0; i < jobs.length; i++){
    if (jobs[i][4] > maximum){
      maximum = jobs[i][4];
    }
  }
  let end = false;
  for (let i = maximum; i >= 0; i--){
    if (end == true){
      break;
    }
    for (let j = 0; j < jobs.length; j++){
      if (jobs[j][4] == i){
        jobsFinal.push(jobs[j]);
        if (jobsFinal.length == 3){
          end = true;
          break;
        }
      }
    }
  }

  let results = document.getElementById("results-list");
  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }
  for (let i = 0; i < 3; i++) {
    let division = document.createElement("div");
    division.id = 'job' + i;
    division.classList.add('job');
    const h1 = document.createElement("h1");
    console.log(jobsFinal[i][0]);
    h1.appendChild(document.createTextNode(jobsFinal[i][0]));
    const small = document.createElement("small");
    small.appendChild(document.createTextNode(jobsFinal[i][1] + " | " + jobsFinal[i][2]));
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(jobsFinal[i][3]));
    division.appendChild(h1);
    division.appendChild(small);
    division.appendChild(p);
    division.appendChild(document.createElement("br"))
    results.appendChild(division);
  }
}