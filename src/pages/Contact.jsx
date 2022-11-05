import React, {useRef, useState} from 'react';
import Footer from "../components/Footer";
import '../styles/Contact.css' // stylesheet importation

function Contact() {
    const [bd, setBd] = useState(null)
    const [ebd, setEbd] = useState(null)
    const [fn, setFn] = useState(null)
    const [ln, setLn] = useState(null)
    const te = useRef()

    function check(e,) {
        e.preventDefault()

        alert("thanks for trying to contact me :)")
    }

    return (<>

        <div className={'container__contact'}>
            <form id={'form__container'} onSubmit={e => check(e)}>
                <div className={'cm'}>
                    <h1>Contact Me</h1>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </div>

                <label className={'fn'}>
                    First Name
                    <input id={'first_name'} name={'first_name'} type={"text"} required
                           className={fn} onInput={() => setFn('')} onInvalid={() => setFn('err')}
                           placeholder={'Enter your first name'}/>

                </label>
                <label className={'ln'}>
                    Last Name
                    <input id={'Last_name'} name={'last_name'} type={'text'} required
                           className={ln} onInput={() => setLn('')} onInvalid={() => setLn('err')}
                           placeholder={'Enter your last name'}/>
                </label>
                <label className={'em'}>
                    Email
                    <input id={'email'} className={ebd} name={'email'} type={'email'} required
                           placeholder={'yourname@email.com'} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                           onInvalid={(e) => {
                               setEbd('err')
                           }}
                           onInput={() => setEbd('')}/>
                </label>
                <label className={'msg'}>
                    Message
                    <textarea id={'message'} rows={5} ref={te} className={bd} onInput={(e) => {
                        setBd('')
                    }}
                              required
                              onInvalid={() => setBd('err')}
                              placeholder={'Send me a message and I\'ll reply you as soon as possible...'}>

                    </textarea>
                </label>
                <label id={"agree"} className={'ckb'}>
                    <input type={'checkbox'} id={'checkbox'} required/>
                    You agree to providing your data to Jojothomas who may contact you.
                </label>
                <button id={'btn__submit'} className={'btn'}>Send Message</button>

            </form>
        </div>
        <Footer/>
    </>);
}

export default Contact;