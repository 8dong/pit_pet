import ReactDom from 'react-dom/client';

export const BackDrop = () => {
  return <div className='backdrop'></div>;
};

export const Modal = (props) => {
  return <div className='modal'>{props.children}</div>;
};
