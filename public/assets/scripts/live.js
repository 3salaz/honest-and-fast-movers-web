$(document).ready(function () {
  let
    data = [
      {
        id: "1",
        fullTitle: "Made in Pittsburg Panel",
        shortTitle: "Made In Pittsburg Panel",
        videoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/videos/Manufacturing+Week+2020+Contra+Costa+County/10am_MadeinPittsburgPanel.mp4",
        catagory: "Manufacturing Week 2020 Contra Costa County",
        date: "09-28-2020",
        time: "10:30-11:00am",
        startTime: "1899-12-30T18:30:00.000Z",
        endTime: "1899-12-30T19:00:00.000Z",
        facilitator: "Walter Di Mantova, Earn & Learn",
        "presentator/panalist":
          "Wolfgang Croskie, CEO of Pittsburg Chamber of Commerce",
        description:
          "Gina Del Carlo Founding Director of Earn & Learn will formally Kick-off Manufacturing Week. Come hear how the City of Pittsburg’s extensive history of industrial development and solid and sustainable base of manufacturing employers can benefit you. Do you want to become part of their skilled well-paid workforce of the future? The Chamber of Commerce is one of the entities dedicated to helping build out this pipeline and infrastructure, and he and a few of his members will be on hand to explain what you can do to tap into this great economic resource in your own backyard!",
        logoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/images/company-logos/Earn-And-Learn-Logo.png",
        section: "1",
        organization: null,
      },
      {
        id: "2",
        fullTitle:
          "Community College Manufacturing Certificate & Degree Pathways",
        shortTitle:
          "Community College Manufacturing Certificate & Degree Pathways",
        videoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/videos/Manufacturing+Week+2020+Contra+Costa+County/12pm_CertificatAndDegreePathways.mp4",
        catagory: "Manufacturing Week 2020 Contra Costa County",
        date: "09-28-2020",
        time: "12:00-1:00pm",
        startTime: "1899-12-30T08:00:00.000Z",
        endTime: "1899-12-30T21:00:00.000Z",
        facilitator:
          "Tara Sanders Manager, Workforce & Economic Development, Contra Costa Community College District, Tsanders@4cd.edu",
        "presentator/panalist":
          "Camille Santana, Counselor LMC - Csantana@losmedanos.edu, Jeffrey George Smith, Ed.D. Program Lead for Industrial Design & Advanced Manufacturing ProgramsCCC Amber Khan, adin@contracosta.edu, counselor, and Demetria Lawrence, Transition Specialist ,DELawrence@contracosta.edu",
        description:
          "There are many different pathways in manufacturing, electrical, welding and more! Come learn about the programs at the three Contra Costa County Community College colleges and discover a road to your future.",
        logoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/images/company-logos/Contra-Costa-College.JPG",
        section: "1",
        organization: null,
      },
      {
        id: "3",
        fullTitle: "Why Manufacturing Panel",
        shortTitle: "Why Manufacturing Panel",
        videoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/videos/Manufacturing+Week+2020+Contra+Costa+County/2pm_MarinezFacilityTour.mp4",
        catagory: "Manufacturing Week 2020 Contra Costa County",
        date: "09-28-2020",
        time: "2:00pm-3:00pm",
        startTime: "1899-12-30T22:00:00.000Z",
        endTime: "1899-12-30T23:00:00.000Z",
        facilitator: "Bill Bankhead, Los Medanos College",
        "presentator/panalist":
          "Nick Plurowski from Martinez Refining Company, CCC,  DVC, Jeffeey Smith LMC Camile Santana, Bill Bankhead, LMC, Francis Reyes, CCC",
        description:
          "Nick Plurkowski, USW Healthy & Safety Representative with the Martinez Refinery and LMC alum will provide us with a factory tour of the Martinez Refinery. Following the tour a panel will discuss why a career in manufacturing is a great pathway. Hear from community college alum, faculty and employers.",
        logoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/images/company-logos/Contra-Costa-College.JPG",
        section: "1",
        organization: null,
      },
      {
        id: "4",
        fullTitle:
          "Benchmark Electronics Precision Technologies- Electrode Plate Manufacturing Process",
        shortTitle: "Electrode Plate Manufacturing Process",
        videoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/videos/Manufacturing+Week+2020+Contra+Costa+County/10am-BenchmarkElectronics.mp4",
        catagory: "Manufacturing Week 2020 Contra Costa County",
        date: "09-29-2020",
        time: "10:30am-11:30pm",
        startTime: "1899-12-30T18:30:00.000Z",
        endTime: "1899-12-30T19:30:00.000Z",
        facilitator:
          "Jeffrey George Smith, Ed.D. Program Lead for Industrial Design & Advanced Manufacturing Programs",
        "presentator/panalist":
          "Christy Holme-Lean - Champion, Dollar Robinson - Welder, Jesse Gonzalez-Welding - Lead, Jessie Payne-CNC - Machinist, Nate Siters-CNC - Programmer, Alan Bocanegra-CNC - Machinist, Cristobal Moreno-Guzman-Manufacturing - Technician, Angelo Aquino-Ygnacio Valley High - Intern Adrian Whorton-Ygnacio Valley High - Intern Kayla-Marie Guffey - CNC Machinist David Hill-Mfg. - Engineer Kai Workman-Mfg. - Engineer Greg King - Engineering Manager Juanita Camacho - HR Manager Brooks Hurd -Director of Operations",
        description:
          "Benchmark Precision Technology presents the manufacturing of a high precision component used in the Semiconductor Manufacturing Industry. The Electrode Plate is a challenging part utilizing the talent and skill set of all the manufacturing teams. Benchmark shares a video presentation of what “Being the Best” means to us. Team members are introduced live as they present a brief video on their specific step in the manufacturing of the Electrode Plate. Live Q&A will follow for 2-3 minutes after each video.",
        logoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/images/company-logos/Benchmark-Electronics-Precision-Tech.png",
        section: "1",
        organization: null,
      },
      {
        id: "5",
        fullTitle: "My Path Through Classes To My Career",
        shortTitle: "My Path Through Classes To My Career",
        videoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/videos/Manufacturing+Week+2020+Contra+Costa+County/12pm_DailyGrind.mp4",
        catagory: "Manufacturing Week 2020 Contra Costa County",
        date: "09-29-2020",
        time: "12:00pm-1:00pm",
        startTime: "1899-12-30T20:00:00.000Z",
        endTime: "1899-12-30T21:00:00.000Z",
        facilitator:
          "Tara Sanders with the Contra Costa Community College District",
        "presentator/panalist":
          "Travis Ike - Los Medanos College Alumni, TravisAke16@gmail.com - working at PBF Energy Hogan Eagler - Current Information Technology student, Contra Costa College, heagler814@insite.4cd.edu",
        description:
          "Get a snapshot of what A Day in the Life is like for a student in the Contra Costa Community College’s Manufacturing Pathway Programs. Learn about balancing school, work, social life, family and how to get from the coursework to the career.",
        logoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/images/company-logos/Los-Medanos-College.JPG",
        section: "1",
        organization: null,
      },
      {
        id: "6",
        fullTitle:
          "Hiring and Careers at Bishop-Wisecarver : A Day in the Life of a Manufacturing Enginee",
        shortTitle: "A Day in the Life of a Manufacturing Engineer",
        videoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/videos/Manufacturing+Week+2020+Contra+Costa+County/2m_BishopWisecarver.mp4",
        catagory: "Manufacturing Week 2020 Contra Costa County",
        date: "09-29-2020",
        time: "2:00pm-3:00pm",
        startTime: "1899-12-30T22:00:00.000Z",
        endTime: "1899-12-30T23:00:00.000Z",
        facilitator: "Anna Ramos, Mt Diablo Unified School District",
        "presentator/panalist": "Alex Marques, Associate Product Manager",
        description:
          "Hear from Alex Marques, a young engineer, about his job at Bishop-Wisecarver, a family and woman-owned manufacturing company located in Pittsburg for 70 years. Alex will highlight his education path and career choices, the other types of jobs available at Bishop-Wisecarver, and how to set yourself up for a successful career in manufacturing. Come find out what Linear & Rotary Motion Systems do, why they are essential to your everyday life, and how you can help make a difference in the world by working in this industry.",
        logoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/images/company-logos/Bishop-Wisecarver-Group-Logo.jpg",
        section: "1",
        organization: null,
      },
      {
        id: "7",
        fullTitle: "Fresenius Medical Care Concord Manufacturing Overview",
        shortTitle: "Fresenius Medical Care Concord Manufacturing Overview",
        videoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/videos/Manufacturing+Week+2020+Contra+Costa+County/10am_Fresenius.mp4",
        catagory: "Manufacturing Week 2020 Contra Costa County",
        date: "09-30-2020",
        time: "10:30am-11:30am",
        startTime: "1899-12-30T18:30:00.000Z",
        endTime: "1899-12-30T19:30:00.000Z",
        facilitator: "Ariel Kirshenbaum",
        "presentator/panalist":
          "Jim Loendorf Sr. Director, Logistics & Procurement / Tim Schwartz Director, Production",
        description:
          "At Fresenius, we design, manufacture, test, package, and ship dialysis machines at our Concord facility. Participants will get an overall understanding of dialysis and our manufacturing process. The two main production lines are Hemodialysis and Peritoneal dialysis. There are two main types of dialysis. Both types filter your blood to rid your body of harmful wastes, extra salt, and water. Hemodialysis uses a machine. It is sometimes called an artificial kidney. You usually go to a special clinic for treatments several times a week. Peritoneal dialysis uses the lining of your abdomen, called the peritoneal membrane, to filter your blood.",
        logoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/images/company-logos/fresenius-medical-care-logo.png",
        section: "1",
        organization: null,
      },
      {
        id: "8",
        fullTitle: "Ask Me Anything W/ Galaxy Desserts CEO",
        shortTitle: "Ask Me Anything W/ Galaxy Desserts CEO",
        videoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/videos/Manufacturing+Week+2020+Contra+Costa+County/12am_GalaxyDessert.mp4",
        catagory: "Manufacturing Week 2020 Contra Costa County",
        date: "09-30-2020",
        time: "12:00pm-1:00pm",
        startTime: "1899-12-30T20:00:00.000Z",
        endTime: "1899-12-30T21:00:00.000Z",
        facilitator:
          "CCC Culinary Chef Nader is confirmed and knows the CEO as he sit on CCC advisory board ,",
        "presentator/panalist": "Chef Nader",
        description:
          "Interact with the CEO of a company that has prepared world-renowned fine french-inspired desserts right here in your own backyard for over 20 years. Known for their unique ability to craft, bake, freeze and package their products in one location, you can learn how this integrated system works efficiently by utilizing technology and a highly skilled, diverse and enthusiastic workforce. Chef Charon will be joined by a previous marketing intern who will share their experience as a marketing intern.Come learn what it takes to become part of this team!",
        logoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/images/company-logos/Bishop-Wisecarver-Group-Logo.jpg",
        section: "1",
        organization: null,
      },
      {
        id: "9",
        fullTitle: "Virtual Cafe W/ AMBayArea CEO",
        shortTitle: "Virtual Cafe W/ AMBayArea CEO",
        videoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/videos/Manufacturing+Week+2020+Contra+Costa+County/2pm_AMBayArea.mp4",
        catagory: "Manufacturing Week 2020 Contra Costa County",
        date: "09-30-2020",
        time: "2:00pm-3:00pm",
        startTime: "1899-12-30T22:00:00.000Z",
        endTime: "1899-12-30T23:00:00.000Z",
        facilitator: "Walter Di Mantova from Earn & Learn",
        "presentator/panalist": "Claudia Wentworth, Director AMBayArea",
        description:
          "We have all heard how manufacturing has been and could continue to be the backbone to this country’s economy growing and thriving into the future. You would be hard-pressed to find two people more tuned into this issue than Walt di Mantova and Claudia Wentworth. With decades of experience each, they will provide you with unique perspective and insight into how you can become part of this industry now and into the future. How will robotics and other automation trends and innovations impact the way companies hire and find their talent? They will provide this critical knowledge to prepare you for your path to a sustainable career in manufacturing.",
        logoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/images/company-logos/AM-Bay-Area.png",
        section: "1",
        organization: null,
      },
      {
        id: "10",
        fullTitle: "Corteva Agriscience Company Tour",
        shortTitle: "Corteva Agriscience Company Tour",
        videoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/videos/Manufacturing+Week+2020+Contra+Costa+County/10am_Corteva.mp4",
        catagory: "Manufacturing Week 2020 Contra Costa County",
        date: "10-01-2020",
        time: "10:30am-11:30am",
        startTime: "1899-12-30T18:30:00.000Z",
        endTime: "1899-12-30T19:30:00.000Z",
        facilitator: "Mark Martin",
        "presentator/panalist":
          "Marisa Ortiz, Public Relations with Corteva Agriscience, Nicholas Leber, Ouiza Djenani,Sr Production Technologist Operator Apprentice nicholas.leber@corteva.com, ouiza.djenani@corteva.com Ivonne Ferrer Lassala Carolina Salazar, Analytical Specialist Production Coordinator ivonne.ferrer-lassala@corteva.com csalazar@corteva.com",
        description:
          "Come see a tour of Corteva's Pittsburg facility and learn how innovation has never been more important. Learn how we are answering the call. Protecting yields, land and the worlds land supply. Learn what it takes. Helping farmers. Explore our products and learn who Corteva is.",
        logoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/images/company-logos/Corteva-Agriscience.jpeg",
        section: "1",
        organization: null,
      },
      {
        id: "11",
        fullTitle: "Ask Me Anything W/ Ramar Foods International CEO",
        shortTitle: "Ask Me Anything W/ Ramar Foods International CEO",
        videoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/videos/Manufacturing+Week+2020+Contra+Costa+County/12pm_RamarFood.mp4",
        catagory: "Manufacturing Week 2020 Contra Costa County",
        date: "10-01-2020",
        time: "12:00pm-12:30pm",
        startTime: "1899-12-30T20:00:00.000Z",
        endTime: "1899-12-30T20:30:00.000Z",
        facilitator:
          "Tara, manager Workforce & Economic Development, Contra Costa Community College District Tsanders@4cd.edu",
        "presentator/panalist":
          "Susie Quesada, CEO of Ramar Foods International",
        description:
          "Come and hear from CEO Susie Quesdada what it's like to be a CEO. Hear about her career journey, what advice she would give to her younger self. And how she navigates the business world as a Filipina Woman leader who is an advocate for female leadership in all industries.",
        logoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/images/company-logos/Ramar-Food-International.jpg",
        section: "1",
        organization: null,
      },
      {
        id: "12",
        fullTitle: "Tour Local College Manufacturing Labs (4CD)",
        shortTitle: "Tour Local College Manufacturing Labs (4CD)",
        videoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/videos/Manufacturing+Week+2020+Contra+Costa+County/2pm_CollegeManuLabs.mp4",
        catagory: "Manufacturing Week 2020 Contra Costa County",
        date: "10-01-2020",
        time: "2:00-3:00pm",
        startTime: "1899-12-30T22:00:00.000Z",
        endTime: "1899-12-30T23:00:00.000Z",
        facilitator: "Drew Douglass Confirmed",
        "presentator/panalist":
          "LMC - Micheal Keane, Process Technology Instructor, LMC and DVC TBA 9/23/2020 Laura Lozano, Automotive Repair Faculty, CCC, Lozano, LLozano@contracosta.edu DVC Jeffrey George Smith, Ed.D. Program Lead for Industrial Design & Advanced Manufacturing Programs",
        description:
          "Training for a career in manufacturing is not only in the classroom - it’s working live in the lab and making it all happen. Come check out a few labs at the community colleges and see where your future career could start.",
        logoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/images/company-logos/Earn-And-Learn-Logo.png",
        section: "1",
        organization: null,
      },
      {
        id: "13",
        fullTitle: "Virtual Manufacturing Day with Builder Lennar Homes",
        shortTitle: "Virtual Manufacturing Day with Builder Lennar Homes",
        videoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/videos/Manufacturing+Week+2020+Contra+Costa+County/10am-PWB.mp4",
        catagory: "Manufacturing Week 2020 Contra Costa County",
        date: "10-02-2020",
        time: "10:00-12:30pm",
        startTime: "1899-12-30T18:00:00.000Z",
        endTime: "1899-12-30T20:30:00.000Z",
        facilitator: "Ariel Kirshenbaum",
        "presentator/panalist":
          "Mitu Walia, Director of Architectural Design for Klein Financial Corporation",
        description:
          "Every year, the PWB Council in their Education Outreach efforts, puts together a Job Shadow day or Manufacturing Day where high school students visit a builder jobsite and learn about the different trades in the industry. This year, as a result of the pandemic, the physical Job Shadow Day was canceled but we decided to make our event Virtual to continue with the Education Outreach efforts and mentor High school students.",
        logoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/images/company-logos/Earn-And-Learn-Logo.png",
        section: "1",
        organization: null,
      },
      {
        id: null,
        fullTitle: null,
        shortTitle: null,
        videoSrc:
          "https://earnandlearn.s3-us-west-1.amazonaws.com/videos/Manufacturing+Week+2020+Contra+Costa+County/12am_DegreeProgram.mp4",
        catagory: null,
        date: null,
        time: null,
        startTime: null,
        endTime: null,
        facilitator: null,
        "presentator/panalist": null,
        description: null,
        logoSrc: null,
        section: null,
        organization: null,
      },
    ],
    videoFullTitle = document.getElementById("videoFullTitle"),
    videoShortTitle = document.getElementById("videoShortTitle"),
    videoDate = document.getElementById("videoDate"),
    videoTimeFrame = document.getElementById("videoTimeFrame"),
    videoFacilitator = document.getElementById("videoFacilitator"),
    videoPanelist = document.getElementById("videoPanelist"),
    videoDescription = document.getElementById("videoDescription"),
    videoPlayerItem = document.getElementById("videoPlayer"),
    featuredLogo = document.getElementById("featuredLogo"),
    info = document.getElementById("info");

    
    let videoPlayer = document.getElementById("video__player"),
    videoFullScreen = document.getElementById("video__fullScreen"),
    videoPlay = document.getElementById("video__play"),
    videoPause = document.getElementById("video__pause"),
    videoEnd = document.getElementById("video__end"),
    videoStart = document.getElementById("video__start"),
    videoTime = document.getElementById("video__duration"),
    videoTrack = document.getElementById("video__track"),
    videoSound = document.getElementById("video__sound"),
    soundTrack = document.getElementById("sound__track"),
    videoSoundIcon = videoSound.querySelectorAll("use")[0],
    videoDuration = 0,
    actualMoment = 0,
    updateVolume;

    
  let openVideoLib = (e) => {
      let a = e.toString();
      videoList.innerHTML = "";
      for (let e = 0; e < data.length; e++)
        if (data[e].section === a) {
          let a = document.createElement("LI");
          videoList.appendChild(a),
            (videoList.style.display = "block"),
            (a.className = "video-link"),
            (a.innerHTML = data[e].shortTitle),
            a.addEventListener("click", () => {
              info.classList.remove("hide"),
                (featuredLogo.src = data[e].logoSrc),
                (videoPlayerItem.style.display = "flex"),
                (videoPlayer.src = data[e].videoSrc),
                (videoShortTitle.innerHTML = data[e].shortTitle),
                (videoFullTitle.innerHTML = data[e].fullTitle);
              let a = data[e].date;
              (videoDate.innerHTML = a),
                (videoTimeFrame.innerHTML = data[e].time),
                (videoPanelist.innerHTML = data[e]["presentator/panalist"]),
                (videoDescription.innerHTML = data[e].description);
            });
        }
  };
  
});
