<template>
  <div class="main">
    <div class="header">
      <h1>Endless Love &#8729; Grace &#8729; Mercy</h1>
    </div>
    <h2>Our dream was to create a shelter which could take homeless individuals from transience to long term stability.</h2>
    <p>Our program is a 180-day commitment, focusing on the essential needs, resources, and tools necessary for life transformation. Our name reflects the abundant grace, love, and mercy provided by God to all of his children. To that end, we focus on the following:</p>
    <ul>
    <li><span>Intake</span>—We obtain demographic information, medical history, education information, and provide mental health evaluations. We focus on their goals during the program, provide them with a residence, and of course ensure a substance-free environment for the safety of all individuals involved with the program.</li>
    <li><span>Education and Advancement</span>—Training, in concert with a GED class, allows those who are in need to continue their studies. Social workers assist with Insurance paperwork and requirements, along with resume building and transportation to assist with job hunting and retaining said job.</li>
    <li><span>Needs and Necessities</span>—We have an onsite corner store for residents to obtain necessities, a barber and stylist for necessary grooming, a clothing store to assist with necessary needs and career requirements, laundry facilities, a business center, and a restaurant for dining to provide a sense of normalcy in resident’s lives. Counseling and mental health are a key component of our approach, as we want to encourage complete and whole wellness, as well as provide support for those who may be discouraged or considering giving up all hope.</li>
    <li><span>Child Well-Being</span>—Child care is key, ensuring that all parents can work and provide for their young ones and not have any restrictions in re-entry to the job market. Education, tutoring, and health care are of special emphasis for each and every child in our charge.</li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped lang="less">
.main {
  position: absolute;
  margin-top: 50px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.header {
  background-image: url('../assets/houston.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 140px;
}
li {
  line-height: 30px;
  margin-bottom: 30px;
  padding-right: 5%;
}
span {
  font-size: 1.5em;
  color: #008490;
  font-weight: 300;
}
h1 {
  color: white;
  font-size: 2em;
  line-height: 140px;
  text-align: center;
  text-shadow: 0px 2px 5px black;
}
p {
  margin-left: 5%;
  font-size: 1.2em;
  margin-right: 5%;
  color: #008490;
  font-style: italic;
  font-family: verdana;
}
h2 {
  padding-left: 5%;
  font-size: 1.5em;
  font-weight: bold;
  background: #ffb759;
  width: 100%;
  margin-top: 0px;
  color: #fff;
}
ul {
  line-height: 30px;
}
@media (min-width: 700px) {
  h1 {
    font-size: 3em;
  }
}
@media (min-width: 1000px) {
  .main {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    box-shadow: 0px 5px 8px black;
  }
  h1 {
    font-size: 3em;
  }
}
</style>
