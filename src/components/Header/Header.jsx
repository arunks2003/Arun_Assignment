import React from 'react';
import './header.css';
import DropDown from '../Dropdowns-DisplayDropdown/DropDown';

const Header = ({ grouping, setGrouping, ordering, setOrdering }) => {
    return (
        <header>
            <DropDown
                grouping={grouping}
                setGrouping={setGrouping}
                ordering={ordering}
                setOrdering={setOrdering}
            />
        </header>
    );
};

export default Header;
