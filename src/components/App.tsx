import React from "react";

//import components
import ChannelContainer from "./ChannelContainer";
export default function App(){
  return(
    <div className='app'>
      <div className="sidebar">
        <ChannelContainer />
        <div className="sidebar-right">
          <div className="dm-container">
            <div className="dm-nav">
              <div className="dm-title">Direct Messages</div>
              <div className="dm-new">+</div>
              <div className="fade">
                <form className="find-user">
                  <input className="find-user-input" placeholder="Enter a username" />
                  <div className="find-user-message">
                    {/* Displays error messages such as user doesn't exist */}
                  </div>
                  <button className="find-user-submit">Search</button>
                  <button className="find-user-close">Close</button>
                </form>
              </div>
            </div>
            <div className="dm-body">
              <div className="dm-item">
                <img className="dm-user-pic" alt='a user added account img' />
                <div className="dm-user-acc">A User</div>
              </div>
              <div className="dm-item">
                <img className="dm-user-pic" alt='a user added account img' />
                <div className="dm-user-acc">A User</div>
              </div>
              <div className="dm-item">
                <img className="dm-user-pic" alt='a user added account img' />
                <div className="dm-user-acc">A User</div>
              </div>
            </div>
            <div className="dm-footer">
              <img className="current-user-pic" alt="current user's added account img "/>
              <div className="current-username">Current signed in user</div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
          <div className="content-nav">
            {/* Displays either the selected channel or current user */}
            <div className="nav-title">Channel / User Name</div>
            {/* 
              Renders button text condtionally based on if the current selection is a DM or channel.
              Allows the user to close dm or leave channel.
            */}
            <button>Close DM / Leave Channel</button>
          </div>
          <div className="content-body">
            {/* Displays all messages in the channel*/}
            <div className="message-container">
              {/* Messages show the authors profile picture, name, timestamp and message content */}
              <div className="message">
                <img className="message-profile-pic" alt="message profile pic"/>
                <div className="message-author">Admin</div>
                <div className="message-send-time">02/20/2023 3:09pm</div>
                <div className="message-content">Hello World!</div>
              </div>
            </div>
            {/* allows the user to create new messages and sends them to the current selected channel or user */}
            <div className="message-footer">
              <input className='new-message-input' placeholder="Type a message here!"/>
              <button>Send</button>
            </div>
          </div>
        </div>
    </div>
  )
}