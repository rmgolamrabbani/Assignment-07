import React from 'react';
import AddFriend from '../../component/homepage/AddFriend';
import Friends from '../../component/homepage/Friends';
import StatsBoard from '../../component/homepage/StatsBoard';

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
