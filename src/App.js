import React from 'react';

import ContactList from "./components/contactslist/ContactList";
import AppBar from 'material-ui/AppBar'
import AvatarExampleSimple from "./components/contactslist/AvatarExampleSimple";

class App extends React.Component {
    render() {
        return (
            <div>

                    <AppBar
                        title="CONTACTS LIST"
                    />

                    <div>
                        <ContactList/>

                    </div>

            </div>
        );
    }
}

export default App;