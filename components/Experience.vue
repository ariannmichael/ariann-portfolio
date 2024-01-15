<template>
 <div class="wrapper">
  <b-row id="experience-title" class="experience-title">
   <h1 class="title">EXPERIENCE</h1>
  </b-row>
  <b-row id="experience-section" class="experience-section">
   <b-card no-body class="card">
    <b-tabs vertical nav-class="tabs-nav" nav-wrapper-class="w-40">
      <b-tab title="Fullstack Labs" active>
       <b-card-text>
        <div>
         <h2>Software Engineer
          <p class="p-at">&nbsp;@ Fullstack Labs</p>
         </h2>
         <p class="experience-text">
          I worked as a contractor for:
          <br><br>
          <ul>
           <li>
            Godaddy as an Eng - Software Development III, with the account team, developing and maintaining ReactJS and NextJS projects on payment methods, subscriptions, receipts, and renewals, all of them in a mono repo.
            For these projects, I have developed Jest and Cypress tests to give coverage to the code and to integrate everything in the infrastructure, I used AWS, Github actions, and Jenkins.
           </li>
          </ul>
         </p>
         <h5>
          Skills: NextJs · UI · Front-end · Back-end · React.js · CI/CD · Jenkins · Cypress · AWS
         </h5>
        </div>
       </b-card-text>
      </b-tab>
      <b-tab title="Afya">
       <b-card-text>
        <div>
         <h2>Mid-Level Developer 
          <p class="p-at">&nbsp;@ Afya</p>
         </h2>
         <p class="experience-text">
          I worked on maintaining and implementing new features of web applications:
          <br><br>
          <ul>
           <li>
            The biggest medical school platform in Brazil, preparing physicians through all the courses, even on
            Ph.D. - Working on the audiovisual team, creating the new platform to play lives, recorded classes and
            realtime chat - using ReactJS, HTML5, CSS3, NodeJS, NoSQL, MongoDB, GraphQL,
            WebSockets and RESTfull HTTP Applications
           </li>
          </ul>
         </p>
         <h5>
          Skills: GraphQL · Real Time Streaming · Chat · Back-end · UI · Front-end · React.js · Node.js · MongoDB · AWS
         </h5>
        </div>
       </b-card-text>
      </b-tab>
      <b-tab title="OpenMined">
       <b-card-text>
        <div>
         <h2>Core Developer 
         <p class="p-at">&nbsp;@ OpenMined</p>
         </h2>
         <p class="experience-text">
          I worked on open-source projects with the teams:
          <br><br>
          <ul>
           <li>PySyft - Developing and fixing bugs for data-centric federated learning with differential privacy.</li>
           <br>
           <li>PyGrid - Creating a user interface, allowing for a more granular permission system at both the user and tensor levels.</li>
          </ul>
         </p>
         <h5>
          Skills: Artificial Intelligence (AI) · PyTorch · NextJs · GraphQL · JavaScript · Python 
         </h5>
        </div>
       </b-card-text>
      </b-tab>
      <b-tab title="Stefanini">
       <b-card-text>
        <div>
         <h2>Software Developer 
          <p class="p-at">&nbsp;@ Stefanini</p>
         </h2>
         <p class="experience-text">
          I worked on building and maintaining the following:
          <br><br>
          <ul>
           <li>A website for Stefanini's employees to mentor one another, choosing the topic and schedule based on the mentor availability - using ReactJS, React Native, HTML5, CSS3, Java, Spring, MySQL and
          RESTfull HTTP Applications</li><br>
           <li>A menu on a website and app to select and order from Almanara’s restaurants,
          without social contact - using ReactJS, React Native, HTML5, CSS3, NodeJS, MySQL and RESTfull
          HTTP Applications</li><br>
           <li>Assisted the customers whenever needed with their questions and suggestions</li>
          </ul>
         </p>
         <h5>
          Skills: Back-end · Mobile · UI · Front-end · React.js · Java · Spring Framework
         </h5>
        </div>
       </b-card-text>
      </b-tab>
      <b-tab title="Proj4me">
       <b-card-text>
        <div>
         <h2>Software Developer Internship 
          <p class="p-at">&nbsp;@ Proj4me</p>
         </h2>
         <p class="experience-text">
          I worked on building and maintaining the following:
          <br><br>
          <ul>
           <li>SASS to manage tasks, projects, and teams, implementing Agile principles such as scrum, kanban and
          sprints - using JavaEE, MySQL, HTML5, CSS3, Angular2+, RESTfull HTTP Applications and Agile
          Development process;</li>
          </ul>
         </p>
         <h5>
          Skills: Angular · UI · Front-end · Back-end · Java · MySQL
         </h5>
        </div>
       </b-card-text>
      </b-tab>
    </b-tabs>
   </b-card>
  </b-row>
 </div>
</template>

<style scoped>
.wrapper {
 margin-top: 10rem;
}

.experience-title {
 border-bottom: 1px solid var(--color-text-white);
}

.experience-section {
 padding-top: 3.2rem;
 padding-bottom: 2.2rem;
}

.experience-text {
 font-family: 'Playfair Display';
 font-weight: 400;
 font-size: 1.6rem;
 line-height: 2.6rem;
 color: var(--color-text-light);
 padding-right: 5rem;
}

.card {
 width: 100vw;
 height: 50vh;
 background-color: var(--vt-c-black);
 border: 1px var(--vt-c-white) solid;
 border-radius: 0 !important;
}

.card-text {
 padding: 1rem;
}

:deep(.nav-tabs .nav-link) {
 height: 5.4rem;
 border-radius: 0 !important;
 font-family: Montserrat;
 font-size: 20px !important;
 font-style: normal !important;
 font-weight: 900 !important;
 line-height: 17px !important; /* 85% */
 letter-spacing: 0.6px !important;
 padding-top: 2rem;
}

:deep(.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link) {
 border-radius: 0 !important;
 color: var(--color-green);
 background-color: var(--vt-c-black);
}

h2 {
 color: var(--vt-c-soft);
 font-family: Montserrat;
 font-size: 2.5rem;
 font-style: normal;
 font-weight: 700;
 line-height: 3.5rem;
 letter-spacing: -0.15rem;
 display: flex;
}

.p-at {
 color: var(--color-green);
 font-family: 'Montserrat';
 font-size: 2.5rem;
 font-style: normal;
 font-weight: 700;
 line-height: 3.5rem;
 letter-spacing: -0.15rem;
}

.experience-text {
 color: var(--vt-c-mute);
 font-family: 'Playfair Display';
 font-size: 1.563rem;
 font-style: normal;
 font-weight: 400;
 line-height: 1.438rem;
 letter-spacing: 0.047rem;
}

h5 {
 font-family: 'Playfair Display';
 font-weight: 700;
 font-size: 1.2rem;
 line-height: 3.5rem;
 letter-spacing: 0.09em;
 color: var(--color-text-white);
 padding-top: 1.4rem;
}
</style>