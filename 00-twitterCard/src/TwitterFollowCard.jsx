import { useState } from 'react';
import PropTypes from 'prop-types';
export function TwitterFollowCard ({ children, userName, initialIsFollowing}) {

 const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
 

 const imgSrc = `https://unavatar.io/${userName}`
 console.log(isFollowing);

 const text = isFollowing ? 'Siguiendo' : 'Seguir'
 const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'
 
const handleClick = () =>{
  setIsFollowing(!isFollowing)
}

    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
               className='tw-followCard-avatar'
               src={imgSrc} 
               alt="avatar io" />
            <div className='tw-followCard-info'>
              <strong>{children}</strong>
                    
                <span className='tw-followCard-infoUserName'>
                    @{(userName)}
                    </span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
            </button>
        </aside>
    </article>
    )
}
TwitterFollowCard.propTypes = {
    children: PropTypes.node.isRequired,
    userName: PropTypes.node.isRequired,
    initialIsFollowing: PropTypes.node.isRequired
  };