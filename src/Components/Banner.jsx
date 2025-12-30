function Banner({text,title}) {


  return (
    <>
<section className="bg-banner">
<div className="banner-layer">
<h2 className="pe-5">{title}</h2>
<p className="pe-5">{text} </p>
</div>
</section>

    </>
  )
}

export default Banner