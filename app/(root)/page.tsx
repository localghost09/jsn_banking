import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName : 'Nikhil' , lastName : 'Singh' ,email: 'nikhilprataps66@gmail.com'};
  return (
    <div>
        <section className='home'>
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                    type="greeting"
                    title="Welcome to the app"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions effortlessly." 
                    />
                    <TotalBalanceBox
                       accounts={[]}
                       totalBanks={1}
                       totalCurrentBalance={1250.35}
                    />   
                </header>

                Recent Transactions
           
            </div>
            <RightSidebar
               user={loggedIn}
               transactions={[]}
               banks={[{ currentBalance: 1253.05},{ currentBalance: 123.05}]}

            
            />
        </section>
    </div>
  )
}

export default Home
