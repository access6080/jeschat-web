import React from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { MdFeaturedVideo } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { MdOutlinePermMedia} from 'react-icons/md';
import { GiThreeFriends } from 'react-icons/gi';
import { GrGroup } from 'react-icons/gr';
import { GrContactInfo } from 'react-icons/gr';

import CCenterRow from './CCenterRow';
import { logout } from '../api';


const ControlCenter = () => {
    const handleLogout = async () => {
        await logout();
        window.location.reload();
    }
    
    return (
        <div className="glass w-1/5 h-full shadow-lg rounded-lg p-2 hidden xl:block overflow-y-auto">
            <h1 className="text-xl font-serif text-center">Chat Controls</h1>
            <div className="h-[1px] bg-blue-300 my-2" />
            
            <CCenterRow title="Boruto's Info" Icon={GrContactInfo}/>
            <CCenterRow title="Media" Icon={MdOutlinePermMedia} disabled/>
            <CCenterRow title="Delete Chat" Icon={MdDelete}/>
            
            <h1 className="text-xl font-serif text-center">Control Center</h1>
            <div className="h-[1px] bg-blue-300 my-2" />

            <CCenterRow title="Profile" Icon={BsPersonFill} />
            <CCenterRow title="Create A Group" Icon={GrGroup} disabled/>
            <CCenterRow title="Find Friends" Icon={GiThreeFriends}/>
            <CCenterRow title="Create Video Room" Icon={MdFeaturedVideo} disabled/>
            <CCenterRow title="Logout" Icon={BiLogOut} onClick={handleLogout} />

        </div>
    )
}

export default ControlCenter
