import React from 'react';
import './card.css';
import UserIcon from '../UserIcon/UserIcon';
import { getStatusIcon } from '../../utils/Helper';
import Nopriority from '../../assests/icons/No-priority.svg'
import Highpriority from '../../assests/icons/Img - High Priority.svg';
import Lowpriority from '../../assests/icons/Img - Low Priority.svg';
import Mediumpriority from '../../assests/icons/Img - Medium Priority.svg';
import Urgentpriority from '../../assests/icons/SVG - Urgent Priority grey.svg';

const Card = ({ ticket, userData, hideStatusIcon, hideProfileIcon }) => {
    return (
        <div className='card'>
            <div className='top-container'>
                <div className='ticket-id'>{ticket.id}</div>
                {!hideProfileIcon && <UserIcon name={userData.name} available={userData.available} />}
            </div>
            <div className='middle-container'>
                {!hideStatusIcon && getStatusIcon(ticket.status)}
                <div className='title'>{ticket.title}</div>
            </div>
            <div className='bottom-container'>
                <div className='more-icon-container'>
                    {/* <LuMoreHorizontal color="#797d84" /> */}
                    {(() => {
                        switch (ticket.priority) {
                            case 0:
                                return <img src={Nopriority} alt="No Priority" width={14} height={14} />;
                            case 1:
                                return <img src={Lowpriority} alt="Low Priority" width={14} height={14} />;
                            case 2:
                                return <img src={Mediumpriority} alt="Medium Priority" width={14} height={14} />;
                            case 3:
                                return <img src={Highpriority} alt="High Priority" width={14} height={14} />;
                            case 4:
                                return <img src={Urgentpriority} alt="Urgent Priority" width={14} height={14} />;
                            default:
                                return <img src={Nopriority} alt="No Priority" width={14} height={14} />;
                        }
                    })()}
                </div>
                {ticket.tag.map(t => (
                    <div key={t} className='tag-container'>
                        <div className='tag-icon'></div>
                        <div className='tag-text'>{t}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
