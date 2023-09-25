import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="w-4/5 m-auto py-10 relative z-50">
                <div className="flex flex-col gap-10 md:flex-row justify-between items-center">
                    <div><img src="/src/assets/Logo.png" alt="" /></div>
                    <div className="flex gap-5">
                    <NavLink to='/' className={({isActive})=>isActive?`text-red-500 underline font-bold`:'font-bold'}>Home</NavLink>
                    <NavLink to='/donation' className={({isActive})=>isActive?`text-red-500 underline font-bold`:'font-bold'}>Donation</NavLink>
                    <NavLink to='/statistics' className={({isActive})=>isActive?`text-red-500 underline font-bold`:'font-bold'}>Statistics</NavLink>
                </div>
            </div>
       </div>
            
        </div>
    );
};

export default Header;