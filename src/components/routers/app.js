import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Error from "./Error";
import Posts from "./posts";
import OrderSummary from "./orderSummary";
import Products from "./products";
import FeaturedProducts from "./featuredProducts";
import NewProducts from "./newProducts";
import UserDetails from "./userDetails";
import Admin from "./admin";
import Profile from "./profile";
import { AuthProvider } from "./auth";
import Login from "./login";
import RequireAuth from "./requireAuth";
export default function App(){
    return(
        <Router>
           <AuthProvider>
                <Navbar />
                <Routes>
                    {/* navigating */}
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    {/* send props */}
                    <Route path="services" element={<Services number="5" />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    {/* navigating */}
                    <Route path="order-summary" element={<OrderSummary />} />
                    {/* nesting router */}
                    <Route path="products" element={<Products />} >
                        <Route index element={<FeaturedProducts />} />
                        <Route path="featured" element={<FeaturedProducts />} />
                        <Route path="new" element={<NewProducts />} />
                    </Route>
                    <Route path="posts" element={<Posts />} >
                    {/* Dynamic routes */}
                        <Route path=":category" element={<UserDetails />} />
                        <Route path="admin" element={<Admin />} />
                    </Route>
                    <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
                    <Route path='login' element={<Login />} />

                    <Route path="*"  element={<Error />}/>
                </Routes>
           </AuthProvider>
        </Router>
    )
}