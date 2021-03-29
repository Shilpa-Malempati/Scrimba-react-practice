import React from "react"
import ContactCard from './ContactCard'

function Contacts() {
    return (
        <div className="contacts">
            <ContactCard 
                contact={{name: "Mr.jon", imgUrl: "http://placekitten.com/300/200", phone: "9876543219", email: "mr.jon@catnap.meow"}}
            />
            
            <ContactCard 
                contact={{name: "kitti", imgUrl: "http://placekitten.com/400/200", phone: "9876543218", email: "kitti@me.com"}}
            />
            
            <ContactCard
                contact={{name: "cutie", imgUrl: "http://placekitten.com/400/300", phone: "9876543217", email: "cutie@yahoo.com"}}
            />
            
            <ContactCard 
                contact={{name: "tom", imgUrl: "http://placekitten.com/200/100", phone: "9876543216", email: "tom@gmail.com"}}
            />
            
        </div>
    )
}

export default Contacts