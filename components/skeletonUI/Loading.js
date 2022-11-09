import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const LoadingOutlinedWrapper = styled(LoadingOutlined)`
  display: block;
  font-size: 40px;
`;

const LoadingSpinner = () => {
  return <LoadingOutlinedWrapper />;
};

export default LoadingSpinner;
