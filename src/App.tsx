import Feed from '~/features/feed/Feed';
import Container from '~/components/container/Container';
import { GlobalStyles } from '~/global.styled';

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Feed />
    </Container>
  );
}

export default App;
