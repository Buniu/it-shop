import { Route,Routes } from "react-router-dom"
import CategoriesPreview from "../categories-preview/categories-preview.component"
import Category from "../category/category.component"

import { useEffect } from "react"
import { useDispatch } from "react-redux"


import { fetchCategoriesAsync } from "../../store/categories/category.action"




 const Shop = () => {

    const dispatch = useDispatch()
    useEffect( ()=>{
        dispatch(fetchCategoriesAsync())
    },[dispatch])


    // const categoriesMap = useSelector(selectCategoriesMap)

    return (
            <Routes>
                <Route index element={<CategoriesPreview/>}/>
                <Route path=":category" element={<Category/>}/>

            </Routes>
    )
 }

 export default Shop