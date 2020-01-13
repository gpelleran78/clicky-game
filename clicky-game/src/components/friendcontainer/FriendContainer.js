import React, { Component } from 'react';
import Wrapper from '../wrapper/Wrapper';
import Title from '../title/Title';
import FriendCard from '../friendCard/FriendCard';
import friends from '../../friends.json';

class FriendContainer extends Component {
    state = {
        friends
    };

    removeFriend = (e, id) => {
       const filterFriends = this.state.friends.filter(friend => friend.id !== id);

       this.setState({ friends: filterFriends });

        console.log(this.state.friends);
    };

    render() {
        return (
            <Wrapper>
                <Title>Friends List</Title>
                {
                    this.state.friends.map(friend => (
                        <FriendCard
                            id={friend.id}
                            key={friend.id}
                            name={friend.name}
                            image={friend.image}
                            occupation={friend.occupation}
                            location={friend.location}
                            removeFriend={this.removeFriend} />
                    ))
                }

            </Wrapper>
        );
    };
};

export default FriendContainer;