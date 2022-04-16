import axios from "axios";

//A request is sent to make sure by the time someone clicks on the project Heroku starts the server.
//These projects are hosted free on Heroku so they put them on sleep after a period of time.
export default async function ping() {
    try {
      await axios.get(
        "https://paether-wishlistapp.herokuapp.com/"
      );
      await axios.get(
        "https://p-urls.herokuapp.com/"
      );
      
    } catch (error) {
      console.log(error);
    }
  };

