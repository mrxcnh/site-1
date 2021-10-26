import React from 'react';
import '../../App.css';
import DetailInfo from '../details/DetailInfo';
import HeaderImage from '../details/HeaderImage';
import Footer from '../Footer';

export default function ServiceDetail() {
  return (
    <>
      <HeaderImage url='../images/img-1.jpg' />
      <DetailInfo title='This is my test title for Detail Info' text_1='Lorem isslkcmaslkcmdskacm Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est, magnam iste illo adipisci porro dolore. Reiciendis fugiat minus ducimus. Eligendi, quasi! Quia quo iusto eligendi reiciendis odio maxime repellat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est, magnam iste illo adipisci porro dolore. Reiciendis fugiat minus ducimus. Eligendi, quasi! Quia quo iusto eligendi reiciendis odio maxime repellat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est, magnam iste illo adipisci porro dolore. Reiciendis fugiat minus ducimus. Eligendi, quasi! Quia quo iusto eligendi reiciendis odio maxime repellat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est, magnam iste illo adipisci porro dolore. Reiciendis fugiat minus ducimus. Eligendi, quasi! Quia quo iusto eligendi reiciendis odio maxime repellat!' text_2='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est, magnam iste illo adipisci porro dolore. Reiciendis fugiat minus ducimus. Eligendi, quasi! Quia quo iusto eligendi reiciendis odio maxime repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est, magnam iste illo adipisci porro dolore. Reiciendis fugiat minus ducimus. Eligendi, quasi! Quia quo iusto eligendi reiciendis odio maxime repellat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est, magnam iste illo adipisci porro dolore. Reiciendis fugiat minus ducimus. Eligendi, quasi! Quia quo iusto eligendi reiciendis odio maxime repellat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est, magnam iste illo adipisci porro dolore. Reiciendis fugiat minus ducimus. Eligendi, quasi! Quia quo iusto eligendi reiciendis odio maxime repellat!' />
      <Footer />
    </>
  )
}