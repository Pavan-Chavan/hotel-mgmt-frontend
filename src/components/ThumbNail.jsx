import React from 'react'
export default function ThumbNail({msg,src}) {
	const getImgUrl = () => {
		const default_url = "assets/img/hero/movies.png";
		return src ? `url(${src})` : `url(${default_url})`
	}
  return (
	<section id="start">
		<div class="slider-area ">
			<div class="single-slider section-overly slider-height2 d-flex align-items-center" style={{"backgroundImage": `${getImgUrl()}`}}>
				<div class="container">
					<div className="">
						<div class="col-xl-12">
							<div class="hero-cap text-center">
								<h2>{msg}</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}
