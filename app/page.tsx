import React from 'react'
import ProductHero from '@components/ProductHero'

export default function Page(): React.JSX.Element {
  return (
    <main>
      <ProductHero
        name='Golden Hoops'
        price={5}
        description='Reprehenderit in incididunt aute labore tempor ipsum amet commodo commodo dolor amet. Officia aliqua esse non Lorem consequat ex enim. Ut duis officia ipsum amet amet ad sit anim deserunt sunt fugiat.'
        attributes={[
          { material: '14K Gold Filled' },
        ]}
        images={[
          'https://img.freepik.com/free-photo/aesthetic-golden-earrings-assortment_23-2149846589.jpg',
          'https://img.freepik.com/free-photo/aesthetic-golden-earrings-arrangement_23-2149846597.jpg',
          'https://img.freepik.com/premium-photo/aesthetic-golden-earrings-assortment_23-2149846584.jpg',
          'https://img.freepik.com/premium-photo/aesthetic-golden-earrings-assortment-high-angle_23-2149846580.jpg',
          'https://img.freepik.com/free-photo/aesthetic-golden-hoop-earrings-assortment_23-2149846588.jpg'
        ]}
      />
    </main>
  )
}