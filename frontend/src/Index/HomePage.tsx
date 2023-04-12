import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper as SwiperType, Autoplay, Navigation, Pagination } from "swiper";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaHeart, FaShoppingCart, FaArrowsAlt, FaClock, FaFolderOpen } from 'react-icons/fa';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import { Rating } from 'react-simple-star-rating';
import { useRef } from 'react';

function HomePage(){

    const swiperRef = useRef<SwiperType>();
    const swiperRef2 = useRef<SwiperType>();
    const swiperRef3 = useRef<SwiperType>();

    return(
        <>
            <section className="banner">
                <Container fluid>
                    <Row>
                        <Col md={12}>
                            <Swiper 
                                grabCursor={true}
                                loop={true}
                                autoplay={true} 
                                navigation={true} 
                                modules={[Navigation, Autoplay]} 
                                effect="fade"
                            >
                                <SwiperSlide>
                                    <div className='banner-cover'>
                                        <img src="/assets/images/banner/1.jpg" alt="" />
                                        <div className='caption'>
                                            <h5 className='fs-bold'>SUMMER SALE IS ON</h5>
                                            <h1>Discover Women’s Fashion Trend</h1>
                                            <a href="#" className='banner-button'>Explore Now</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='banner-cover'>
                                        <img src="/assets/images/banner/2.jpg" alt="" />
                                        <div className='caption'>
                                            <h5 className='fs-bold'>SUMMER SALE IS ON</h5>
                                            <h1>Discover Women’s Fashion Trend</h1>
                                            <a href="#" className='banner-button'>Explore Now</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='banner-cover'>
                                        <img src="/assets/images/banner/3.jpg" alt="" />
                                        <div className='caption'>
                                            <h5 className='fs-bold'>SUMMER SALE IS ON</h5>
                                            <h1>Discover Women’s Fashion Trend</h1>
                                            <a href="#" className='banner-button'>Explore Now</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='offers-products'>
                <Container>
                    <Row>
                        <Swiper 
                            breakpoints={{
                                414: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                640: {
                                  slidesPerView: 3,
                                  spaceBetween: 20,
                                },
                                768: {
                                  slidesPerView: 4,
                                  spaceBetween: 40,
                                },
                                1024: {
                                  slidesPerView: 5,
                                  spaceBetween: 50,
                                },
                            }}
                            grabCursor={true} 
                            loop={true}
                        >
                        <SwiperSlide>
                                <a className="client-logo">
                                    <img src="/assets/images/clients/1h.png" alt="" />
                                    <img src="/assets/images/clients/1.png" alt="" />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className="client-logo">
                                    <img src="/assets/images/clients/2h.png" alt="" />
                                    <img src="/assets/images/clients/2.png" alt="" />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className="client-logo">
                                    <img src="/assets/images/clients/3h.png" alt="" />
                                    <img src="/assets/images/clients/3.png" alt="" />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className="client-logo">
                                    <img src="/assets/images/clients/4h.png" alt="" />
                                    <img src="/assets/images/clients/4.png" alt="" />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className="client-logo">
                                    <img src="/assets/images/clients/5h.png" alt="" />
                                    <img src="/assets/images/clients/5.png" alt="" />
                                </a>
                            </SwiperSlide>
                        </Swiper>
                    </Row>
                </Container>
            </section>


            <section className='index-categories'>
                <Container>
                    <Row>
                        <Col md={12} className='mb-2'>
                            <h1>Popular Products</h1>
                            <p>Showing our latest arrival on this summer</p>
                        </Col>
                        <Col md={3}>
                            <div className="product-card">
                                <div className="product-img">
                                    <img src="/assets/images/products/2.jpg" alt="" />
                                    <img src="/assets/images/products/2.1.jpg" alt="" />
                                    <div className="product-quick-links">
                                        <a href="#">
                                            <FaShoppingCart />
                                        </a>
                                        <a href="#">
                                            <FaArrowsAlt />
                                        </a>
                                        <a href="#">
                                            <FaHeart />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-card-body">
                                    <div className="reviews">
                                        <Rating className='width-25' initialValue={4} readonly={true} />
                                        <span className='number-reviews'> 10 Reviews</span>
                                    </div>
                                    <p className='product-title'>Casual off-white ladies shoes</p>
                                    <p className='product-price'>₹750 &nbsp; &nbsp; <del>₹950</del></p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="product-card">
                                <div className="product-img">
                                    <img src="/assets/images/products/14.jpg" alt="" />
                                    <img src="/assets/images/products/14.1.jpg" alt="" />
                                    <div className="product-quick-links">
                                        <a href="#">
                                            <FaShoppingCart />
                                        </a>
                                        <a href="#">
                                            <FaArrowsAlt />
                                        </a>
                                        <a href="#">
                                            <FaHeart />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-card-body">
                                    <div className="reviews">
                                        <Rating className='width-25' initialValue={4} readonly={true} />
                                        <span className='number-reviews'> 10 Reviews</span>
                                    </div>
                                    <p className='product-title'>Casual off-white ladies shoes</p>
                                    <p className='product-price'>₹750 &nbsp; &nbsp; <del>₹950</del></p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="product-card">
                                <div className="product-img">
                                    <img src="/assets/images/products/17.jpg" alt="" />
                                    <img src="/assets/images/products/17.1.jpg" alt="" />
                                    <div className="product-quick-links">
                                        <a href="#">
                                            <FaShoppingCart />
                                        </a>
                                        <a href="#">
                                            <FaArrowsAlt />
                                        </a>
                                        <a href="#">
                                            <FaHeart />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-card-body">
                                    <div className="reviews">
                                        <Rating className='width-25' initialValue={4} readonly={true} />
                                        <span className='number-reviews'> 10 Reviews</span>
                                    </div>
                                    <p className='product-title'>Casual off-white ladies shoes</p>
                                    <p className='product-price'>₹750 &nbsp; &nbsp; <del>₹950</del></p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="product-card">
                                <div className="product-img">
                                    <img src="/assets/images/products/23.jpg" alt="" />
                                    <img src="/assets/images/products/23.1.jpg" alt="" />
                                    <div className="product-quick-links">
                                        <a href="#">
                                            <FaShoppingCart />
                                        </a>
                                        <a href="#">
                                            <FaArrowsAlt />
                                        </a>
                                        <a href="#">
                                            <FaHeart />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-card-body">
                                    <div className="reviews">
                                        <Rating className='width-25' initialValue={4} readonly={true} />
                                        <span className='number-reviews'> 10 Reviews</span>
                                    </div>
                                    <p className='product-title'>Casual off-white ladies shoes</p>
                                    <p className='product-price'>₹750 &nbsp; &nbsp; <del>₹950</del></p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="product-card">
                                <div className="product-img">
                                    <img src="/assets/images/products/16.jpg" alt="" />
                                    <img src="/assets/images/products/16.1.jpg" alt="" />
                                    <div className="product-quick-links">
                                        <a href="#">
                                            <FaShoppingCart />
                                        </a>
                                        <a href="#">
                                            <FaArrowsAlt />
                                        </a>
                                        <a href="#">
                                            <FaHeart />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-card-body">
                                    <div className="reviews">
                                        <Rating className='width-25' initialValue={4} readonly={true} />
                                        <span className='number-reviews'> 10 Reviews</span>
                                    </div>
                                    <p className='product-title'>Casual off-white ladies shoes</p>
                                    <p className='product-price'>₹750 &nbsp; &nbsp; <del>₹950</del></p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="product-card">
                                <div className="product-img">
                                    <img src="/assets/images/products/27.jpg" alt="" />
                                    <img src="/assets/images/products/27.1.jpg" alt="" />
                                    <div className="product-quick-links">
                                        <a href="#">
                                            <FaShoppingCart />
                                        </a>
                                        <a href="#">
                                            <FaArrowsAlt />
                                        </a>
                                        <a href="#">
                                            <FaHeart />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-card-body">
                                    <div className="reviews">
                                        <Rating className='width-25' initialValue={4} readonly={true} />
                                        <span className='number-reviews'> 10 Reviews</span>
                                    </div>
                                    <p className='product-title'>Casual off-white ladies shoes</p>
                                    <p className='product-price'>₹750 &nbsp; &nbsp; <del>₹950</del></p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="product-card">
                                <div className="product-img">
                                    <img src="/assets/images/products/9.jpg" alt="" />
                                    <img src="/assets/images/products/9.1.jpg" alt="" />
                                    <div className="product-quick-links">
                                        <a href="#">
                                            <FaShoppingCart />
                                        </a>
                                        <a href="#">
                                            <FaArrowsAlt />
                                        </a>
                                        <a href="#">
                                            <FaHeart />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-card-body">
                                    <div className="reviews">
                                        <Rating className='width-25' initialValue={4} readonly={true} />
                                        <span className='number-reviews'> 10 Reviews</span>
                                    </div>
                                    <p className='product-title'>Casual off-white ladies shoes</p>
                                    <p className='product-price'>₹750 &nbsp; &nbsp; <del>₹950</del></p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="product-card">
                                <div className="product-img">
                                    <img src="/assets/images/products/7.jpg" alt="" />
                                    <img src="/assets/images/products/7.1.jpg" alt="" />
                                    <div className="product-quick-links">
                                        <a href="#">
                                            <FaShoppingCart />
                                        </a>
                                        <a href="#">
                                            <FaArrowsAlt />
                                        </a>
                                        <a href="#">
                                            <FaHeart />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-card-body">
                                    <div className="reviews">
                                        <Rating className='width-25' initialValue={4} readonly={true} />
                                        <span className='number-reviews'> 10 Reviews</span>
                                    </div>
                                    <p className='product-title'>Casual off-white ladies shoes</p>
                                    <p className='product-price'>₹750 &nbsp; &nbsp; <del>₹950</del></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className='category'>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div className="category-heading mb-heading">
                                <h1>Shop By Category</h1>
                                <p>Showing our latest arrival on this summer</p>
                            </div>
                        </Col>

                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div className='navigation-buttons'>
                                <button onClick={() => swiperRef.current?.slidePrev()} className='prev-button'><TfiAngleLeft /></button>
                                <button onClick={() => swiperRef.current?.slideNext()} className='next-button'><TfiAngleRight /></button>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <Swiper 
                                breakpoints={{
                                    414: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                    },
                                    640: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 5,
                                        spaceBetween: 70,
                                    },
                                }}
                                grabCursor={true}
                                modules={[Navigation]}
                                onBeforeInit={(swiper: any) => {
                                    swiperRef.current = swiper;
                                }}
                            >
                                <SwiperSlide>
                                    <div className="category-slide">
                                        <div className="category-image">
                                            <img src="/assets/images/category/6.jpg" alt="" />
                                        </div>
                                        <p>Shoes</p>
                                        <span>192 items</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="category-slide">
                                        <div className="category-image">
                                            <img src="/assets/images/category/7.jpg" alt="" />
                                        </div>
                                        <p>Shoes</p>
                                        <span>192 items</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="category-slide">
                                        <div className="category-image">
                                            <img src="/assets/images/category/8.jpg" alt="" />
                                        </div>
                                        <p>Shoes</p>
                                        <span>192 items</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="category-slide">
                                        <div className="category-image">
                                            <img src="/assets/images/category/9.jpg" alt="" />
                                        </div>
                                        <p>Shoes</p>
                                        <span>192 items</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="category-slide">
                                        <div className="category-image">
                                            <img src="/assets/images/category/10.jpg" alt="" />
                                        </div>
                                        <p>Shoes</p>
                                        <span>192 items</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="category-slide">
                                        <div className="category-image">
                                            <img src="/assets/images/category/11.jpg" alt="" />
                                        </div>
                                        <p>Shoes</p>
                                        <span>192 items</span>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className='latest-arrival'>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div className="latest-heading mb-heading">
                                <h1>Latest Arrival</h1>
                                <p>Showing our latest arrival on this summer</p>
                            </div>
                        </Col>

                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div className='navigation-buttons'>
                                <button onClick={() => swiperRef2.current?.slidePrev()} className='prev-button'><TfiAngleLeft /></button>
                                <button onClick={() => swiperRef2.current?.slideNext()} className='next-button'><TfiAngleRight /></button>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <Swiper 
                                breakpoints={{
                                    414: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 50,
                                    },
                                }}
                                grabCursor={true}
                                loop={true}
                                modules={[Navigation]}
                                onBeforeInit={(swiper: any) => {
                                    swiperRef2.current = swiper;
                                }}
                            >
                                <SwiperSlide>
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="/assets/images/products/21.jpg" alt="" />
                                            <img src="/assets/images/products/21.1.jpg" alt="" />
                                            <div className="product-quick-links">
                                                <a href="#">
                                                    <FaShoppingCart />
                                                </a>
                                                <a href="#">
                                                    <FaArrowsAlt />
                                                </a>
                                                <a href="#">
                                                    <FaHeart />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-card-body">
                                            <div className="reviews">
                                                <Rating className='width-25' initialValue={4} readonly={true} />
                                                <span className='number-reviews'> 10 Reviews</span>
                                            </div>
                                            <p className='product-title'>Casual off-white ladies shoes</p>
                                            <p className='product-price'>₹750 &nbsp; &nbsp; <del>₹950</del></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="/assets/images/products/22.jpg" alt="" />
                                            <img src="/assets/images/products/22.1.jpg" alt="" />
                                            <div className="product-quick-links">
                                                <a href="#">
                                                    <FaShoppingCart />
                                                </a>
                                                <a href="#">
                                                    <FaArrowsAlt />
                                                </a>
                                                <a href="#">
                                                    <FaHeart />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-card-body">
                                            <div className="reviews">
                                                <Rating className='width-25' initialValue={4} readonly={true} />
                                                <span className='number-reviews'> 10 Reviews</span>
                                            </div>
                                            <p className='product-title'>Casual off-white ladies shoes</p>
                                            <p className='product-price'>₹750 &nbsp; &nbsp; <del>₹950</del></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="/assets/images/products/23.jpg" alt="" />
                                            <img src="/assets/images/products/23.1.jpg" alt="" />
                                            <div className="product-quick-links">
                                                <a href="#">
                                                    <FaShoppingCart />
                                                </a>
                                                <a href="#">
                                                    <FaArrowsAlt />
                                                </a>
                                                <a href="#">
                                                    <FaHeart />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-card-body">
                                            <div className="reviews">
                                                <Rating className='width-25' initialValue={4} readonly={true} />
                                                <span className='number-reviews'> 10 Reviews</span>
                                            </div>
                                            <p className='product-title'>Casual off-white ladies shoes</p>
                                            <p className='product-price'>₹750 &nbsp; &nbsp; <del>₹950</del></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="/assets/images/products/24.jpg" alt="" />
                                            <img src="/assets/images/products/24.1.jpg" alt="" />
                                            <div className="product-quick-links">
                                                <a href="#">
                                                    <FaShoppingCart />
                                                </a>
                                                <a href="#">
                                                    <FaArrowsAlt />
                                                </a>
                                                <a href="#">
                                                    <FaHeart />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-card-body">
                                            <div className="reviews">
                                                <Rating className='width-25' initialValue={4} readonly={true} />
                                                <span className='number-reviews'> 10 Reviews</span>
                                            </div>
                                            <p className='product-title'>Casual off-white ladies shoes</p>
                                            <p className='product-price'>₹750 &nbsp; &nbsp; <del>₹950</del></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="/assets/images/products/7.jpg" alt="" />
                                            <img src="/assets/images/products/7.1.jpg" alt="" />
                                            <div className="product-quick-links">
                                                <a href="#">
                                                    <FaShoppingCart />
                                                </a>
                                                <a href="#">
                                                    <FaArrowsAlt />
                                                </a>
                                                <a href="#">
                                                    <FaHeart />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-card-body">
                                            <div className="reviews">
                                                <Rating className='width-25' initialValue={4} readonly={true} />
                                                <span className='number-reviews'> 10 Reviews</span>
                                            </div>
                                            <p className='product-title'>Casual off-white ladies shoes</p>
                                            <p className='product-price'>₹750 &nbsp; &nbsp; <del>₹950</del></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="/assets/images/products/7.jpg" alt="" />
                                            <img src="/assets/images/products/7.1.jpg" alt="" />
                                            <div className="product-quick-links">
                                                <a href="#">
                                                    <FaShoppingCart />
                                                </a>
                                                <a href="#">
                                                    <FaArrowsAlt />
                                                </a>
                                                <a href="#">
                                                    <FaHeart />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-card-body">
                                            <div className="reviews">
                                                <Rating className='width-25' initialValue={4} readonly={true} />
                                                <span className='number-reviews'> 10 Reviews</span>
                                            </div>
                                            <p className='product-title'>Casual off-white ladies shoes</p>
                                            <p className='product-price'>₹750 &nbsp; &nbsp; <del>₹950</del></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="/assets/images/products/7.jpg" alt="" />
                                            <img src="/assets/images/products/7.1.jpg" alt="" />
                                            <div className="product-quick-links">
                                                <a href="#">
                                                    <FaShoppingCart />
                                                </a>
                                                <a href="#">
                                                    <FaArrowsAlt />
                                                </a>
                                                <a href="#">
                                                    <FaHeart />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-card-body">
                                            <div className="reviews">
                                                <Rating className='width-25' initialValue={4} readonly={true} />
                                                <span className='number-reviews'> 10 Reviews</span>
                                            </div>
                                            <p className='product-title'>Casual off-white ladies shoes</p>
                                            <p className='product-price'>₹750 &nbsp; &nbsp; <del>₹950</del></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="/assets/images/products/7.jpg" alt="" />
                                            <img src="/assets/images/products/7.1.jpg" alt="" />
                                            <div className="product-quick-links">
                                                <a href="#">
                                                    <FaShoppingCart />
                                                </a>
                                                <a href="#">
                                                    <FaArrowsAlt />
                                                </a>
                                                <a href="#">
                                                    <FaHeart />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-card-body">
                                            <div className="reviews">
                                                <Rating className='width-25' initialValue={4} readonly={true} />
                                                <span className='number-reviews'> 10 Reviews</span>
                                            </div>
                                            <p className='product-title'>Casual off-white ladies shoes</p>
                                            <p className='product-price'>₹750 &nbsp; &nbsp; <del>₹950</del></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="/assets/images/products/7.jpg" alt="" />
                                            <img src="/assets/images/products/7.1.jpg" alt="" />
                                            <div className="product-quick-links">
                                                <a href="#">
                                                    <FaShoppingCart />
                                                </a>
                                                <a href="#">
                                                    <FaArrowsAlt />
                                                </a>
                                                <a href="#">
                                                    <FaHeart />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-card-body">
                                            <div className="reviews">
                                                <Rating className='width-25' initialValue={4} readonly={true} />
                                                <span className='number-reviews'> 10 Reviews</span>
                                            </div>
                                            <p className='product-title'>Casual off-white ladies shoes</p>
                                            <p className='product-price'>₹750 &nbsp; &nbsp; <del>₹950</del></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='testimonials'>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div className="latest-heading mb-5 mb-heading">
                                <h1>What Customers Say</h1>
                                <p>Showing our latest arrival on this summer</p>
                            </div>
                        </Col>

                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div className='navigation-buttons mb-5'>
                                <button onClick={() => swiperRef3.current?.slidePrev()} className='prev-button'><TfiAngleLeft /></button>
                                <button onClick={() => swiperRef3.current?.slideNext()} className='next-button'><TfiAngleRight /></button>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <Swiper 
                                breakpoints={{
                                    414: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                                grabCursor={true}
                                loop={true}
                                pagination={{ clickable : true }}
                                modules={[Navigation, Pagination]}
                                onBeforeInit={(swiper: any) => {
                                    swiperRef3.current = swiper;
                                }}
                            >
                                <SwiperSlide>
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <div className="testimonial-quote">
                                                <img src="/assets/images/icons/quote.svg" alt="" />
                                            </div>
                                            <div className="testimonial-rating">
                                                <Rating initialValue={4} readonly />
                                            </div>
                                        </div>
                                        <div className="testimonial-body">
                                            <p>Lorem ipsum dolor sit amet, conseet eotur adipisicing elit, sed do eiusmoed tempor incididunt ut labore et doleore magna aliqua. Ut enim ad mire oknim veniam, quis nostrud exercitation ull mco laboris nisi ut aliquip.</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <img src="/assets/images/author/1.jpg" width="40px" alt="" />
                                            <p className='ps-3'>Mark Smith <br /> <span>Blogger</span></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <div className="testimonial-quote">
                                                <img src="/assets/images/icons/quote.svg" alt="" />
                                            </div>
                                            <div className="testimonial-rating">
                                                <Rating initialValue={4} readonly />
                                            </div>
                                        </div>
                                        <div className="testimonial-body">
                                            <p>Lorem ipsum dolor sit amet, conseet eotur adipisicing elit, sed do eiusmoed tempor incididunt ut labore et doleore magna aliqua. Ut enim ad mire oknim veniam, quis nostrud exercitation ull mco laboris nisi ut aliquip.</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <img src="/assets/images/author/2.jpg" width="40px" alt="" />
                                            <p className='ps-3'>Mark Smith <br /> <span>Blogger</span></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <div className="testimonial-quote">
                                                <img src="/assets/images/icons/quote.svg" alt="" />
                                            </div>
                                            <div className="testimonial-rating">
                                                <Rating initialValue={4} readonly />
                                            </div>
                                        </div>
                                        <div className="testimonial-body">
                                            <p>Lorem ipsum dolor sit amet, conseet eotur adipisicing elit, sed do eiusmoed tempor incididunt ut labore et doleore magna aliqua. Ut enim ad mire oknim veniam, quis nostrud exercitation ull mco laboris nisi ut aliquip.</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <img src="/assets/images/author/3.png" width="40px" alt="" />
                                            <p className='ps-3'>Mark Smith <br /> <span>Blogger</span></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <div className="testimonial-quote">
                                                <img src="/assets/images/icons/quote.svg" alt="" />
                                            </div>
                                            <div className="testimonial-rating">
                                                <Rating initialValue={4} readonly />
                                            </div>
                                        </div>
                                        <div className="testimonial-body">
                                            <p>Lorem ipsum dolor sit amet, conseet eotur adipisicing elit, sed do eiusmoed tempor incididunt ut labore et doleore magna aliqua. Ut enim ad mire oknim veniam, quis nostrud exercitation ull mco laboris nisi ut aliquip.</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <img src="/assets/images/author/4.png" width="40px" alt="" />
                                            <p className='ps-3'>Mark Smith <br /> <span>Blogger</span></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <div className="testimonial-quote">
                                                <img src="/assets/images/icons/quote.svg" alt="" />
                                            </div>
                                            <div className="testimonial-rating">
                                                <Rating initialValue={4} readonly />
                                            </div>
                                        </div>
                                        <div className="testimonial-body">
                                            <p>Lorem ipsum dolor sit amet, conseet eotur adipisicing elit, sed do eiusmoed tempor incididunt ut labore et doleore magna aliqua. Ut enim ad mire oknim veniam, quis nostrud exercitation ull mco laboris nisi ut aliquip.</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <img src="/assets/images/author/5.png" width="40px" alt="" />
                                            <p className='ps-3'>Mark Smith <br /> <span>Blogger</span></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <div className="testimonial-quote">
                                                <img src="/assets/images/icons/quote.svg" alt="" />
                                            </div>
                                            <div className="testimonial-rating">
                                                <Rating initialValue={4} readonly />
                                            </div>
                                        </div>
                                        <div className="testimonial-body">
                                            <p>Lorem ipsum dolor sit amet, conseet eotur adipisicing elit, sed do eiusmoed tempor incididunt ut labore et doleore magna aliqua. Ut enim ad mire oknim veniam, quis nostrud exercitation ull mco laboris nisi ut aliquip.</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <img src="/assets/images/author/6.png" width="40px" alt="" />
                                            <p className='ps-3'>Mark Smith <br /> <span>Blogger</span></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-card">
                                        <div className="testimonial-header">
                                            <div className="testimonial-quote">
                                                <img src="/assets/images/icons/quote.svg" alt="" />
                                            </div>
                                            <div className="testimonial-rating">
                                                <Rating initialValue={4} readonly />
                                            </div>
                                        </div>
                                        <div className="testimonial-body">
                                            <p>Lorem ipsum dolor sit amet, conseet eotur adipisicing elit, sed do eiusmoed tempor incididunt ut labore et doleore magna aliqua. Ut enim ad mire oknim veniam, quis nostrud exercitation ull mco laboris nisi ut aliquip.</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <img src="/assets/images/author/7.jpg" width="40px" alt="" />
                                            <p className='ps-3'>Mark Smith <br /> <span>Blogger</span></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className='latest-news'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="latest-heading  mb-heading">
                                    <h1>Latest Arrival</h1>
                                    <p>Showing our latest arrival on this summer</p>
                                </div>
                            </Col>

                            <Col lg={4} md={4} sm={6} xs={12}>
                                <div className="news-card">
                                    <div className="news-image">
                                        <img src="/assets/images/news/2.jpg" alt="" />
                                    </div>
                                    <div className="about-news">
                                        <p><FaFolderOpen /> &nbsp; Shopping</p>
                                        <p><FaClock /> &nbsp; May 31, 2022</p>
                                    </div>
                                    <div className="news-title">
                                        <p>Jim Morisson says when the musics over turn off the light</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <div className="news-card">
                                    <div className="news-image">
                                        <img src="/assets/images/news/3.jpg" alt="" />
                                    </div>
                                    <div className="about-news">
                                        <p><FaFolderOpen /> &nbsp; Shopping</p>
                                        <p><FaClock /> &nbsp; May 31, 2022</p>
                                    </div>
                                    <div className="news-title">
                                        <p>Jim Morisson says when the musics over turn off the light</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <div className="news-card">
                                    <div className="news-image">
                                        <img src="/assets/images/news/4.jpg" alt="" />
                                    </div>
                                    <div className="about-news">
                                        <p><FaFolderOpen /> &nbsp; Shopping</p>
                                        <p><FaClock /> &nbsp; May 31, 2022</p>
                                    </div>
                                    <div className="news-title">
                                        <p>Jim Morisson says when the musics over turn off the light</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </section>
        </>
    );
}

export default HomePage;