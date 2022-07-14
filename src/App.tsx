import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '~/common/hooks/store.hooks';
import { populateFeed } from '~/features/feed/feed.slice';

function App() {
  const contestantList = useAppSelector((state) => state.feed.contestantList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(populateFeed());
  }, []);

  return (
    <div className="App">
      {contestantList.map((c) => (
        <div>
          {c.userID}: {c.displayName}
        </div>
      ))}
    </div>
  );
}

export default App;
