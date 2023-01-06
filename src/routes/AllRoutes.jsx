import { Route, Routes } from "react-router-dom"
import HomePage from "../Pages/HomPage"
import SearchPage from "../Pages/SearchPage"

export default function AllRoutes(){


    return <Routes>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/search/:id" element={<SearchPage />}></Route>
       
    </Routes>
}