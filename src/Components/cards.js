import React from 'react';
import { Layout, Flex } from 'antd';
import image1 from '../images/Artboard-15-20.jpg'
import image2 from '../images/meet-the-long-kings.jpg'
import image3 from '../images/New-Sides-Intro-Blog-1.jpg'


const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  
width: '29rem',
objectFit: 'cover'
};
const contentStyle = {
  textAlign: 'start',
 
  color: '#502314',
  backgroundColor: '#F5EBDC',
};
const siderStyle = {
  textAlign: 'start',
  color: '#fff',
  backgroundColor: '#1677ff',
};
const footerStyle = {
    textAlign: 'start',
    color: '#502314',
    backgroundColor: '#F5EBDC',
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'fit-content',
  maxWidth: '25rem',
};
export default function Card(){
return(

  <div className='mt-8 px-12 mb-5'>
  <h1 className='mb-4 font-extrabold text-[rgb(34,28,18)] text-2xl'>News</h1>
  <div className='grid sm:grid-cols-3 md:items-center mb-10'>
    <div className='rounded-md overflow-hidden w-[25rem]'>
      <img src={image2} className='object-cover'/>
      <div>
        <h1 className='font-extrabold text-3xl ml-1'>What's better than one's king?</h1>
        <p className='ml-1 mt-1'>Burger King is now Grilling in Nigeria and the Whopper has a new Home!!!</p>
      </div>
    </div>

    <div className='rounded-md overflow-hidden w-[25rem] mt-3'>
      <img src={image1} className='object-cover'/>
      <div>
        <h1 className='font-extrabold text-3xl ml-1'>BudgEat Menu is Back</h1>
        <p className='ml-1 mt-1'>BudgEat Menu is Back! Ball on a BudgEat only at Burger King</p>
      </div>
    </div>

    <div className='rounded-md overflow-hidden w-[25rem] mt-3'>
      <img src={image3} className='object-cover'/>
      <div>
        <h1 className='font-extrabold text-3xl ml-1'>New Sides Alert!!!</h1>
        <p className='ml-1 mt-1'>Burger King has introduced NEW SIDES to the BK Side Geng </p>
      </div>
    </div>
    </div>
  </div>
// {/* <Flex gap="middle" wrap="wrap">
//     <Layout style={layoutStyle}>
//       <img style={headerStyle} src={image1}/>
//       <Content style={contentStyle} className='font-extrabold text-3xl'>What's better than one's king?</Content>
//       <Footer style={footerStyle}>Burger King is now Grilling in Nigeria and the Whopper has a new Home!!!</Footer>
//     </Layout>
//     <Layout style={layoutStyle}>
//       <img style={headerStyle} src={image1}/>
//       <Content style={contentStyle} className='font-extrabold text-3xl'>What's better than one's king?</Content>
//       <Footer style={footerStyle}>Burger King is now Grilling in Nigeria and the Whopper has a new Home!!!</Footer>
//     </Layout>

//     <Layout style={layoutStyle}>
//       <img style={headerStyle} src={image1}/>
//       <Content style={contentStyle} className='font-extrabold text-3xl'>What's better than one's king?</Content>
//       <Footer style={footerStyle}>Burger King is now Grilling in Nigeria and the Whopper has a new Home!!!</Footer>
//     </Layout>
//     </Flex> */}
)
    

} 
  