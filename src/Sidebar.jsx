import React from 'react';
import 
{BsFillLungsFill,BsGrid1X2Fill, BsCapsule, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'


const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
  return (
    <aside id='sidebar'className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title' >
            <div className='sidebar-brand'>
              <BsFillLungsFill className='icon_header'/>Medi Care
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>x</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                    <a href=''>
                        <BsGrid1X2Fill className='icon'/>Dashboard
                    </a>
            </li>
            <li className='sidebar-list-item'>
                    <a href=''>
                        <BsCapsule className='icon'/>Doctors
                    </a>
            </li>
            <li className='sidebar-list-item'>
                    <a href=''>
                        < BsPeopleFill className='icon'/>Users
                    </a>
            </li>
            <li className='sidebar-list-item'>
                    <a href=''>
                        <BsFillGrid3X3GapFill className='icon'/>Category
                    </a>
            </li>
            <li className='sidebar-list-item'>
                    <a href=''>
                        <BsMenuButtonWideFill className='icon'/>Banner
                    </a>
            </li>
            <li className='sidebar-list-item'>
                    <a href=''>
                        <BsListCheck className='icon'/>Reports
                    </a>
            </li>
            <li className='sidebar-list-item'>
                    <a href=''>
                        <BsFillGearFill className='icon'/>Settings
                    </a>
            </li>
            
        </ul>
    </aside>
  );
}

export default Sidebar;
