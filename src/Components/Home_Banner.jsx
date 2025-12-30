function Home_Banner({text,title}) {


  return (
    <>
<section className="bg-banner2">
<div className="banner-layer">
<h2 className="pe-5">{title}</h2>
<p className="pe-5">{text} </p>
</div>
</section>

    </>
  )
}

export default Home_Banner