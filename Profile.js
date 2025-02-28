function ProfilePage() {
    return (
        <div className="container">
        
            <div className="header">
                <i className="fas fa-arrow-left back-btn"></i>
                <h2>Profile</h2>
                <div className="notif-icon">
                    <i className="fas fa-bell"></i>
                    <span className="badge">1</span>
                </div>
            </div>

            <div>
                <img src="https://sundayguardianlive.com/wp-content/uploads/2020/05/RamaK-Jagan-stimulus_Y.S.-Jagan-Mohan-Reddy-1.jpg" alt="Profile" className="profile-pic"/>
                <div className="profile-info">
                    YS JAGAN MOHAN REDDY <span>+9195XXXXXXXX</span>  
                </div>
            </div>
            <br/>

            <div className="menu">
                <div className="menu-item"><i className="fas fa-user-edit"></i>Edit Profile <i className="fas fa-chevron-right"></i></div>
                <div className="menu-item"><i className="fas fa-heart"></i>Favorite <i className="fas fa-chevron-right"></i></div>
                <div className="menu-item"><i className="fas fa-bell"></i>Notifications <i className="fas fa-chevron-right"></i></div>
                <div className="menu-item"><i className="fas fa-cog"></i>Settings <i className="fas fa-chevron-right"></i></div>
                <div className="menu-item"><i className="fas fa-question-circle"></i>Help and Support <i className="fas fa-chevron-right"></i></div>
                <div className="menu-item"><i className="fas fa-file-alt"></i>Terms and Conditions <i className="fas fa-chevron-right"></i></div>
                <div className="menu-item"><i className="fas fa-sign-out-alt"></i>Log Out <i className="fas fa-chevron-right"></i></div>
            </div>
        </div>
    );
}

ReactDOM.render(<ProfilePage />, document.getElementById("root"));
