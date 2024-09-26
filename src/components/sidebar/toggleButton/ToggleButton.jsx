const ToggleButton = ({ setIsOpen}) => {
  return <button onClick={() => setIsOpen(prev => !prev)}>ToggleButton</button>;
};

export default ToggleButton;
