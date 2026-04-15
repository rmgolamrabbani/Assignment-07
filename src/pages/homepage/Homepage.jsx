import React from 'react';
import AddFriend from '../../components/Home/AddFriend';
import Friends from '../../components/Home/Friends';
import StatsBoard from '../../components/Home/StatsBoard';

const Homepage = () => {
    return (
        <div>
            <AddFriend />
            <StatsBoard />
            <Friends />
        </div>
    );
}

export default Homepage;
