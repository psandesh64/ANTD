import { Button } from 'antd';
import { useTheme } from '../context/themeContext'; // recommended

const Home: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>Current theme: {isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>

      <Button type="primary" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </div>
  );
};

export default Home;