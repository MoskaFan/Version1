import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import { ProductData } from './ProductData';
import ProductCard from "./ProductCard";

function App() {


    const emptyProductData: ProductData = {
        "food_name": "",
        "brand_name": "",
        "serving_qty": 0,
        "serving_unit": "",
        "serving_weight_grams": 0,
        "nf_calories": 0,
        "nf_total_fat": 0,
        "nf_saturated_fat": 0,
        "nf_cholesterol": 0,
        "nf_sodium": 0,
        "nf_total_carbohydrate": 0,
        "nf_dietary_fiber": 0,
        "nf_sugars": 0,
        "nf_protein": 0,
        "nf_potassium": 0,
        "nf_p": 0,
        "photo": ""}
    const [product, setProduct]=useState(emptyProductData)
    const [searchText, setSearchText] = useState<string>("")
    function handleOnChangeSearchText(event: ChangeEvent<HTMLInputElement>){
        setSearchText(event.target.value)
    }
    function setInputFieldValue(){
        setSearchText("")
    }

    useEffect(() => {
        getProduct(searchText)
    }, [searchText])


    function getProduct(searchText: string){
        axios.post("https://trackapi.nutritionix.com/v2/natural/nutrients",
            {query:{searchText}},
            {headers: {'Content-Type':'application/json',
                    'x-app-id': process.env.API_LOGIN,
                    'x-app-key': process.env.API_KEY}})
            .then(response => response.data)
            .then(data => setProduct(data))
            .catch(console.error)


    }

  return (
      <section>
            <section>
                <label>Geben Sie das gesuchte Produkt ein:</label>
                <input onChange={handleOnChangeSearchText}/>
                <button onClick={setInputFieldValue}>search</button>
            </section>
            <section>
                <ProductCard product={product} />
            </section>
        </section>



  );
}

export default App;
