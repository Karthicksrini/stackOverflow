import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStackOverflow} from '@fortawesome/free-brands-svg-icons';
function header(){
return(
    <header className="header">
      <a herf="" className="logo">
  
          <FontAwesomeIcon icon={faStackOverflow}
          size="2x"/><span className="title1">
          stack</span><span className="title2">OverFlow</span></a>
      <form action="" className="search">
        <input type="text" className="input" placeholder="Search..."/>
      </form>
      <a href="" className="profile">Karthick</a>
     </header> 
)
}
export default header;