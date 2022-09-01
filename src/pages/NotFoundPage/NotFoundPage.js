import "./NoteFoundPage.scss"

function NotFoundPage() {

    return (
        <div>
            <p className="error">HTTP 404: Page Not Found</p>
            <p className="error">And now for the best art piece ever created</p>
            <img className="error" src={require("../../assets/rick.gif")} alt="ultimate error"/>
        </div>
    );
  }
  
  export default NotFoundPage;