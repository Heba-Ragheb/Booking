import React from 'react'
import "./style.css"
import { useTranslation } from 'react-i18next';

const Email = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
        <div className='emailContainer'>
            <div className='emailTitle'>
               
                  <h4>
                 {t('line26')}
                  </h4>
                  <p> {t('line27')}</p>

           
            </div>
            <div className='emailItem'>
               <input style={{width:"400px"}} type='email' placeholder='You email address' />
               <button>
                Subscribe
               </button>
            </div>

        </div>
        
    </div>
  )
}

export default Email