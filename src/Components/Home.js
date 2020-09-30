import React from 'react';
import './Home.css';
import { Banner } from "./Banner";
import { Card } from "./Card";

export const Home = () => {
  return (
      <div className='home'>
          <Banner />

          <div className='home_section'>
                <Card src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
                title="Luminous Kitchen"
                description="Comfortable and cozy kitchen, for big groups"/>
                <Card src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=973&q=80"
                title="Cozy Apartment"
                description="Enjoy this beautiful living room"/>
                <Card src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                title="Affordable but modern apartments"
                description="Not quite luxury but surely comfortable studio for your perfect holidays"/>
          </div>
          <div className='home_section'>
                <Card src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                      title="3 Bedroom Flat in Sevilla"
                      description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                      price="120€/night" />
                <Card src="https://images.unsplash.com/photo-1539922631499-09155cc609a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                      title="Penthouse in Barcelona"
                      description="Enjoy the amazing sights of London with this stunning penthouse"
                      price="350€/night" />
                <Card src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                      title="1 Bedroom apartment"
                      description="Superhost with great amenities and a fabolous shopping complex nearby"
                      price="100€/night"/>
          </div>
      </div>
  )
}
