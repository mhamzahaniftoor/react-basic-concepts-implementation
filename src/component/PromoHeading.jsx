import React from 'react'
import { Promo } from './Promo'
import { SideBar } from './SideBar'

export const PromoHeading = () => {
  let data = {
    heading: "100",
    description: '101 up'
  }
  return (
    <>
    <SideBar head = {data.heading} />
    <Promo head = {data.description} />
    </>

)
}
