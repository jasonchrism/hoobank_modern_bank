import React from 'react'
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit officiis dolore debitis! Numquam hic a, cum iusto quia dicta alias. Sit soluta voluptatem ab vero possimus facere! Excepturi, ipsam.</p>
        <Button styles={'mt-10'} />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="Card" className='w-[100%] h-[100%]' />
      </div>

    </section>
  )
}

export default CardDeal