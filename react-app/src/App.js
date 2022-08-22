import React from 'react';
import './App.scss'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar';
import Registration from './pages/Registration';
import Login from './pages/Login';
import CreateStudent from './components/Student/CreateStudent';
import AddFees from './components/Fees/AddFees';
import AddTransaction from './components/Transactions/AddTransaction';
import { useSelector } from 'react-redux';
import StudentsLists from './components/StudentsLists/StudentsLists';
import {Toaster} from 'react-hot-toast'
import Header from './components/Header/Header';

const App = () => {
	const auth = useSelector((state)=> state.auth)
  return (
	<div>
           <div>
              <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                  success : {
                    theme: {
                      primary : '#4aee88',
                    },
                  },
                }}
                />
            </div>
		<BrowserRouter>
             <Navbar/>
			<Routes>

				{
					auth._id ? (
					<Route path='/' element={<Dashboard/>}>
					 <Route index element={<Header/>}/>	
					 <Route path='students-list' element={<StudentsLists/>}/>	
					 <Route path='students' element={<CreateStudent/>}/>
					 <Route path='add-fee' element={<AddFees/>}/>
					 <Route path='add-transaction' element={<AddTransaction/>}/>

				     </Route>
					) : (
						<>
						<Route path='/login' element={<Login/>}/>
				        <Route path='/register' element={<Registration/>}/>
					
					</>
					)
				}

                 {
					!auth._id && <>
						<Route path='/login' element={<Login/>}/>
				        <Route path='/register' element={<Registration/>}/>
					
					</>
				 }
			
			</Routes>
		</BrowserRouter>
	    
	</div>
  );
}

export default App;
