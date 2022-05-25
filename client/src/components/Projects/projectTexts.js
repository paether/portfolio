const wishListText = {
  features: [
    <>
      Create a wish list without the need to register (<b>Firebase</b> auth with
      <b>bcrypt</b> and <b>JWT</b>).
    </>,
    <>Hungarian and English language support.</>,
    <>
      Add presents/items to de wish list if you are administrator of the list.
    </>,
    <>
      The list can be shared with other people who can indicate they have
      reserved/bought a gift.
    </>,
    <>
      Any changes on the wish list appeares on any other opened windows as well
      (<b>socket.io</b> websockets).
    </>,
    <>
      Switch between admin and non-admin mode with a password to be able to
      delete/update/add (<b>CRUD</b>) gifts.
    </>,
  ],
  challenges: [
    <>
      Since I used a non-generic authentication with Firebase anonymous sessions
      I had to create my own unique version of handling users securely with the
      help of JWT tokens encrypted with bcrypt and stored on the backend.
    </>,
    <>
      Coordinating the multiple UI updates that are coming from different
      websockets through socket.io was quite a challange, React's useEffect and
      useCallback were a big help in solving them.
    </>,
    <>
      Firebase data handling are quite unique compared to <b>mongoDB/T-SQL</b>
      which I am already used to, so it was a good learning challange to find
      out how to query and store data with their special real-time snapshot
      updates with the help of their documentation.
    </>,
    <>
      I wanted to try out Heroku's <b>node.js</b> hosting which was challenging
      in the beginning but thanks to their detailed documentation I could solve
      it quickly.
    </>,
    <>
      I came up with the design of the site on my own as well which was also
      challenging in a way that I ad to it from the ground up, but it was worth
      it in the end also practiced a lot of CSS.
    </>,
  ],
};

const shortURLText = {
  features: [
    <>
      A compact website to generate a shortened URL and a QR Code from a long
      URL. I wanted to implement my kind-of URL shortener as that URL
      redirecting always amazed me.
    </>,
    <>
      Wanted to try out how QR Code generators work and how redirects are
      handled in <b>Express</b>.
    </>,
    <>
      Paste in a valid URL and the app will generate the shorted URl and QR
      Code.
    </>,
    <>
      Since this is a small app I tried to make up for it with a 3D CSS design.
    </>,
    <>Responsive layout.</>,
  ],
};
const portfolioText = {
  features: [
    <>
      Used mobile first methodology when started building out the responsive
      layout / design of the site.
    </>,
    <>
      Focused heavily on advanced CSS transitions / animations with the help of
      pseudo-elements and pseudo-classes.
    </>,
    <>
      Custom domain and forced SSL to the site which was a nice addition to my
      skills.
    </>,
    <>
      Optimizing the site's performance by using chrome's Lighthouse features
      and recommendations (first versions of the site included too performance
      heavy transitions / animations.)
    </>,
  ],
};

const chatterText = {
  features: [
    <>
      Login and Register into the app, using <b>passportjs</b> with{" "}
      <b>express</b> cookie sessions for auth.
    </>,
    <>Search for and add users as friends, start chatting right away.</>,
    <>
      Unread messages are stored and displayed if someone recieves a message
      when he/she is unavailable.
    </>,
    <>
      Real time message exchange with <b>socket.io</b>
    </>,
    <>Upload profile pictures.</>,
    <>Online status of friends are displayed.</>,
  ],
  challenges: [
    <>
      The hardest part was handling multiple conversations concurrently while
      the user is capable of adding new friends and then updating the UI
      concurrently. Multiple iteration of the that specific codebase was needed
      as I was adding more and more capabilites to make sure no useless
      re-renders of the components were happening.
    </>,
    <>
      The session handling of <b>PassportJS / Express</b> with socket.io to keep
      users logged in even when the page is refreshed. I had to dig deep into
      documentations on how to synchronize express-passport-socketio
      login/logout sessions with cookies which took multiple days..
    </>,
    <>
      Figuring out the special types/interfaces needed for<b>TypeScript</b>{" "}
      which was cumbersome but very worth it in during testing and when adding
      new capabilites to the app.
    </>,
  ],
};

export { wishListText, shortURLText, portfolioText, chatterText };
