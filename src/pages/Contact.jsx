import React, {useEffect, useRef, useState} from 'react';
import Footer from "../components/Footer";
import '../styles/Contact.css' // stylesheet importation

function Contact() {
    const [bd, setBd] = useState(null)
    const te = useRef()
    useEffect(()=>{
        console.log(te.current)
    })
    function check(e)
    {
        e.preventDefault()
        if (te.current.value === "")
        {
            setBd('err')
        }
        else
        {
            setBd('')
        }
    }

    return (<>

        <div className={'container'}>
            <form id={'form__container'} onSubmit={e => check(e)}>
                <div className={'cm'}>
                    <h1>Contact Me</h1>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </div>

                <label className={'fn'}>
                    First Name
                    <input id={'first_name'} name={'first_name'} type={"text"} placeholder={'Enter your first name'}/>
                </label>
                <label className={'ln'}>
                    Last Name
                    <input id={'Last_name'} name={'last_name'} type={'text'} placeholder={'Enter your last name'}/>
                </label>
                <label className={'em'}>
                    Email
                    <input id={'email'} name={'email'} type={'email'} placeholder={'yourname@email.com'}/>
                </label>
                <label className={'msg'}>
                    Message
                    <textarea id={'message'} rows={5} ref={te} className={bd}
                              placeholder={'Send me a message and I\'ll reply you as soon as possible...'}>

                    </textarea>
                </label>
                <label id={"agree"} className={'ckb'}>
                    <input type={'checkbox'} id={'checkbox'}/>
                    You agree to providing your data to Jojothomas who may contact you.
                </label>
                <button id={'btn__submit'} className={'btn'}>Send Message</button>

            </form>
        </div>
        <Footer/>
    </>);
}

export default Contact;