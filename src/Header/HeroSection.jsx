import React from 'react'
import './Hero.css'


export default function HeroSection() {
  return (
    <>
    <div className='div1'>
      <div className='header'>
        <div className="nav">
        <div className='logo'>
        <h3>natfruits</h3>
        </div>
        <ul class="ul-header">
                <li><a href="#">home</a></li>
                <li><a href="#">categories</a></li>
                <li><a href="#">product</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </div>
      </div>
      <div class="contant">
        <h1>save on all products  <span>45% off</span></h1>
        <p>when you purchase 2 or items</p>
        <button>shope now</button>
    </div>
    </div>
    <section class="sec2">
        <div class="container">
          <div class="item-sec2">
            <h2>browse our categories</h2>
            <button>shope now</button>
          </div> 
          <div class="sec2-contant">
            <div class="sec2-info1">
                <h3 class="titel-sec2">fruits</h3>
                <p class="p-sec2">34 items</p>
            </div>
            <div class="sec2-info2">
                <h3 class="titel-sec2">vegetabels</h3>
                <p class="p-sec2">34 items</p>
          </div>
          <div class="sec2-info3">
                <h3 class="titel-sec2">drinks</h3>
                <p class="p-sec2">34 items</p>
          </div>
          <div class="sec2-info4">
                <h3 class="titel-sec2">fresh nuts</h3>
                <p class="p-sec2">34 items</p>
        </div>
        <div class="sec2-info5">
                <h3 class="titel-sec2">spices</h3>
                <p class="p-sec2">34 items</p>
        </div>
          </div>
        </div> 
      </section> 
      <section class="sec4">
       <div class="container">
        <div class="about">
            <div class="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZt0lBAUEugrU6oF6oR5qhhufhzrb5NZMMPA&s" alt="" />
            </div>
            <div class="content">
                <h1>about organic food</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dei cupiditate earum modi omnis, eius necessitatibus odit aspernatur expedita, aliquam enim voluptates, non blanditiis ab temporibus fugiat mollitia dignissimos quis ullam odio error molestiae molestias! Animi, itaque? Quaerat odio reiciendis exercitationem tempora aperiam!</p>
            </div>
           </div>
       </div>
      </section>   
    </>
  );
}


