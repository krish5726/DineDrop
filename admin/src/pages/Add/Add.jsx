import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name:"",
        description: "",
        price: "",
        category: "Salad"
    })

    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;

        setData(data=>({...data, [name]:value}))
    }

    const onSubmitHandler = async(event)=>{
        event.preventDefault()
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image", image)
        const response = await axios.post(`${url}/api/food/add`, formData)
        if(response.data.success){
            setData({
                name:"",
                description: "",
                price: "",
                category: "Salad"
            })
            setImage(false)
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)
        }
    }
  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
                <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
            </label>
            <input onChange={(event)=>setImage(event.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="add-product-desc flex-col">
            <p>Product Description</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here'></textarea>
        </div>
        <div className="add-category-price">
            <div className="add-category flex-col">
                <p>Product Category</p>
                <select onChange={onChangeHandler} value={data.category}name="category" >
                    <option value="Salad">Salad</option>
                    <option value="Soup">Soup</option>
                    <option value="Appetizers">Appetizers</option>
                    <option value="Vegetable Items">Vegetable Items</option>
                    <option value="Rice">Rice</option>
                    <option value="Roti">Roti</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Beverages">Beverages</option>
                </select>
            </div>
            <div className="add-price flex-col">
                <p>Product Price</p>
                <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20'/>
            </div>
        </div>
        <button type='submit' className='add-button'>
            ADD
        </button>
      </form>
    </div>
  )
}

export default Add
