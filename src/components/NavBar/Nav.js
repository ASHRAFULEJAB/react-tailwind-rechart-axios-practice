import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'


const Nav = () => {
    const[open,setOpen]=useState(false)
    const routes = [
        {id:1,name:'Home',path:'/home'},
        {id:2,name:'Products',path:'/products'},
        {id:3,name:'Orders',path:'/orders'},
        {id:4,name:'About',path:'/about'},
        {id:5,name:'Contact',path:'/contact'},
    ]
    return (
        <nav className='bg-slate-400 w-full '>
            <div onClick={()=>setOpen(!open)} className="h-16 w-16 md:hidden p-1">
            {
               open ?<XMarkIcon/> :<Bars3Icon />
            }
            </div>
            
            <ul className={` bg-slate-400 md:flex w-full justify-center absolute duration-300 ease-in md:static ${open ? 'top-16':'top-[-210px]'}`}> 
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Nav;