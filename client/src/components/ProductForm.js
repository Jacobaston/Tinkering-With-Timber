import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export default function ProductForm({ match, history }) {
  const { register, handleSubmit, errors } = useForm()
  const [errorbox, updateErrorbox] = useState('')
  const [populateForm, updatePopulateForm] = useState('')
  const [loading, updateLoading] = useState(true)
  const [imageUrl, updateImageUrl] = useState(undefined)
  const token = localStorage.getItem('token')

  useEffect(() => {

    async function fetchProduct() {

      if (match.params.productId) {
        try {
          const { data } = await axios.get(`/api/product/${match.params.productId}`, {
            headers: { Authorization: `Bearer ${token}` }
          })
          if (data.errors) {
            updateErrorbox('Sorry - could not find that product')
          }
          updatePopulateForm(data)
          updateImageUrl(data.product_image)
          updateLoading(false)
        } catch (err) {
    
          updateErrorbox('Sorry - could not find that product')
          updateLoading(false)
        }
      } else {
        updateLoading(false)
      }
    }
    fetchProduct()

  }, [])

  function handleImageUpload() {
    updateErrorbox('')
    const { files } = document.querySelector('input[type="file"]')
    if (files[0]) {
      const formData = new FormData()
      formData.append('file', files[0])
      formData.append('upload_preset', 'imagepreset')
      const options = {
        method: 'POST',
        body: formData
      }
      return fetch('https://api.cloudinary.com/v1_1/dj87j2nvi/image/upload', options)
        .then(res => res.json())
        .then(res => {
          updateImageUrl(res.secure_url)
        })
        .catch(err => console.log(err))
    } else {
      updateErrorbox('Please select an image to upload')
    }
  }

  async function onSubmit(data) {

    const formdata = {
      'name': data.name,
      'price': data.price,
      'height': data.height,
      'width': data.width,
      'depth': data.depth,
      'description': data.description,
      'product_image': imageUrl
    }

    if (match.params.productId) {
      try {
        const { data } = await axios.put(`/api/product/${match.params.productId}`, formdata, {
          headers: { Authorization: `Bearer ${token}` }
        })

        if (!imageUrl) {
          updateErrorbox('Please upload an image')
        } else if (data.errors) {
          updateErrorbox('Sorry - could not save your data')
        } else {
          history.push(`/product/${match.params.productId}`)
          updateErrorbox('')
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      try {
        const { data } = await axios.post('/api/products', formdata, {
          headers: { Authorization: `Bearer ${token}` }
        })
        if (!imageUrl) {
          updateErrorbox('Please upload an image')
        } else if (data.errors) {
          updateErrorbox('Sorry - could not save your data')
        } else {
          history.push(`/product/${data.id}`)
          updateErrorbox('')
        }
      } catch (err) {
        console.log(err)
      }
    }

  }

  return <>
    <div className="hero is-fullheight-with-navbar">
      <div>
        <div className="container pt-5 pb-5 px-4">

          <h1 className='title'>{match.params.productId ? 'Edit product' : 'List a new product'}</h1>

          {errorbox && <div className='box mt-4 has-background-danger has-text-white'>{errorbox}</div>}

          <form onSubmit={handleSubmit(onSubmit)} >

            <div className='field'>
              <input
                className={`input ${errors.name && 'is-danger'}`}
                name='name'
                placeholder='Name'
                defaultValue={populateForm.name}
                ref={register({ required: true })}
              />
              {errors.name && <div className='mt-2 mb-2 is-size-7'>This field is required</div>}
            </div>

            <div className='field'>
              <input
                className={`input ${errors.price && 'is-danger'}`}
                type='price'
                name='price'
                placeholder='Price'
                defaultValue={populateForm.email}
                ref={register({ required: true })}
              />
              {errors.price && <div className='mt-2 mb-2 is-size-7'>This field is required</div>}
            </div>

            <div className='field'>
              <input
                className={`input ${errors.height && 'is-danger'}`}
                name='height'
                placeholder='Heigth'
                defaultValue={populateForm.height}
              />
              {errors.height && <div className='mt-2 mb-2 is-size-7'>This field is required</div>}
            </div>

            <div className='field'>
              <input
                className={`input ${errors.width && 'is-danger'}`}
                name='width'
                placeholder='Width'
                defaultValue={populateForm.width}
              />
              {errors.width && <div className='mt-2 mb-2 is-size-7'>This field is required</div>}
            </div>

            <div className='field'>
              <input
                className={`input ${errors.depth && 'is-danger'}`}
                name='depth'
                placeholder='Depth'
                defaultValue={populateForm.depth}
              />
              {errors.depth && <div className='mt-2 mb-2 is-size-7'>This field is required</div>}
            </div>

            <div className='field'>
              <textarea
                className={`textarea ${errors.description && 'is-danger'}`}
                name='description'
                placeholder='Description'
                defaultValue={populateForm.description}
                ref={register({ required: true })}
              />
              {errors.description && <div className='mt-2 mb-2 is-size-7'>This field is required</div>}
            </div>

            <div className='box mt-4 mb-4'>
              <h5 className='title is-size-5'>Upload an image</h5>
              <div className='columns is-vcentered'>
                <div className='column is-narrow'>
                  <img src={imageUrl ? imageUrl : 'https://res.cloudinary.com/dj87j2nvi/image/upload/v1617116315/jon-moore-TDvV9SVQIC4-unsplash_nygzdu.jpg'} className="displayed-image" width='100' />
                </div>
                <div className='column is-narrow'>
                  <input type='file' className='fileinput button' />
                </div>
                <div className='column is-narrow'>
                  <button type='button' className='button' onClick={handleImageUpload}>Upload</button></div>
              </div>
            </div>

            <input
              className='button is-primary'
              type='submit'
            />
          </form >
        </div>
      </div>
    </div>
  </>
}