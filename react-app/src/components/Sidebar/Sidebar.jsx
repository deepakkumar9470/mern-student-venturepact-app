
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddCardIcon from '@mui/icons-material/AddCard';
import { Link } from "react-router-dom";
import './sidebar.scss'

const Sidebar = () => {
 
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">MERN App</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
         <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
         </Link> 

          <p className="title">STUDENTS'S LISTS</p>
          <Link to="/students-list" style={{ textDecoration: "none" }}>
            <li>
              <GroupIcon className="icon" />
              <span>Students</span>
            </li>
          </Link>
          <p className="title">OPERATIONS</p>
          <Link to="/students" style={{ textDecoration: "none" }}>
            <li>
              <PersonAddIcon className="icon" />
              <span>AddStudent</span>
            </li>
          </Link>
          <Link to="/add-fee" style={{ textDecoration: "none" }}>
            <li>
              <AddCardIcon className="icon" />
              <span>Fees</span>
            </li>
          </Link>
          <Link to="/add-transaction" style={{ textDecoration: "none" }}>
            <li>
              <AccountBalanceWalletIcon className="icon" />
              <span>Transaction</span>
            </li>
          </Link>
      
        </ul>
      </div>
     
    </div>
  );
};

export default Sidebar;