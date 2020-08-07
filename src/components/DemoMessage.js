import * as React from 'react';
import {
  MessageBar,
  MessageBarType
} from 'office-ui-fabric-react';

const messageStyle = {
  root: {
    color: '#fff',
    backgroundColor: '#0078D4',
    textAlign: 'center'
  },
}

const DemoMessage = (p) => (
    <MessageBar
      messageBarType={MessageBarType.default}
      isMultiline={false}
      dismissButtonAriaLabel="Close"
      styles={messageStyle}
    >
      This is a product demostration, some settings are missing, get the full version to unlock all the features.
    </MessageBar>
  );
  
export default DemoMessage;