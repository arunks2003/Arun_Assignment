import { AiFillCloseCircle, AiFillWarning } from 'react-icons/ai';
import Nopriority from '../assests/icons/No-priority.svg'
import Highpriority from '../assests/icons/Img - High Priority.svg';
import Lowpriority from '../assests/icons/Img - Low Priority.svg';
import Mediumpriority from '../assests/icons/Img - Medium Priority.svg';
import Urgentpriority from '../assests/icons/SVG - Urgent Priority colour.svg';
import Backlog from '../assests/icons/Backlog.svg';
import Todo from '../assests/icons/To-do.svg';
import Cancel from '../assests/icons/Cancelled.svg';
import Done from '../assests/icons/Done.svg';
import Inprogress from '../assests/icons/in-progress.svg';

export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority":
            return <img src={Nopriority} alt="No Priority" width={14} height={14} />;
        case "Low":
            return <img src={Lowpriority} alt="No Priority" width={14} height={14} />;
        case "Medium":
            return <img src={Mediumpriority} alt="No Priority" width={14} height={14} />;
        case "High":
            return <img src={Highpriority} alt="No Priority" width={14} height={14} />;
        case "Urgent":
            return <img src={Urgentpriority} alt="No Priority" width={14} height={14} />;
        default:
            return <img src={Nopriority} alt="No Priority" width={14} height={14} />;
    }
}

export const getStatusIcon = (status) => {
    switch (status) {
        case "Backlog":
            return <img src={Backlog} alt="No Priority" width={14} height={14} />;
        case "Todo":
            return <img src={Todo} alt="No Priority" width={14} height={14} />;
        case "In progress":
            return <img src={Inprogress} alt="No Priority" width={14} height={14} />;
        case "Done":
            return <img src={Done} alt="No Priority" width={14} height={14} />;
        case "Canceled":
            return <img src={Cancel} alt="No Priority" width={14} height={14} />;
        default:
            return <AiFillCloseCircle color='#94a2b3' size={16} />;
    }
}
