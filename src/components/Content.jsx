import React from 'react';
import s from './style-components/Content.module.css'

const Main = () => {
    return (
        <main className={s.content}>        
        <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
        <div>
          ava + description
        </div>
        <div>
          new message
        </div>
        <div>
          post 1
        </div>
        <div>
          post 2
        </div>        
    </main>
    )
}

export default Main;