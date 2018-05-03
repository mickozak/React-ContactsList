import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

const AvatarExampleSimple = (props) => (
    <List>
        <ListItem
            disabled={true}
            leftAvatar={
                <Avatar src="https://thumbs.dreamstime.com/b/modnisia-avatar-ikona-nowo-ytny-mieszkanie-styl-67060443.jpg" />
            }
        >
            Name: <b>{props.name}</b> Surname: <b>{props.surname}</b>
        </ListItem>
    </List>
);

export default AvatarExampleSimple;