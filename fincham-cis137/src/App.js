import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';




const Home = () => (
    <div id="welcome">

    <div id="logo">
    </div>

    <div id="sidebar">
        <p><strong>Hours of Operation:</strong><br/><br/>
            Monday-Friday - 4PM-7Pm<br/><br/>
            Saturday - 10AM-5PM<br/><br/>
            Sunday - Closed</p>
        <p><strong>Dues</strong><br/><br/>
            $35.00 - Annually</p>
        <div id="image"></div>
    </div>
    <h2>Welcome to BATC</h2>
    <p>
        The Baltimore Area Triathlon Club (BATC) is a USAT-registered Triathlon club
        based in the Baltimore metropolitan area. Our club offers guidance and support
        in the sport of Triathlon to individuals of all ages and abilities. We focus on
        the three endurance sports of Triathlon (Swimming, Biking and Running), but many
        of our members participate in many other sports as well. The club convenes monthly
        meetings, which are held at various venues throughout Baltimore. We invite speakers,
        coaches and sponsors to present various aspects of Triathlon. Members enjoy club-sponsored
        food and drink. <br/><br/>We occasionally have raffles for goodies provided by our sponsors.
        Members receive regular emails about upcoming events such as workouts, socials,
        free clinics, mock races, and race course previews. Our popular Swim-Bike-Run (SBR)
        workouts are sprint-length mock-races (1/2 mi swim, 14mi bike ride, 5K run). SBRs are
        held regularly throughout the race season at the Hammerman area of Gunpowder Falls State
        Park â€” site of the Baltimore Triathlon. <br/><br/>You can find the club well represented at many
        local races with banners and a club tent staffedby volunteers who support their fellow
        club members with club-sponsored food, drink, camaraderie and (of course) trash talk.
        Our modest annual dues ($35) cover the cost of food, drink, venues, race support,
        coaching, clinics and insurance. Finally, our corporate sponsors provide substantial
        discounts to members. The value of the discounts easily exceed the cost of the dues.
        We welcome individuals of all abilities and ages. Many of our members have no history
        of participation in organized athletics in high-school or college. <br/><br/>Many simply caught
        the bug (much) later in life. For individuals who are just starting out, and would like
        some extra support, the club runs a New Triathlete Program with a training plan, newbie
        clinics and individually assigned club mentors to guide novices to a fun and successful
        first triathlon. If you are not already a member, check us out! Attend one of our open
        monthly meetings or attend our club-sponsored SBR workouts. If you chose to attend an
        SBR as a non-member, just introduce yourself to the workout leader/director and sign a
        waiver (for insurance purposes).<br/><br/> We predict you will love it and join us! Baltimore Area
        Triathlon Club.Inc. is a 501(c)(7) non-profit club supported by approximately 150
        dues-paying members. Contributions or donations to the club are NOT tax deductable.
        For more information contact contact@baltimoretriathlon.org.
    </p>

    <div id="group">

    </div>




</div>

)
const About = () => (
    <div className="about">
        <h2>About</h2>
        <h3>2017 Board of Directors</h3>
        <div id="president">
        </div>
        <h4>Luke Smith</h4>
        <h4>President</h4>
        <p>As an avid runner, the natural progression for me was triathlon, I bought my first bike
            to corss train, and with in a month I was signed up for my first Tri.
            The best part about BATC is the the group workouts and meeting new people, and promoting
            the sport of triathlon.<br/><br/>Nunc orci justo, viverra at lacinia sit amet, molestie nec arcu.
            Praesent sit amet sollicitudinligula, vitae mollis tellus. Integer lacinia enim fermentum rutrum venenatis.
            Aenean tristiqueurna vitae orci bibendum pretium. Proin nec felis interdum, tempus dolor ut, ullamcorper
            metus.Donec tempor nisi sed nisi tincidunt consectetur. Pellentesque in viverra ligula. Nulla quis metus
            ut justo suscipit hendrerit. In hac habitasse platea dictumst. Sed vitae ullamcorper libero.</p>
        <div id="secretary">
        </div>
        <h4>Katie Damaroda</h4>
        <h4>Secretary</h4>
        <p> I have never enjoyed swimming and despite growing up spending summers on the bay,
            the idea of open water swiming just seemed crazy to me. I began training for my first
            triathlon as a way to overcome that and challenge myself I still rather be on the water
            than in it.<br/><br/>Nunc orci justo, viverra at lacinia sit amet, molestie nec arcu. Praesent
            sit amet sollicitudinligula, vitae mollis tellus. Integer lacinia enim fermentum rutrum venenatis.
            Aenean tristiqueurna vitae orci bibendum pretium. Proin nec felis interdum, tempus dolor ut, ullamcorper
            metus.Donec tempor nisi sed nisi tincidunt consectetur. Pellentesque in viverra ligula. Nulla quis metus
            ut justo suscipit hendrerit. In hac habitasse platea dictumst. Sed vitae ullamcorper libero.</p>
        <div id="tresurer">
        </div>
        <h4>Linda Anders</h4>
        <h4>Treasurer</h4>
        <p>I have always been very athletic, so triathlon came pretty easy for me.
            This year is a rebuilding year for me, trying to get my bike legs back after the
            Tour de Pink 200 mile/3 day bike ride in California.<br/><br/>
            Nunc orci justo, viverra at lacinia sit amet, molestie nec arcu. Praesent sit amet sollicitudin
            ligula, vitae mollis tellus. Integer lacinia enim fermentum rutrum venenatis. Aenean tristique
            urna vitae orci bibendum pretium. Proin nec felis interdum, tempus dolor ut, ullamcorper metus.
            Donec tempor nisi sed nisi tincidunt consectetur. Pellentesque in viverra ligula. Nulla quis metus
            ut justo suscipit hendrerit. In hac habitasse platea dictumst. Sed vitae ullamcorper libero.</p>
        <div className="history">
            <div id="ironman">
                <h1>Our Story</h1>

            </div>
            <div id="finish">
            </div>

            < div id="story">
                <div id="history">

                    <p>In 1997 friends John Doe and Bill Harry competed in their first Triathlon.
                        afer a few years in the sport they dcided to form a group with others in the Baltimore
                        area that we also insterested in multi-sport events, and in 2003 the Baltimore Area
                        Triathlon Club was born.Not only was BATC a training group, but over time turned into
                        a soical group as well. The mission of the BATC is to provide tarining and race support to
                        all of out memebers. <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras eleifend molestie mauris, vel tempus est accumsan eu. Morbi suscipit vulputate velit ac
                        hendrerit. Aliquam erat volutpat. Fusce porta mi vitae nunc scelerisque, ac maximus quam tristique.
                        Nam auctor, turpis id accumsan ultrices, dui lorem eleifend nulla, id tincidunt risus mi sit amet ex.
                        Proin sit amet libero a augue viverra gravida eget nec sem. Duis luctus porta luctus.<br/><br/>
                        Suspendisse maximus ante dui, quis fermentum elit luctus in. Sed vulputate non libero quis
                        ullamcorper. Nam in ligula elit. Vivamus mollis velit et ipsum tincidunt cursus.Cras
                        tempus enim ultricies velit tincidunt dignissim. Ut id viverra enim, a mollis erat. Proin feugiat,
                        dolor sit amet interdum mollis, velit lacus condimentum nunc, a rhoncus enim ex vel metus. <br/><br/>
                        Nunc orci justo, viverra at lacinia sit amet, molestie nec arcu. Praesent sit amet sollicitudin
                        ligula, vitae mollis tellus. Integer lacinia enim fermentum rutrum venenatis. Aenean tristique
                        urna vitae orci bibendum pretium. Proin nec felis interdum, tempus dolor ut, ullamcorper metus.
                        Donec tempor nisi sed nisi tincidunt consectetur. Pellentesque in viverra ligula. Nulla quis metus
                        ut justo suscipit hendrerit. In hac habitasse platea dictumst. Sed vitae ullamcorper libero.
                    </p>
                </div>
            </div>



        </div>
    </div>
)

function Events(props){
    const list = props.event;
    return(
        <div className="event">
            <figure>
                <figcaption>
                    <ul>
                        <li>Name: {list.type}</li>
                        <li>Age: {list.date}</li>
                        <li>Description: {list.description}</li>
                    </ul>
                </figcaption>
            </figure>
        </div>
    );
}

function Lister(props){
    let data = {
        "name": "Bob",
        "event": [
            {
                "type": "Group Ride",
                "date": "July 7, 2017, at 5:00PM",
                "description": "Weekly Group Ride"
            },
            {

                "name": "Mittens",
                "date": "July 8, 2017 , at 10:00AM",
                "description": "Weekly Open Water Swim Clinic"
            }
        ]
    };


    const listItems = data.event.map( Eventlist => <Events upcoming={Eventlist}/> );

    return (
        <div>
            <h1>{data.name} Events</h1>
            <div className="events">{listItems}</div>
        </div>
    );
}

ReactDOM.render(<Lister />, document.getElementById('root'));



class App extends Component {
    render() {
        return (
            <Router>
                <div className="navigation">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/events">Events</Link></li>
                    </ul>
                    <div id="header">
                        <h1>Baltimore Area Triathlon Club Inc.</h1>
                        <h2>Swim | Bike | Run | Fun</h2>
                    </div>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/events" exact component={Events}/>
                </div>

            </Router>

        );
    }
}


export default App;
