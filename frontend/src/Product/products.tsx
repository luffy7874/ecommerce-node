import { Col, Container, Form, Row } from "react-bootstrap";
import { FaArrowsAlt, FaHeart, FaShoppingCart } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Select from "react-select";

const ToggleItem = ({ index, items }: any) => {
    const [toggleThisElement, setToggleThisElement] = useState(false);
    return (
        <li className="filter-menu-item" key={index}>
            <button
                className="border-0 bg-white"
                onClick={() => setToggleThisElement((prev) => !prev)}
            >
                { items.text } <span className="float-end"><BiPlus /></span>
            </button>
            <ul className={`filter-data`}> 
                {toggleThisElement && items.subItems.map((value: any, keyId: number) => {
                    return (
                        <li key={keyId}>
                            <Form.Check
                                type="checkbox"
                                value={value.value}
                                label={value.label}
                                name={value.name}
                            />
                        </li>
                    );
                })}
            </ul>
        </li>
    );
  };

const Products: React.FC = () =>{

    const filterList = {
        items: [
            {
                text : "Accessories",
                subItems : [
                    {
                        label : "Bag",
                        name : 'bag',
                        value : 'bag',
                    },
                    {
                        label : "Accesories",
                        name : 'accesories',
                        value : 'accesories',
                    },
                    {
                        label : "Hat",
                        name : 'hat',
                        value : 'hat',
                    }
                ]
            },
            {
                text : "Fashions",
                subItems : [
                    {
                        label : "Men",
                        name : 'men',
                        value : 'men',
                    },
                    {
                        label : "Women",
                        name : 'women',
                        value : 'women',
                    },
                    {
                        label : "Kids",
                        name : 'kids',
                        value : 'Kids',
                    }
                ]
            },
            {
                text : "Electronics",
                subItems : [
                    {
                        label : "Phone",
                        name : 'phone',
                        value : 'phone',
                    },
                    {
                        label : "Laptop",
                        name : 'laptop',
                        value : 'laptop',
                    },
                    {
                        label : "Accesories",
                        name : 'accesories',
                        value : 'bag',
                    }
                ]
            }
        ]
    }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    return (
        <>
            <section className="product-banner">
                <img src="/assets/images/banner/2.jpg"  alt="" />
            </section>
            <Container>
                <Row>
                    <Col lg={3}>
                        <p>Item Categories</p>
                        <Row>
                            <Col>
                                <ul className="filter-menu">
                                    {filterList.items.map((value, index) => {
                                        return <ToggleItem key={index} items={value} />;
                                    })}
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={9}>
                        <Row>
                            <Col>
                                <p>Showing 1 - 16 of 220 items</p>
                            </Col>
                            <Col>
                                <div className="filter-top">
                                    <p>Sort By</p>
                                    <Select options={options} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
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
                            <Col lg={4}>
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
                            <Col lg={4}>
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
                            <Col lg={4}>
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
                            <Col lg={4}>
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
                            <Col lg={4}>
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
                            <Col lg={4}>
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
                            <Col lg={4}>
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
                            <Col lg={4}>
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
                            <Col lg={4}>
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
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Products;