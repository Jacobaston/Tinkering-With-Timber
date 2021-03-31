import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
// import nodemailer from 'nodemailer'

function Contact() {
  const { register, handleSubmit, errors } = useForm()
  const [errorbox, updateErrorbox] = useState('')

  async function onSubmit(data) {
    updateErrorbox('')
    const formdata = {
      'name': data.name,
      'email': data.email,
      'number': data.number,
      'message': data.message
    }

    try {
      const { data } = await axios.post('/api/email', formdata,)
      console.log(data)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  // async function main() {
  //   const transporter = nodemailer.createTransport({
  //     host: 'smtp.ethereal.email',
  //     port: 587,
  //     secure: false,
  //     auth: {
  //       user: 'tinkeringwithtimber@gmail.com',
  //       pass: 'Rusticcharm1'
  //     },
  //     tls: {
  //       rejectUnauthorized: false
  //     }
  //   })

  //   const info = await transporter.sendMail({
  //     from: '"Fred Foo 👻" <foo@example.com>',
  //     to: 'bar@example.com, baz@example.com',
  //     subject: 'Hello ✔',
  //     text: 'Hello world?',
  //     html: '<b>Hello world?</b>'
  //   })

  //   console.log('Message sent: %s', info.messageId)
  //   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  // }

  // main().catch(console.error)


  return <div>

    <div className="container">
      <div>

        <h1 className="title has-text-centered mt-2 mb-5">Register</h1>

        {errorbox && <div className='box has-background-danger has-text-white'>{errorbox}</div>}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='field'>
            <label>
              <p>Name</p>
            </label>
            <input
              className={`input ${errors.name && 'is-danger'}`}
              name='name'
              placeholder='Name'
              type='text'
              defaultValue=''
              ref={register({ required: true })}
            />
            {errors.name && <div className='mt-2 mb-2 is-size-7'>This field is required</div>}
          </div>

          <div className='field'>
            <label>
              <p>Email</p>
            </label>
            <input
              className={`input ${errors.email && 'is-danger'}`}
              name='email'
              placeholder='Email@email.com'
              type='email'
              defaultValue=''
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <div className='mt-2 mb-2 is-size-7'>This field is required</div>}
          </div>

          <div className='field'>
            <label>
              <p>Number</p>
            </label>
            <input
              className={`input ${errors.number && 'is-danger'}`}
              name='number'
              placeholder='07*********'
              type='tel'
              defaultValue=''
              ref={register({ required: true })}
            />
            {errors.number && <div className='mt-2 mb-2 is-size-7'>This field is required</div>}
          </div>

          <div className='field'>
            <label>
              <p>Message</p>
            </label>
            <input
              className={`input ${errors.message && 'is-danger'}`}
              name='Message'
              placeholder='Enquire here'
              type='text'
              defaultValue=''
              ref={register({ required: true })}
            />
            {errors.email && <div className='mt-2 mb-2 is-size-7'>This field is required</div>}
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  </div>
}

export default Contact