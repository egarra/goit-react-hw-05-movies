import { Watch } from 'react-loader-spinner';
import { Container, LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <LoaderWrapper>
        <Watch
          height="120"
          width="120"
          radius="48"
          color="rgb(27 180 139)"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </LoaderWrapper>
    </Container>
  );
};
