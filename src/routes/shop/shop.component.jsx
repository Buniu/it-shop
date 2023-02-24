import { Route,Routes } from "react-router-dom"
import CategoriesPreview from "../categories-preview/categories-preview.component"
import Category from "../category/category.component"

import { useEffect } from "react"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import { useDispatch, useSelector } from "react-redux"
import { setCategories } from "../../store/categories/category.action"


 const Shop = () => {

    const dispatch = useDispatch()
    useEffect( ()=>{
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments('categories')
            console.log(categoriesArray)
            dispatch(setCategories(categoriesArray))
        }
        getCategoriesMap()
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