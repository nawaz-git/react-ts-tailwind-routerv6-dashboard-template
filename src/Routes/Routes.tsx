import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Projects from '../components/Projects';
import Protected from './Protected';
import Dashboard from '../components/Dashboard';

const RoutesView: React.FC = () => {
    const routes: Record<string, JSX.Element> = {
        '/login': <Login />,
        '/': (
            <Protected>
                <Dashboard />
            </Protected>
        ),
        '/projects': (
            <Protected>
                <Dashboard>
                    <Projects />
                </Dashboard>
            </Protected>
        ),
    };

    return (
        <Routes>
            {Object.entries(routes).map(([path, element]) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    );
};

export default RoutesView;
