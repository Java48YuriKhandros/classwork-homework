import React from 'react'
import main from '../Images/main.jpg';
import friend1 from '../Images/friend1.jpg';
import friend2 from '../Images/friend2.jpg';
import friend3 from '../Images/friend3.jpg';
import friend4 from '../Images/friend4.jpg';
import friend5 from '../Images/friend5.jpg';
import friend6 from '../Images/friend6.jpg';
import friend7 from '../Images/friend7.jpg';
import friend8 from '../Images/friend8.jpg';
import friend9 from '../Images/friend9.jpg';

const Main = () => {
  return (
    <main className="clearfix">
        <section className="float-start w-25 me-3">
            <img className="w-100" src={main} alt="Luke Skywalker"/>
        </section>
        <section className="float-end w-50 row border mx-1">
            <h2 className="col-12 text-center">Dream Team</h2>
            <img className="col-4 p-1"src={friend1} alt="Friend"/>
            <img className="col-4 p-1"src={friend2} alt="Friend"/>
            <img className="col-4 p-1"src={friend3} alt="Friend"/>
            <img className="col-4 p-1"src={friend4} alt="Friend"/>
            <img className="col-4 p-1"src={friend5} alt="Friend"/>
            <img className="col-4 p-1"src={friend6} alt="Friend"/>
            <img className="bottomLeft col-4 p-1" src={friend7} alt="Friend"/>
            <img className="col-4 p-1"src={friend8} alt="Friend"/>
            <img className="bottomRight col-4 p-1" src={friend9} alt="Friend"/>
        </section>
        <p className="farGalaxy">It is a period of civil war.
            Rebel spaceships, striking
            from a hidden base, have won
            their first victory against
            the evil Galactic Empire.

            During the battle, Rebel
            spies managed to steal secret
            plans to the Empire's
            ultimate weapon, the DEATH
            STAR, an armored space
            station with enough power
            to destroy an entire planet.

            Pursued by the Empire's
            sinister agents, Princess
            Leia races home aboard her
            starship, custodian of the
            stolen plans that can save her
            people and restore
            freedom to the galaxy....</p>
    </main>
  )
}

export default Main