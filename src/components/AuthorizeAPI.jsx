// src/components/AuthorizeAPI.js
import React, { useEffect } from 'react';
import { gapi } from 'gapi-script'


// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
// Authorization scopes required by the API; multiple scopes can be included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

const initClient = () => {
  setIsLoadingGoogleDriveApi(true);
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })
    .then(
      function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      },
      function (error) {}
    );
};


const AuthorizeAPI = () => {
  
  return (
    <div className="authorize-api">
      <h2>Authorize API</h2>
      <button id="authorize_button" onClick={handleAuthClick}>
        Authorize API Now
      </button>
      <button id="signout_button" onClick={handleSignoutClick}>
        Sign Out
      </button>
      <pre id="content" style={{ whiteSpace: 'pre-wrap' }}></pre>
    </div>
  );
}

export default AuthorizeAPI;
