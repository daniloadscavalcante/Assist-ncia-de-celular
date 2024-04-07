import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/slider.css";
export default function slider(){
    var settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
              breakpoint: 768,
              settings: {
              slidesToShow: 1,
              slidesToScroll: 1                
              }
          }
        ]      
    };
    return(
      <section className="depoimentos">
        <h2>Depoimentos</h2>
        <Slider {...settings}>
      <div className='blocoDepo'>
        <span className='blocoDepoUser'>danilo1</span>
        <p className='depoimento'>Gostei da localização. Realizei um processo de devolução e ressarcimento de valores, não tive nenhum problema ou empecilho. Recomendo. </p>
      </div>
      <div className='blocoDepo'>
        <span className='blocoDepoUser'>danilo2</span>
        <p className='depoimento'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quo eveniet ullam ratione? Voluptate, nesciunt </p>
      </div>
      <div className='blocoDepo'>
        <span className='blocoDepoUser'>danilo3</span>
        <p className='depoimento'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quo eveniet ullam ratione? Voluptate, nesciunt </p>
      </div>
      <div className='blocoDepo'>
        <span className='blocoDepoUser'>danilo4</span>
        <p className='depoimento'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quo eveniet ullam ratione? Voluptate, nesciunt </p>
      </div>
      <div className='blocoDepo'>
        <span className='blocoDepoUser'>danilo5</span>
        <p className='depoimento'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quo eveniet ullam ratione? Voluptate, nesciunt </p>
      </div>
    </Slider>
    </section>
    )
}