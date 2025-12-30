import Image1 from './../assets/girl.jpg'
import Image2 from './../assets/student.jpg'
import Banner from "../Components/Banner"
function About() {
  
const text="We bring people together from all walks of life to engage in meaningful discussions & build lasting connections."
  return (
    <>
    <Banner title="About" text={text}/>
    <section className="container py-5">
     <div className="row">
      <div className="col-lg-6"><img src={Image1} alt="" height={350}/></div>
      <div className="col-lg-6">
<p className='py-3'>Welcome to our vibrant online community where diverse voices come together to share their
 passions and insights. We're a platform dedicated to fostering knowledge, inspiring creativity,
  and sparking conversations on a wide range of topics.</p>

<h3 className='py-3'>Our Mission</h3>
<h5 className='py-2'>Empower Voices</h5>
<p>We provide a space for individuals to express themselves freely and share their unique perspectives.</p>
</div>
</div>


<div className='row py-5'>
  <div className='col-6 pt-4'>
    <h3 className='py-3'>Ignite Curiosity</h3>
    <p>We encourage exploration and learning by offering a diverse range of articles on various subjects</p>
    <h3 className='py-3'>Connect Communities</h3>
    <p>We bring people together from all walks of life to engage in meaningful discussions & build lasting connections.</p>
  </div>
  <div className='col-6 py-3'><img src={Image2} alt="" height={350} /></div>
</div>

</section>
    </>
  )
}

export default About