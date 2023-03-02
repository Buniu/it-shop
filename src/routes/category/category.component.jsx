import "./category.styles.scss"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"



import ProductCard from "../../components/product-card/product-card.component"
import Spinner from "../../components/spinner/spinner.component"

import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector"
import { useSelector } from "react-redux"

const Category = () => {
    const {category} = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    const [products,setProducts] = useState(categoriesMap[category])
    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[category,categoriesMap])

    return (
        <>
        <h2 className="category-title"> {category.toLocaleUpperCase()}</h2>
        {
            isLoading ? <Spinner/> :  <div className="category-container">
            {products &&
                products.map((product) => <ProductCard key={product.id} product={product}/>)
            }
        </div>
        }
       
        </>
    )
}

export default Category