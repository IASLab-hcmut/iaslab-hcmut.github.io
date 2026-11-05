/* =====================================================================
   SITE DATA — edit this file to update the website content.
   ===================================================================== */
window.LAB = {
  short: 'IAS', name: 'Intelligent Autonomous Systems Lab',
  tagline: 'Control, estimation and coordination for autonomous ground and aerial vehicles.',
  email: 'khanhhieutdh@gmail.com',
  address: 'Ho Chi Minh City University of Technology (HCMUT), VNU-HCM, Vietnam',
  scholar: 'https://scholar.google.com/citations?user=rVbKC80AAAAJ&hl=en',
};

/* ---------------- Research areas ---------------- */
window.RESEARCH = [
  { id: 'av', icon: 'car', art: 'av', title: 'Autonomous Vehicles',
    short: 'Robust planning and control for self-driving cars under uncertainty.',
    overview: 'Self-driving cars must make safe decisions in real time despite noisy sensors, model uncertainty and delayed or intermittent measurements. We develop control and estimation methods with provable guarantees that remain reliable on real vehicles.',
    topics: [
      ['Robust Path Tracking & Vehicle Control', 'Lateral and longitudinal controllers that remain stable under varying speed, road friction and payload, using T–S fuzzy and LPV models of vehicle dynamics.'],
      ['Sampled-Data & Event-Triggered Control', 'Controllers designed directly for digital implementation and in-vehicle networks, maximizing allowable sampling intervals while reducing communication load.'],
      ['Sensor Fusion & State Estimation', 'Fusion of LiDAR, camera and GNSS/IMU data for accurate localization and perception in challenging conditions.'],
    ] },
  { id: 'intersection', icon: 'cross', art: 'intersection', title: 'Unsignalized Intersection Traffic Networks',
    short: 'Connected vehicles negotiating intersections without traffic lights.',
    overview: 'Connected and automated vehicles can cross intersections without traffic lights — if they coordinate. We study how to make cooperative intersection management safe, efficient and scalable across networks of intersections.',
    topics: [
      ['Cooperative Intersection Management', 'V2V/V2I-based protocols that assign crossing order and trajectories to eliminate conflicts and minimize delay.'],
      ['Networked Control under Imperfect Communication', 'Guaranteeing safety with communication delays, packet loss and asynchronous sampling between vehicles and infrastructure.'],
      ['Mixed Traffic & Network-Level Optimization', 'Handling human-driven vehicles and coordinating multiple intersections to improve throughput of whole traffic networks.'],
    ] },
  { id: 'manipulation', icon: 'arm', art: 'manip', title: 'Aerial Manipulators',
    short: 'Drones equipped with robotic arms that grasp and interact.',
    overview: 'Mounting a robotic arm on a drone turns it from an observer into an actor — but the motion of the arm and the contact forces strongly disturb flight. We design controllers that let aerial manipulators fly and work at the same time.',
    topics: [
      ['Coupled Dynamics Modeling', 'Unified multirotor–manipulator models capturing center-of-mass shifts and reaction forces.'],
      ['Whole-Body Control & Disturbance Rejection', 'Robust controllers that stabilize flight during grasping, carrying and contact, with actuator-saturation awareness.'],
      ['Aerial Interaction Tasks', 'Contact-based inspection, aerial pick-and-place and object transport.'],
    ] },
  { id: 'multi-drone', icon: 'network', art: 'swarm', title: 'Multi-Drone Cooperation',
    short: 'Consensus, formation and cooperative missions for drone teams.',
    overview: 'Teams of drones can cover larger areas, carry heavier loads and tolerate failures — provided they cooperate reliably over limited communication links. We build on sampled-data consensus theory for multi-agent systems.',
    topics: [
      ['Sampled-Data Consensus & Formation Control', 'Delay-incorporating looped-functional methods that guarantee consensus with sparse, aperiodic communication.'],
      ['Event-Triggered Communication', 'Reducing bandwidth by transmitting only when necessary while preserving stability and performance.'],
      ['Cooperative Transport & Resilience', 'Distributed task allocation, collision avoidance and robustness to agent or link failures.'],
    ] },
  { id: 'bio-inspired', icon: 'wing', art: 'bio', title: 'Bio-Inspired Drones',
    short: 'Flapping-wing micro aerial vehicles that fly like insects and birds.',
    overview: 'Insects and birds fly with remarkable agility. Our flagship platform is the tailless flapping-wing micro aerial vehicle (FWMAV), which is highly nonlinear and inherently unstable without a tail.',
    topics: [
      ['T–S Fuzzy Modeling of FWMAVs', 'Takagi–Sugeno fuzzy models capturing the nonlinear longitudinal and lateral dynamics of tailless flapping-wing vehicles.'],
      ['Robust LMI-Based Fuzzy Control', 'Controller synthesis via linear matrix inequalities, benchmarked against PID baselines in MATLAB/Simulink.'],
      ['From Simulation to Flight', 'Attitude stabilization through wing-kinematics modulation, validated from simulation to flight experiments.'],
    ] },
];

/* ---------------- People ---------------- */
window.PROFESSOR = {
  name: 'Nguyen Khanh Hieu', native: '(Nguyễn Khánh Hiếu)', initials: 'KH', photo: '', /* e.g. 'assets/img/hieu.jpg' */
  title: 'Lecturer, Ho Chi Minh City University of Technology (HCMUT), VNU-HCM',
  email: 'khanhhieutdh@gmail.com', phone: '+82-10-4113-5083', office: 'Ho Chi Minh City University of Technology (HCMUT)',
  links: [['Google Scholar', 'https://scholar.google.com/citations?user=rVbKC80AAAAJ&hl=en']], /* add more, e.g. ['CV', 'assets/cv.pdf'] */
  interests: ['Sampled-data control systems', 'Takagi–Sugeno fuzzy systems', 'Markovian jump systems', 'Multi-agent systems & consensus', 'Flapping-wing micro aerial vehicles', 'Power electronics control (DAB converters)'],
  education: [
    ['Ph.D.', 'Feb 2023', 'Electrical Engineering (Control Theory), University of Ulsan', 'Embedded Control Systems Laboratory'],
    ['B.S.', 'Aug 2018', 'Electrical Engineering (Control Engineering & Automation), Da Nang University of Science and Technology', ''],
  ],
  employment: [
    ['Jan. 2027 ~ Present', 'Lecturer, Ho Chi Minh City University of Technology (HCMUT), VNU-HCM'],
    ['Dec. 2025 ~ Dec. 2026', 'Research Professor, Chungnam National University'],
    ['Mar. 2024 ~ Nov. 2025', 'Research Professor, Sejong University'],
    ['Mar. 2023 ~ Feb. 2024', 'Post-doctoral Researcher, University of Ulsan'],
    ['Sep. 2018 ~ Feb. 2023', 'Doctoral Researcher, University of Ulsan'],
  ],
};
/* Members: { name, role: 'Ph.D. Student' | 'M.S. Student' | 'Intern', area, email, photo } */
window.MEMBERS = [];
/* Alumni: { name, degree, year, now } */
window.ALUMNI = [];

/* ---------------- Projects ---------------- */
/* status: 'ongoing' | 'completed' */
window.PROJECTS = [];

/* ---------------- Publications ----------------
   type: 'ij' (Int. Journal) | 'ic' (Int. Conference) | 'dj' (Dom. Journal) | 'dc' (Dom. Conference)
   link: DOI or paper URL (optional) */
window.PUBS = [
  { y: 2026, type: 'ij', title: 'Robust Controller Design for Flapping-Wing Micro-aerial Vehicles Based on a T–S Fuzzy Approach', authors: 'K. H. Nguyen, H. Park, I. Kim, S. Kim', venue: 'International Journal of Control, Automation, and Systems' },
  { y: 2025, type: 'ij', title: 'Improved sampled-data consensus control for multi-agent systems via delay-incorporating looped-functional', authors: 'K. H. Nguyen, S. H. Kim', venue: 'Mathematics, 13(2), 299' },
  { y: 2025, type: 'dj', title: 'Sampled-data control of dual-active bridge DC-DC converters with time delay', authors: 'K. H. Nguyen, T. D. Le', venue: 'The University of Danang – Journal of Science and Technology, pp. 105–109' },
  { y: 2024, type: 'ij', title: 'Saturated sampled-data control of DAB DC–DC converters via LPV approach with consideration of mismatched time-varying parameters', authors: 'K. H. Nguyen, S. H. Kim', venue: 'IEEE Transactions on Circuits and Systems I: Regular Papers, 72(1), 408–419' },
  { y: 2024, type: 'ij', title: 'Improved stability and stabilization criteria for multi-rate sampled-data control systems via novel delay-dependent states', authors: 'K. H. Nguyen, S. H. Kim', venue: 'Mathematics and Computers in Simulation, 221, 197–209' },
  { y: 2024, type: 'ij', title: 'Improvement of sampled-data-based stabilization and dissipativity conditions for T–S fuzzy systems under network communication environment', authors: 'K. H. Nguyen, S. H. Kim', venue: 'Chaos, Solitons & Fractals, 178, 114381' },
  { y: 2024, type: 'ij', title: 'Improved stability and stabilization criteria of sampled-data control systems based on an enhanced looped-functional', authors: 'K. H. Nguyen, S. H. Kim', venue: 'Mathematics and Computers in Simulation, 215, 69–81' },
  { y: 2023, type: 'ij', title: 'Peak-to-peak stabilization of sampled-data systems subject to actuator saturation and its practical application to an inverted pendulum', authors: 'K. H. Nguyen, S. H. Kim', venue: 'Mathematics, 11(22), 4592' },
  { y: 2022, type: 'ij', title: 'Improved sampled-data control design of T–S fuzzy systems against mismatched fuzzy-basis functions', authors: 'K. H. Nguyen, S. H. Kim', venue: 'Applied Mathematics and Computation, 428, 127150' },
  { y: 2022, type: 'ij', title: 'Event-triggered non-PDC filter design of fuzzy Markovian jump systems under mismatch phenomena', authors: 'K. H. Nguyen, S. H. Kim', venue: 'Mathematics, 10(16), 2917' },
  { y: 2022, type: 'ij', title: 'Improved dissipativity-based sampled-data control synthesis of nonhomogeneous Markovian jump fuzzy systems against mismatched fuzzy-basis functions', authors: 'K. H. Nguyen, S. H. Kim', venue: 'Information Sciences, 607, 1439–1464' },
  { y: 2022, type: 'ij', title: 'Asynchronous mode-dependent sampled-data control of non-homogeneous Markovian jump linear systems via an improved looped-functional approach', authors: 'K. H. Nguyen, P. G. Park, S. H. Kim', venue: 'IET Control Theory & Applications, 16(11), 1110–1126' },
  { y: 2021, type: 'ij', title: 'Improved stabilization criteria for sampled-data control systems via a less conservative looped-functional method', authors: 'K. H. Nguyen, S. H. Kim', venue: 'IEEE Access, 9, 161999–162005' },
  { y: 2021, type: 'dc', title: 'Asynchronous sampled-data control design of homogeneous Markovian jump systems', authors: 'K. H. Nguyen, S. H. Kim', venue: 'ICROS Annual Conference (제어로봇시스템학회 국내학술대회), pp. 501–502' },
  { y: 2020, type: 'ic', title: 'On sampled-data control synthesis of Markovian jump systems with actuator faults', authors: 'K. H. Nguyen, S. H. Kim', venue: '20th International Conference on Control, Automation and Systems (ICCAS), pp. 678–682' },
  { y: 2020, type: 'ij', title: 'Observer-based control design of semi-Markovian jump systems with uncertain probability intensities and mode-transition-dependent sojourn-time distribution', authors: 'K. H. Nguyen, S. H. Kim', venue: 'Applied Mathematics and Computation, 372, 124968' },
  { y: 2019, type: 'ic', title: 'Output-feedback control design of semi-Markovian jump systems with incomplete probability description', authors: 'K. H. Nguyen, N. H. A. Nguyen, T. B. Nguyen, S. H. Kim', venue: '19th International Conference on Control, Automation and Systems (ICCAS), pp. 896–899' },
];

/* ---------------- Board ----------------
   board: 'news' | 'equipment'. body: HTML allowed. Newest last number = highest. */
window.POSTS = [
  { board: 'news', title: 'IAS Lab opens at HCMUT in January 2027', author: 'Admin', date: '2026-11-05',
    body: '<p>Dr. Nguyen Khanh Hieu joins Ho Chi Minh City University of Technology (HCMUT), VNU-HCM as a lecturer on 1 January 2027 and starts the Intelligent Autonomous Systems Lab. Students interested in joining can find details on the <a href="contact.html">Contact</a> page.</p>' },
];
