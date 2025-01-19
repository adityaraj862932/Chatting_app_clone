import React ,{useState,useEffect} from 'react'
import './App.css'
import Nav from './components/nav.jsx'
import Search_box from './components/Search_box.jsx'
import Profiles from './components/Profiles.jsx'
import profilesData from './components/profilesData.json';
import Cb_header from './components/Cb_header.jsx'
import Cb_footer from './components/Cb_footer.jsx'
import Cb_body from './components/Cb_body.jsx'
function App() {

  const [profile,setprofile]=useState([])
  const [selectedProfile, setSelectedProfile] = useState(null);  // State for selected profile


  useEffect(()=>{
    setprofile(profilesData);
  }, []);

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);  // Set the selected profile on click
  };


  return (
    <div className='Container'>

          <div className="pl-parent">
            <div>
            <Nav/>
            <Search_box/>
            </div>
            <div className="profile_collection">
                  {profile.map((profile)=>(
                    <div key={profile.id} onClick={() => handleProfileClick(profile)}>
                      <Profiles
                          key={profile.id}
                          name={profile.name}
                          status={profile.status}
                          message={profile.message}
                          profilePicture={profile.profilePicture}
                      />
                      </div>
                  ))}
            </div>
           
          </div>
          <div className="cb-parent">
            <div className="cb-header">
              <Cb_header
              name={selectedProfile?.name}
              profilePicture={selectedProfile?.profilePicture}
              />
            </div>
            <div className="cb-body">
              <Cb_body/>
            </div>
            <div className="cb-footer">
              <Cb_footer/>
            </div>
          </div>
        


    </div>
  )
}

export default App