import Slider from "react-slick";

var settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function Banner() {
  return (
    <div className="wrapper">
      <div className="py-[20px]">
        <div className="flex gap-[20px]">
          <div className="w-[66.6%]">
            <div className="h-[541px] overflow-hidden">
              <Slider {...settings}>
                <div className="h-[541px]">
                  <img
                    className="w-full h-full object-contain"
                    src="https://digital-world-5.myshopify.com/cdn/shop/files/banner4-slide-home5_2000x_crop_center.png?v=1613675853"
                    alt=""
                  />
                </div>
                <div className="h-[541px]">
                  <img
                    className="w-full h-full object-contain"
                    src="https://digital-world-5.myshopify.com/cdn/shop/files/banner3-slide-home5_2000x_crop_center.png?v=1613675853"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className="w-[33.3%] flex flex-col justify-between">
            <div className="relative group overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://digital-world-5.myshopify.com/cdn/shop/files/banner1-slide-home5_400x.png?v=1613675853"
                alt=""
              />
              <div className="group-hover:animate-slide_bottom_right absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0"></div>
              <div className="group-hover:animate-slide_top_left absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0"></div>
            </div>
            <div className="relative group overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://digital-world-5.myshopify.com/cdn/shop/files/banner5-slide-home5_2000x_crop_center.png?v=1613675853"
                alt=""
              />
              <div className="group-hover:animate-slide_bottom_right absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0"></div>
              <div className="group-hover:animate-slide_top_left absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
