import React from 'react';
import AddFriend from '../../component/Home/AddFriend';
import Friends from '../../component/Home/Friends';
import StatsBoard from '../../component/Home/StatsBoard';

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
