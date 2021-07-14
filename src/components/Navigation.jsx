import React from 'react';
import s from './style-components/Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={s.navigation}>
        <div>
          <a className={s.item} href='#s'>Profile</a>          
        </div>
        <div>
          <a className={s.item} href='#s'>Messages</a> 
        </div>
        <div>
          <a className={s.item} href='#s'>News</a> 
        </div>
        <div>
          <a className={s.item} href='#s'>Settings</a> 
        </div>
      </nav>
    )
}


export default Navigation;