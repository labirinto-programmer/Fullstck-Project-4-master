import React, {useState} from 'react';
import newsletterimg from "../img/mailing-list-img.png";
import arrowimg from "../img/arrow.svg";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    const checkEmail = (e) => {
        setEmail(e.target.value);
        const regEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regEmail.test(email) === false) {
            setError(`please enter valid email address`);
        } else {
            setError(``);
            return true;
        }
    }
    
    const onSubmit = () => {
        if (email !== "") {
            setMsg(`thank you for ${email}`);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } else {
            setError(`email address can't be blank`);
        }
    }
    
    return (
        <section className='newsletter'>
            <div className='container'>
                <div className='content-newsletter'>
                    <div className='content-img-newsletter'>
                        <img src={newsletterimg} alt="newsletterimg" />
                    </div>
                    <div className='content-text-newsletter'>
                        <div className="box-text-newsletter">
                            <h3>
                                Sign up for our newsletter and get 10% 
                                off your next order.
                            </h3>
                            <div className="input-box-text-newsletter">
                                <input type="email" onChange={checkEmail}/>
                                <button type="submit" onClick={onSubmit}>
                                    <img src={arrowimg} alt="arrowimg" />
                                </button>
                            </div>
                            <p className="msg">{msg}</p>
                            <p className="error">{error}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;