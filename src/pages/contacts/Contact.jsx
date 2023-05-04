import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { FaTelegramPlane, FaInstagram, FaPinterestP } from 'react-icons/fa'
import './contact.css'

function Contact() {
  const form = useRef()

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' })

  const sendEmail = (data) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_FOR_EMAIL_SERVICE_ID,
        process.env.REACT_APP_FOR_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_FOR_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    alert("Mail sent successfully")
    reset()
  }

  return (
    <div className="contactWrapper">
      <div className="foForm">
        <h3>Contact us</h3>
        <form
          className="form-inner"
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
        >
          <div>
            <label htmlFor="user_name">Name</label>
            <input
              placeholder="bill"
              name="user_name"
              {...register('user_name', {
                required: 'Field must be filled',
                minLength: {
                  value: 2,
                  message: 'Minimum number of characters 2',
                },
              })}
            />
            <div>
              {errors?.user_name && (
                <p>{errors?.user_name?.message || 'Error!'}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="user_email">Email</label>
            <input
              placeholder="bluebill1049@gmail.com"
              type="email"
              name="user_email"
              {...register('user_email', {
                required: 'Field must be filled',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  message: 'Entered value does not match email format',
                },
              })}
            />
            <div>
              {errors?.user_email && (
                <p>{errors?.user_email?.message || 'Error!'}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              placeholder="Please post questions or comments here."
              {...register('message', {
                required: 'Field must be filled',
                minLength: {
                  value: 4,
                  message: 'Minimum number of characters 4',
                },
              })}
            />
            <div>
              {errors?.message && <p>{errors?.message?.message || 'Error!'}</p>}
            </div>
          </div>

          <input type="submit" disabled={!isValid} />
        </form>
      </div>

      <aside className="icons-contact">
        <h3>Follow us</h3>
        <div className="icons">
          <a href="https://t.me/delicious_news" target="blank">
            <FaTelegramPlane color='#f1f1f1'/>
          </a>
          <a href="https://www.instagram.com/deliciousss2023/" target="blank">
            <FaInstagram color='#f1f1f1' />
          </a>
          <a href="https://www.pinterest.com/deliciousss2023/" target="blank">
            <FaPinterestP color='#f1f1f1'/>
          </a>
        </div>
      </aside>
    </div>
  )
}

export default Contact
