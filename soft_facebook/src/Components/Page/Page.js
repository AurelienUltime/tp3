import User from "./User/User";

import "./Page.css";
class Page extends Component {
    render() {
      
        const {author, photo, description} = this.props.propriete1;

    
    return(
        <div className="murFB">
          <Auteur propriete2={author}/>
          <Photo img2={photo}/>
          <Contenu descrip={description}/>
          
        </div>
      )
}
}
export default Page; 