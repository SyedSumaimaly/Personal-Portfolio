import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FaBloggerB } from "react-icons/fa";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/profile.php?id=100077065929521' role='button'>
            <BsFacebook/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/syedsumaimaly' role='button'>
            <BsTwitter/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/syed_sumaim_aly/?fbclid=IwAR2XSdp9RxwZExjIFKDsEFtrLu9jI5O9T4ZMhXeRNFQ0XDyRTefTw6JuJL0' role='button'>
          <BsInstagram/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='www.linkedin.com/in/syed-sumaim-ali' role='button'>
            <BsLinkedin/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/SyedSumaimaly' role='button'>
            <BsGithub />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.youtube.com/channel/UC8REa9mYhsKf1aDyD4emrLQ' role='button'>
            <BsYoutube />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://theeducationstree.com/ ' role='button'>
            <FaBloggerB />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
       <p>
       Copyright © 2020 All Rights Reserved by <a className='text-white' href='https://sumaim-portfolio.netlify.app/'> Syed Sumaim Ali</a>
       </p>
      </div>
    </MDBFooter>
  );
}