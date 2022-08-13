import styles from "./style"

const App = () => (
    
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.padding} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            NAVBAR
          </div>
        </div>

        <div className={` bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            HERO
          </div>
        </div>

        <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            Stats
            Busines
            Billing
            CardDeal
            Testimonial
            Clients
            CTA
            Footer
          </div>
        </div>
      </div>
    
  )


export default App