import * as React from 'react';
import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';
import { DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { useBoolean } from '@uifabric/react-hooks';
import {useEffect} from 'react'

import { useSelector } from 'react-redux'
import SearchBox from './SearchBox'

const TeachingBubbleWide= () => {
  const dashnav = useSelector(state=> state.dashnav)
  const [teachingBubbleVisible, { toggle: toggleTeachingBubbleVisible }] = useBoolean(false);

  useEffect(() => {
    if(dashnav==='')
      toggleTeachingBubbleVisible()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [dashnav,]);   

  return (
    <div>
      <SearchBox  id="search"/>
        {teachingBubbleVisible && (
        <TeachingBubble
          calloutProps={{ directionalHint: DirectionalHint.bottomCenter }}
          target= "#search"
          isWide={true}
          hasCloseButton={true}
          closeButtonAriaLabel="Close"
          onDismiss={toggleTeachingBubbleVisible}
          headline="Search a company or a stock ticker"
        >
          Search for a company or ticker. Press enter or click on the results to view stock charts and indicators.
        </TeachingBubble>
      )}
    </div>
  );
};

export default TeachingBubbleWide;