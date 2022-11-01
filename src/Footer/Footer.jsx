import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container2">
        <div className="row">
          <div className="col">
            <h4>О нас</h4>
            <ui className="list-unstyled">
              <li>О компании</li>
              <li>Вакансии</li>
              <li>Программа бета-тестирования</li>
              </ui>
          </div>
          {/* Column2 */}
          <div className="col1">
            <h4>Разделы</h4>
            <ui className="list-unstyled">
              <li>Мой Иви</li>
              <li>Фильмы</li>
              <li>Сериалы</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col2">
            <h4>Служба поддержки</h4>
            <ui className="list-unstyled">
              <li>Мы всегда готовы вам помочь.<br/>Наши операторы онлайн 24/7</li>
              <button className='typeChat'>Написать в чате</button><br />
              <EmailIcon className='emailicon'></EmailIcon>
              <LocalPhoneIcon className='localicon'></LocalPhoneIcon>
            </ui>
          </div>
          <div className='col3'>
            <button><CampaignOutlinedIcon/></button>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
//     <section className="footer">
//     <hr className="footer-seperator" />
//     <section className="footer-info">
//       <section className="footer-info-left">
//         <section className="footer-info__name">
//         О нас
//         </section>
//         <section className="footer-info__returns">
//           О компании
//           <br />
//           Вакансии
//           <br />
//           Программа бета-тестирования
//         </section>        
//       </section>
//       <section className="footer-info-center">
//         <section className="footer-info__email">
//           shop.info@gmail.com
//         </section>
//         <section className="footer-info__terms">
//           Terms and Conditions
//           <br />
//           Copyright
//         </section>
//       </section>
//       <section className="footer-info-right">
//         <section className="footer-info__number">
//           99999999999
//         </section>
//         <section className="footer-info__contact">
//           My Story
//           <br />
//           Contact Us
//         </section>
//       </section>
//     </section>
//     <hr className="footer-seperator" />
//   </section>
  )
}

export default Footer